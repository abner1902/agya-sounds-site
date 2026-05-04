#!/usr/bin/env node

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function nowStamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function parseArgs(argv) {
  const args = {
    root: process.cwd(),
    quality: 85,
    dirs: ["public/images/artists", "public/images/releases"],
    galleryPrefixes: ["/images/artists/", "/images/releases/"],
    scanDirs: ["src"],
    deploy: false,
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--quality" && argv[i + 1]) {
      args.quality = Number(argv[i + 1]);
      i += 1;
    } else if (token === "--dirs" && argv[i + 1]) {
      args.dirs = argv[i + 1].split(",").map((x) => x.trim()).filter(Boolean);
      i += 1;
    } else if (token === "--gallery-prefixes" && argv[i + 1]) {
      args.galleryPrefixes = argv[i + 1].split(",").map((x) => x.trim()).filter(Boolean);
      i += 1;
    } else if (token === "--scan-dirs" && argv[i + 1]) {
      args.scanDirs = argv[i + 1].split(",").map((x) => x.trim()).filter(Boolean);
      i += 1;
    } else if (token === "--deploy") {
      args.deploy = true;
    } else if (token === "--dry-run") {
      args.dryRun = true;
    }
  }
  return args;
}

function runNodeScript(scriptPath, args, cwd) {
  const result = spawnSync("node", [scriptPath, ...args], {
    cwd,
    stdio: "inherit",
    shell: false,
  });
  if (result.status !== 0) {
    throw new Error(`Falha em ${path.basename(scriptPath)} (exit ${result.status})`);
  }
}

function runCommand(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: "inherit",
    shell: false,
  });
  if (result.status !== 0) {
    throw new Error(`Falha em comando: ${command} ${args.join(" ")} (exit ${result.status})`);
  }
}

function ensureBackupDirs(root, stamp) {
  const backupRoot = path.join(root, ".backups", `webp-migration-${stamp}`);
  fs.mkdirSync(backupRoot, { recursive: true });
  return backupRoot;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const stamp = nowStamp();
  const scriptsDir = path.join(args.root, "scripts");
  const backupRoot = ensureBackupDirs(args.root, stamp);
  const convertReport = path.join(args.root, ".tmp", `webp-conversion-${stamp}.json`);
  const replaceReport = path.join(args.root, ".tmp", `webp-replace-${stamp}.json`);
  const replaceBackup = path.join(backupRoot, "code-before-replace");
  const bareFilenameBaseDirs = args.dirs;

  fs.mkdirSync(path.dirname(convertReport), { recursive: true });
  fs.mkdirSync(path.dirname(replaceReport), { recursive: true });

  console.log("========================================");
  console.log("Pipeline: Migracao de JPG/PNG para WebP");
  console.log("========================================");
  console.log(`Qualidade WebP: ${args.quality}`);
  console.log(`Diretorios de imagem: ${args.dirs.join(", ")}`);
  console.log(`Diretorios de codigo: ${args.scanDirs.join(", ")}`);
  console.log(`Backup raiz: ${path.relative(args.root, backupRoot).replace(/\\/g, "/")}`);
  console.log(`Deploy habilitado: ${args.deploy ? "sim" : "nao"}`);
  console.log(`Dry-run: ${args.dryRun ? "sim" : "nao"}`);

  try {
    runNodeScript(
      path.join(scriptsDir, "webp-convert-gallery.js"),
      [
        "--quality",
        String(args.quality),
        "--dirs",
        args.dirs.join(","),
        "--report",
        convertReport,
        ...(args.dryRun ? ["--dry-run"] : []),
      ],
      args.root
    );

    runNodeScript(
      path.join(scriptsDir, "webp-replace-references.js"),
      [
        "--scan-dirs",
        args.scanDirs.join(","),
        "--gallery-prefixes",
        args.galleryPrefixes.join(","),
        "--bare-filename-base-dirs",
        bareFilenameBaseDirs.join(","),
        "--backup-dir",
        replaceBackup,
        "--report",
        replaceReport,
        ...(args.dryRun ? ["--dry-run"] : []),
      ],
      args.root
    );

    runNodeScript(
      path.join(scriptsDir, "webp-validate.js"),
      [
        "--scan-dirs",
        args.scanDirs.join(","),
        "--gallery-dirs",
        args.dirs.join(","),
        "--gallery-prefixes",
        args.galleryPrefixes.join(","),
        "--bare-filename-base-dirs",
        bareFilenameBaseDirs.join(","),
      ],
      args.root
    );

    if (!args.dryRun) {
      runCommand("npm", ["run", "build"], args.root);
    } else {
      console.log("[SKIP] Build ignorado em dry-run.");
    }

    if (args.deploy) {
      if (args.dryRun) {
        console.log("[SKIP] Deploy ignorado em dry-run.");
      } else {
        runCommand("vercel", ["--prod"], args.root);
      }
    } else {
      console.log("[SKIP] Deploy nao solicitado.");
    }

    console.log("\n[OK] Pipeline finalizado com sucesso.");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`\n[ABORTADO] ${message}`);
    console.error("Nada foi revertido automaticamente. Use os backups se necessario.");
    process.exit(1);
  }
}

main();

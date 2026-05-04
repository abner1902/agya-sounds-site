#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const DEFAULT_SCAN_DIRS = ["src"];
const DEFAULT_INCLUDE_EXT = [".js", ".jsx", ".ts", ".tsx", ".mdx", ".json"];

function nowStamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function parseArgs(argv) {
  const args = {
    root: process.cwd(),
    scanDirs: [...DEFAULT_SCAN_DIRS],
    includeExt: [...DEFAULT_INCLUDE_EXT],
    galleryUrlPrefixes: ["/images/artists/", "/images/releases/"],
    bareFilenameBaseDirs: ["public/images/artists", "public/images/releases"],
    backupDir: null,
    dryRun: false,
    reportPath: null,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--scan-dirs" && argv[i + 1]) {
      args.scanDirs = argv[i + 1].split(",").map((x) => x.trim()).filter(Boolean);
      i += 1;
    } else if (token === "--include-ext" && argv[i + 1]) {
      args.includeExt = argv[i + 1].split(",").map((x) => x.trim().toLowerCase()).filter(Boolean);
      i += 1;
    } else if (token === "--gallery-prefixes" && argv[i + 1]) {
      args.galleryUrlPrefixes = argv[i + 1].split(",").map((x) => x.trim()).filter(Boolean);
      i += 1;
    } else if (token === "--bare-filename-base-dirs" && argv[i + 1]) {
      args.bareFilenameBaseDirs = argv[i + 1].split(",").map((x) => x.trim()).filter(Boolean);
      i += 1;
    } else if (token === "--backup-dir" && argv[i + 1]) {
      args.backupDir = argv[i + 1];
      i += 1;
    } else if (token === "--dry-run") {
      args.dryRun = true;
    } else if (token === "--report" && argv[i + 1]) {
      args.reportPath = argv[i + 1];
      i += 1;
    }
  }

  return args;
}

function ensureDirForFile(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function walkFiles(startDir, includeExt) {
  const out = [];
  if (!fs.existsSync(startDir)) return out;
  const entries = fs.readdirSync(startDir, { withFileTypes: true });

  for (const entry of entries) {
    const abs = path.join(startDir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry.name)) continue;
      out.push(...walkFiles(abs, includeExt));
    } else {
      const ext = path.extname(abs).toLowerCase();
      if (includeExt.includes(ext)) out.push(abs);
    }
  }
  return out;
}

function extractStringImagePaths(content) {
  const regex = /(['"`])([^'"`\n\r]+\.(?:jpe?g|png))\1/gi;
  const matches = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    matches.push(m[2]);
  }
  return matches;
}

function normalizeForReplacement(imagePath) {
  return imagePath.replace(/\\/g, "/");
}

function isBareFilename(imagePath) {
  return !imagePath.includes("/") && !imagePath.startsWith(".");
}

function replacePathInContent(content, oldPath, newPath) {
  const escapedOld = oldPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(['"\`])${escapedOld}\\1`, "g");
  return content.replace(re, (match, q) => `${q}${newPath}${q}`);
}

function copyToBackup(root, backupRoot, absFile) {
  const relative = path.relative(root, absFile);
  const backupPath = path.join(backupRoot, relative);
  fs.mkdirSync(path.dirname(backupPath), { recursive: true });
  fs.copyFileSync(absFile, backupPath);
}

function hasWebpSibling(root, inputPath, bareFilenameBaseDirs) {
  const normalized = normalizeForReplacement(inputPath);
  if (isBareFilename(normalized)) {
    return bareFilenameBaseDirs.some((baseDir) => {
      const candidate = path.join(root, baseDir, normalized.replace(/\.(jpe?g|png)$/i, ".webp"));
      return fs.existsSync(candidate);
    });
  }

  const noPrefix = normalized.startsWith("/") ? normalized.slice(1) : normalized;
  const webpPath = noPrefix.replace(/\.(jpe?g|png)$/i, ".webp");
  const abs = path.join(root, "public", webpPath.startsWith("public/") ? webpPath.slice(7) : webpPath);
  return fs.existsSync(abs);
}

function toWebpPath(inputPath) {
  return inputPath.replace(/\.(jpe?g|png)$/i, ".webp");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const backupDir =
    args.backupDir || path.join(args.root, ".backups", `webp-replace-${nowStamp()}`);
  const reportPath =
    args.reportPath || path.join(args.root, ".tmp", `webp-replace-report-${nowStamp()}.json`);
  ensureDirForFile(path.join(backupDir, ".keep"));
  ensureDirForFile(reportPath);

  const stats = {
    startedAt: new Date().toISOString(),
    scanDirs: args.scanDirs,
    includeExt: args.includeExt,
    galleryUrlPrefixes: args.galleryUrlPrefixes,
    bareFilenameBaseDirs: args.bareFilenameBaseDirs,
    filesScanned: 0,
    filesUpdated: 0,
    totalReplacements: 0,
    unresolvedPaths: [],
    updatedFiles: [],
    backupDir: path.relative(args.root, backupDir).replace(/\\/g, "/"),
    dryRun: args.dryRun,
  };

  const scanFiles = args.scanDirs
    .map((dir) => walkFiles(path.resolve(args.root, dir), args.includeExt))
    .flat();

  console.log("== Substituicao de referencias para .webp ==");
  console.log(`Diretorios de scan: ${args.scanDirs.join(", ")}`);
  console.log(`Arquivos elegiveis: ${scanFiles.length}`);

  for (const file of scanFiles) {
    stats.filesScanned += 1;
    const relativeFile = path.relative(args.root, file).replace(/\\/g, "/");
    const original = fs.readFileSync(file, "utf8");
    const imagePaths = extractStringImagePaths(original);
    if (imagePaths.length === 0) continue;

    let updated = original;
    let replacementsForFile = 0;

    for (const imagePathRaw of imagePaths) {
      const imagePath = normalizeForReplacement(imagePathRaw);
      if (!/\.(jpe?g|png)$/i.test(imagePath)) continue;
      const inGalleryScope =
        isBareFilename(imagePath) || args.galleryUrlPrefixes.some((prefix) => imagePath.startsWith(prefix));
      if (!inGalleryScope) continue;

      const webpPath = toWebpPath(imagePath);
      const webpExists = hasWebpSibling(args.root, imagePath, args.bareFilenameBaseDirs);

      if (!webpExists) {
        stats.unresolvedPaths.push({
          file: relativeFile,
          imagePath,
          expectedWebp: webpPath,
        });
        continue;
      }

      const nextUpdated = replacePathInContent(updated, imagePath, webpPath);
      if (nextUpdated !== updated) {
        replacementsForFile += 1;
        updated = nextUpdated;
      }
    }

    if (replacementsForFile > 0) {
      if (!args.dryRun) {
        copyToBackup(args.root, backupDir, file);
        fs.writeFileSync(file, updated, "utf8");
      }
      stats.filesUpdated += 1;
      stats.totalReplacements += replacementsForFile;
      stats.updatedFiles.push({
        file: relativeFile,
        replacements: replacementsForFile,
      });
      console.log(`[OK] ${relativeFile}: ${replacementsForFile} substituicoes`);
    }
  }

  stats.finishedAt = new Date().toISOString();
  stats.reportPath = path.relative(args.root, reportPath).replace(/\\/g, "/");
  fs.writeFileSync(reportPath, JSON.stringify(stats, null, 2), "utf8");

  console.log("\n== Resumo ==");
  console.log(`Arquivos escaneados: ${stats.filesScanned}`);
  console.log(`Arquivos atualizados: ${stats.filesUpdated}`);
  console.log(`Substituicoes: ${stats.totalReplacements}`);
  console.log(`Referencias pendentes: ${stats.unresolvedPaths.length}`);
  console.log(`Backup de codigo: ${stats.backupDir}`);
  console.log(`Relatorio: ${stats.reportPath}`);
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exit(1);
}

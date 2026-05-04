#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];
const DEFAULT_QUALITY = 85;
const DEFAULT_DIRS = ["public/images/artists", "public/images/releases"];

function nowStamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function parseArgs(argv) {
  const args = {
    root: process.cwd(),
    quality: DEFAULT_QUALITY,
    dirs: [...DEFAULT_DIRS],
    overwrite: false,
    dryRun: false,
    reportPath: null,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--quality" && argv[i + 1]) {
      args.quality = Number(argv[i + 1]);
      i += 1;
    } else if (token === "--dirs" && argv[i + 1]) {
      args.dirs = argv[i + 1]
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      i += 1;
    } else if (token === "--overwrite") {
      args.overwrite = true;
    } else if (token === "--dry-run") {
      args.dryRun = true;
    } else if (token === "--report" && argv[i + 1]) {
      args.reportPath = argv[i + 1];
      i += 1;
    }
  }

  if (!Number.isFinite(args.quality) || args.quality < 1 || args.quality > 100) {
    throw new Error("Qualidade invalida. Use --quality entre 1 e 100.");
  }

  return args;
}

function walkFiles(startDir) {
  if (!fs.existsSync(startDir)) return [];

  const out = [];
  const entries = fs.readdirSync(startDir, { withFileTypes: true });
  for (const entry of entries) {
    const abs = path.join(startDir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkFiles(abs));
    } else {
      out.push(abs);
    }
  }
  return out;
}

function ensureDirForFile(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const reportPath =
    args.reportPath ||
    path.join(args.root, ".tmp", `webp-conversion-report-${nowStamp()}.json`);
  ensureDirForFile(reportPath);

  const stats = {
    startedAt: new Date().toISOString(),
    quality: args.quality,
    dirs: args.dirs,
    totalCandidates: 0,
    converted: 0,
    skippedExisting: 0,
    skippedNonImage: 0,
    missingDirs: [],
    failures: [],
    items: [],
    bytesBefore: 0,
    bytesAfter: 0,
  };

  console.log("== Conversao JPG/PNG -> WebP ==");
  console.log(`Qualidade: ${args.quality}`);
  console.log(`Diretorios: ${args.dirs.join(", ")}`);
  console.log(`Dry-run: ${args.dryRun ? "sim" : "nao"}`);

  for (const relativeDir of args.dirs) {
    const absDir = path.resolve(args.root, relativeDir);
    if (!fs.existsSync(absDir)) {
      stats.missingDirs.push(relativeDir);
      console.log(`[SKIP] Diretorio inexistente: ${relativeDir}`);
      continue;
    }

    const all = walkFiles(absDir);
    for (const absFile of all) {
      const ext = path.extname(absFile).toLowerCase();
      if (!IMAGE_EXTENSIONS.includes(ext)) {
        stats.skippedNonImage += 1;
        continue;
      }

      stats.totalCandidates += 1;
      const relInput = path.relative(args.root, absFile).replace(/\\/g, "/");
      const outputFile = absFile.replace(/\.(jpe?g|png)$/i, ".webp");
      const relOutput = path.relative(args.root, outputFile).replace(/\\/g, "/");
      const inputSize = fs.statSync(absFile).size;

      if (!args.overwrite && fs.existsSync(outputFile)) {
        const outputSize = fs.statSync(outputFile).size;
        stats.skippedExisting += 1;
        stats.bytesBefore += inputSize;
        stats.bytesAfter += outputSize;
        stats.items.push({
          input: relInput,
          output: relOutput,
          status: "skipped-existing-webp",
          bytesBefore: inputSize,
          bytesAfter: outputSize,
        });
        console.log(`[SKIP] WebP ja existe: ${relOutput}`);
        continue;
      }

      try {
        if (!args.dryRun) {
          await sharp(absFile).webp({ quality: args.quality }).toFile(outputFile);
        }

        const outputSize = !args.dryRun && fs.existsSync(outputFile)
          ? fs.statSync(outputFile).size
          : 0;

        stats.converted += 1;
        stats.bytesBefore += inputSize;
        stats.bytesAfter += outputSize;
        stats.items.push({
          input: relInput,
          output: relOutput,
          status: args.dryRun ? "dry-run" : "converted",
          bytesBefore: inputSize,
          bytesAfter: outputSize,
        });
        console.log(
          `[OK] ${relInput} -> ${relOutput} (${formatBytes(inputSize)} -> ${formatBytes(outputSize)})`
        );
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        stats.failures.push({ input: relInput, error: message });
        stats.items.push({
          input: relInput,
          output: relOutput,
          status: "failed",
          error: message,
          bytesBefore: inputSize,
          bytesAfter: 0,
        });
        console.error(`[ERRO] Falha ao converter ${relInput}: ${message}`);
      }
    }
  }

  stats.estimatedSavingBytes = Math.max(stats.bytesBefore - stats.bytesAfter, 0);
  stats.estimatedSavingPercent =
    stats.bytesBefore > 0
      ? Number(((stats.estimatedSavingBytes / stats.bytesBefore) * 100).toFixed(2))
      : 0;
  stats.finishedAt = new Date().toISOString();
  stats.reportPath = path.relative(args.root, reportPath).replace(/\\/g, "/");

  fs.writeFileSync(reportPath, JSON.stringify(stats, null, 2), "utf8");

  console.log("\n== Resumo ==");
  console.log(`Arquivos candidatos: ${stats.totalCandidates}`);
  console.log(`Convertidos: ${stats.converted}`);
  console.log(`Ignorados (ja webp): ${stats.skippedExisting}`);
  console.log(`Falhas: ${stats.failures.length}`);
  console.log(
    `Ganho estimado: ${formatBytes(stats.estimatedSavingBytes)} (${stats.estimatedSavingPercent}%)`
  );
  console.log(`Relatorio: ${stats.reportPath}`);

  if (stats.failures.length > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

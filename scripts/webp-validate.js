#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const DEFAULT_SCAN_DIRS = ["src"];
const DEFAULT_INCLUDE_EXT = [".js", ".jsx", ".ts", ".tsx", ".mdx", ".json"];

function parseArgs(argv) {
  const args = {
    root: process.cwd(),
    scanDirs: [...DEFAULT_SCAN_DIRS],
    includeExt: [...DEFAULT_INCLUDE_EXT],
    galleryDirs: ["public/images/artists", "public/images/releases"],
    galleryUrlPrefixes: ["/images/artists/", "/images/releases/"],
    bareFilenameBaseDirs: ["public/images/artists", "public/images/releases"],
    failOnMissingRefs: true,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--scan-dirs" && argv[i + 1]) {
      args.scanDirs = argv[i + 1].split(",").map((x) => x.trim()).filter(Boolean);
      i += 1;
    } else if (token === "--include-ext" && argv[i + 1]) {
      args.includeExt = argv[i + 1].split(",").map((x) => x.trim().toLowerCase()).filter(Boolean);
      i += 1;
    } else if (token === "--gallery-dirs" && argv[i + 1]) {
      args.galleryDirs = argv[i + 1].split(",").map((x) => x.trim()).filter(Boolean);
      i += 1;
    } else if (token === "--gallery-prefixes" && argv[i + 1]) {
      args.galleryUrlPrefixes = argv[i + 1].split(",").map((x) => x.trim()).filter(Boolean);
      i += 1;
    } else if (token === "--bare-filename-base-dirs" && argv[i + 1]) {
      args.bareFilenameBaseDirs = argv[i + 1].split(",").map((x) => x.trim()).filter(Boolean);
      i += 1;
    } else if (token === "--ignore-missing-refs") {
      args.failOnMissingRefs = false;
    }
  }
  return args;
}

function walkFiles(startDir, includeExt) {
  const out = [];
  if (!fs.existsSync(startDir)) return out;
  for (const entry of fs.readdirSync(startDir, { withFileTypes: true })) {
    const abs = path.join(startDir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry.name)) continue;
      out.push(...walkFiles(abs, includeExt));
    } else if (includeExt.includes(path.extname(abs).toLowerCase())) {
      out.push(abs);
    }
  }
  return out;
}

function extractImagePaths(content) {
  const regex = /(['"`])([^'"`\n\r]+\.(?:jpe?g|png|webp))\1/gi;
  const out = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    out.push(m[2]);
  }
  return out;
}

function publicPathToAbsolute(root, assetPath) {
  const clean = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return path.join(root, "public", clean);
}

function isBareFilename(imagePath) {
  return !imagePath.includes("/") && !imagePath.startsWith(".");
}

function resolveAssetCandidates(root, ref, bareFilenameBaseDirs) {
  if (isBareFilename(ref)) {
    return bareFilenameBaseDirs.map((baseDir) => path.join(root, baseDir, ref));
  }
  return [publicPathToAbsolute(root, ref)];
}

function getGalleryImageFiles(root, galleryDirs) {
  const out = [];
  const recurse = (absDir) => {
    if (!fs.existsSync(absDir)) return;
    for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
      const abs = path.join(absDir, entry.name);
      if (entry.isDirectory()) recurse(abs);
      else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(abs);
    }
  };
  for (const dir of galleryDirs) recurse(path.resolve(root, dir));
  return out;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = args.scanDirs
    .map((dir) => walkFiles(path.resolve(args.root, dir), args.includeExt))
    .flat();

  const missingReferences = [];
  const jpgOrPngReferences = [];
  const webpReferences = [];
  const missingWebpFromGallery = [];

  const galleryImageFiles = getGalleryImageFiles(args.root, args.galleryDirs);
  for (const imageAbs of galleryImageFiles) {
    const expectedWebp = imageAbs.replace(/\.(jpe?g|png)$/i, ".webp");
    if (!fs.existsSync(expectedWebp)) {
      missingWebpFromGallery.push({
        original: path.relative(args.root, imageAbs).replace(/\\/g, "/"),
        expectedWebp: path.relative(args.root, expectedWebp).replace(/\\/g, "/"),
      });
    }
  }

  for (const file of files) {
    const relativeFile = path.relative(args.root, file).replace(/\\/g, "/");
    const content = fs.readFileSync(file, "utf8");
    const refs = extractImagePaths(content);
    for (const ref of refs) {
      if (/^https?:\/\//i.test(ref)) continue;
      const inGalleryScope =
        isBareFilename(ref) || args.galleryUrlPrefixes.some((prefix) => ref.startsWith(prefix));
      if (!inGalleryScope) continue;
      const isJpgPng = /\.(jpe?g|png)$/i.test(ref);
      const isWebp = /\.webp$/i.test(ref);
      const candidates = resolveAssetCandidates(args.root, ref, args.bareFilenameBaseDirs);
      const existsSomewhere = candidates.some((candidate) => fs.existsSync(candidate));
      if (!existsSomewhere) {
        missingReferences.push({ file: relativeFile, ref });
      }
      if (isJpgPng) jpgOrPngReferences.push({ file: relativeFile, ref });
      if (isWebp) webpReferences.push({ file: relativeFile, ref });
    }
  }

  console.log("== Validacao de referencias de imagem ==");
  console.log(`Arquivos analisados: ${files.length}`);
  console.log(`JPG/PNG da galeria sem .webp: ${missingWebpFromGallery.length}`);
  console.log(`Referencias .webp: ${webpReferences.length}`);
  console.log(`Referencias .jpg/.png da galeria remanescentes: ${jpgOrPngReferences.length}`);
  console.log(`Referencias quebradas: ${missingReferences.length}`);

  if (missingWebpFromGallery.length > 0) {
    console.log("\n[ERRO] Imagens da galeria sem arquivo .webp:");
    for (const item of missingWebpFromGallery.slice(0, 20)) {
      console.log(`- ${item.original} -> esperado ${item.expectedWebp}`);
    }
  }

  if (jpgOrPngReferences.length > 0) {
    console.log("\n[WARN] Referencias antigas encontradas:");
    for (const item of jpgOrPngReferences.slice(0, 20)) {
      console.log(`- ${item.file}: ${item.ref}`);
    }
  }

  if (
    missingWebpFromGallery.length > 0 ||
    (args.failOnMissingRefs && missingReferences.length > 0)
  ) {
    console.log("\n[ERRO] Referencias quebradas encontradas:");
    for (const item of missingReferences.slice(0, 20)) {
      console.log(`- ${item.file}: ${item.ref}`);
    }
    process.exit(1);
  }

  if (!args.failOnMissingRefs && missingReferences.length > 0) {
    console.log("\n[WARN] Referencias quebradas existentes foram ignoradas por --ignore-missing-refs.");
  }

  console.log("\n[OK] Validacao concluida sem referencias quebradas.");
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exit(1);
}

// scripts/import-blog-images.mjs
// 원본 5장을 SEO 친화 파일명으로 압축·변환 후 public/images에 배치 (일회성 스크립트)
import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const SRC_DIR = 'C:/Users/kiseo/OneDrive/Desktop/00_INBOX/blog/images';
const OUT_DIR = resolve(process.cwd(), 'public/images');

const TASKS = [
  { src: 'galmaegisal.jpg', out: 'gokiseok-tonggalmaegisal-100g-7000won.jpg', maxW: 1600, quality: 82 },
  { src: 'space-10.png',    out: 'gokiseok-geondae-room-10p.jpg',            maxW: 1600, quality: 78 },
  { src: 'space-14.png',    out: 'gokiseok-geondae-room-14p.jpg',            maxW: 1600, quality: 78 },
  { src: 'space-32.png',    out: 'gokiseok-geondae-room-32p.jpg',            maxW: 1600, quality: 78 },
  { src: 'danche-2.png',    out: 'gokiseok-geondae-hoesik-group.jpg',        maxW: 1600, quality: 78 },
];

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

async function processOne(t) {
  const inPath  = resolve(SRC_DIR, t.src);
  const outPath = resolve(OUT_DIR, t.out);
  const inStat  = await stat(inPath);

  await sharp(inPath)
    .rotate()
    .resize({ width: t.maxW, withoutEnlargement: true })
    .jpeg({ quality: t.quality, mozjpeg: true, progressive: true })
    .toFile(outPath);

  const outStat = await stat(outPath);
  const inKB  = (inStat.size  / 1024).toFixed(0);
  const outKB = (outStat.size / 1024).toFixed(0);
  console.log(`${t.src.padEnd(20)} -> ${t.out.padEnd(45)} ${inKB} KB -> ${outKB} KB`);
}

(async () => {
  await ensureDir(OUT_DIR);
  for (const t of TASKS) {
    await processOne(t);
  }
  console.log('\nDone.');
})();

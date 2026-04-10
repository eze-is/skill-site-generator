#!/usr/bin/env node
/**
 * generate-assets.mjs — 生成 favicon、OG 图、SEO 文件
 *
 * 用法：node generate-assets.mjs --name <skill名称> --repo <owner/repo> --color <品牌色> --out <输出目录>
 *
 * AI 负责生成 index.html、style.css、script.js
 * 本脚本只生成 AI 不擅长的：图片资源 + SEO 文件
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, resolve } from 'path';
import { parseArgs } from 'util';

const { values } = parseArgs({
  options: {
    name: { type: 'string' },
    repo: { type: 'string' },
    color: { type: 'string', default: '#e84393' },
    out: { type: 'string' },
    domain: { type: 'string' },       // 可选自定义域名
    subtitle: { type: 'string' },     // 可选，用于 OG 图
    author: { type: 'string' },       // 可选，用于 OG 图
    stars: { type: 'string' },        // 可选，用于 OG 图
    forks: { type: 'string' },        // 可选，用于 OG 图
  },
});

const { name, repo, color, out, domain, subtitle, author, stars, forks } = values;

if (!name || !out) {
  console.error('用法: node generate-assets.mjs --name <name> --repo <owner/repo> --color "#e84393" --out ./output');
  process.exit(1);
}

const outDir = resolve(out);
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const initial = name.charAt(0).toUpperCase();
const [owner, repoName] = (repo || '').split('/');
const siteUrl = domain ? `https://${domain}` : (owner ? `https://${owner}.github.io/${repoName}/` : '');

// ---- Favicon SVG ----
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="${color}"/>
  <text x="16" y="22" font-family="system-ui,sans-serif" font-size="18" font-weight="700" fill="white" text-anchor="middle">${initial}</text>
</svg>`;

writeFileSync(join(outDir, 'favicon.svg'), faviconSvg);
console.log('  ✓ favicon.svg');

// ---- Favicon PNG（sharp 可用时）----
let sharpAvailable = false;
try {
  const sharp = (await import('sharp')).default;
  sharpAvailable = true;

  const svgBuf = Buffer.from(faviconSvg);
  await Promise.all([
    sharp(svgBuf).resize(32, 32).png().toFile(join(outDir, 'favicon-32x32.png')),
    sharp(svgBuf).resize(16, 16).png().toFile(join(outDir, 'favicon-16x16.png')),
    sharp(svgBuf).resize(180, 180).png().toFile(join(outDir, 'apple-touch-icon.png')),
  ]);
  console.log('  ✓ favicon PNG (32/16/180)');
} catch {
  console.log('  ⚠ sharp 不可用，跳过 PNG favicon');
}

// ---- OG 图 (1200x630) ----
const ogSubtitle = subtitle || `Agent Skill for ${name}`;
const ogAuthor = author || '';
const ogStars = stars || '';
const ogForks = forks || '';
const installCmd = repo ? `npx skills add ${repo}` : '';

const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fafafa"/>
      <stop offset="100%" style="stop-color:#f0f0ee"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <text x="80" y="100" font-family="monospace" font-size="16" font-weight="600" fill="${color}" letter-spacing="2">AGENT SKILL</text>
  <text x="80" y="190" font-family="monospace" font-size="72" font-weight="700" fill="#1a1a1a" letter-spacing="-2">${name}</text>
  <text x="80" y="260" font-family="sans-serif" font-size="28" fill="#4a4a4a">${ogSubtitle}</text>
  ${ogStars ? `<text x="80" y="340" font-family="monospace" font-size="18" font-weight="600" fill="#1a1a1a">${ogStars} stars</text>` : ''}
  ${ogForks ? `<text x="260" y="340" font-family="monospace" font-size="18" font-weight="600" fill="#1a1a1a">${ogForks} forks</text>` : ''}
  ${installCmd ? `
  <rect x="80" y="420" width="460" height="44" rx="8" fill="#1a1a1a"/>
  <text x="100" y="448" font-family="monospace" font-size="16" fill="#888">$</text>
  <text x="120" y="448" font-family="monospace" font-size="16" fill="#e0e0e0">${installCmd}</text>` : ''}
  <rect x="750" y="120" width="370" height="280" rx="12" fill="#1a1a1a"/>
  <rect x="750" y="120" width="370" height="36" rx="12" fill="#222"/>
  <rect x="750" y="144" width="370" height="2" fill="#333"/>
  <circle cx="770" cy="138" r="5" fill="#ff5f57"/>
  <circle cx="786" cy="138" r="5" fill="#febc2e"/>
  <circle cx="802" cy="138" r="5" fill="#28c840"/>
  <text x="770" y="185" font-family="monospace" font-size="14" fill="${color}">&gt;</text>
  <text x="790" y="185" font-family="monospace" font-size="13" fill="#ccc">Using ${name}...</text>
  <text x="770" y="215" font-family="monospace" font-size="12" fill="#666">Processing...</text>
  <text x="770" y="245" font-family="monospace" font-size="12" fill="#4ade80">✓ Done</text>
  ${ogAuthor ? `<text x="1000" y="580" font-family="sans-serif" font-size="16" fill="#8a8a8a">by ${ogAuthor}</text>` : ''}
  ${siteUrl ? `<text x="80" y="580" font-family="sans-serif" font-size="16" fill="#8a8a8a">${siteUrl.replace('https://', '')}</text>` : ''}
</svg>`;

writeFileSync(join(outDir, 'og.svg'), ogSvg);

if (sharpAvailable) {
  try {
    const sharp = (await import('sharp')).default;
    await sharp(Buffer.from(ogSvg)).png().toFile(join(outDir, 'og.png'));
    console.log('  ✓ og.png');
  } catch {
    writeFileSync(join(outDir, 'og.png'), ogSvg);
    console.log('  ✓ og.svg (PNG 转换失败，保留 SVG)');
  }
} else {
  writeFileSync(join(outDir, 'og.png'), ogSvg);
  console.log('  ✓ og.svg (sharp 不可用)');
}

// ---- robots.txt ----
writeFileSync(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}sitemap.xml` : ''}\n`);
console.log('  ✓ robots.txt');

// ---- sitemap.xml ----
if (siteUrl) {
  const today = new Date().toISOString().split('T')[0];
  writeFileSync(join(outDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>\n`);
  console.log('  ✓ sitemap.xml');
}

console.log(`\n✅ 资源生成完成 → ${outDir}`);

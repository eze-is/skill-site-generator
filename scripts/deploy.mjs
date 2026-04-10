#!/usr/bin/env node
/**
 * deploy.mjs — 将生成的网站部署到 GitHub Pages
 *
 * 用法：node deploy.mjs --repo owner/repo --dir ./output [--domain custom.domain.com]
 */

import { execSync } from 'child_process';
import { existsSync, writeFileSync, mkdtempSync, cpSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { parseArgs } from 'util';

const { values } = parseArgs({
  options: {
    repo: { type: 'string' },
    dir: { type: 'string' },
    domain: { type: 'string' },
  },
});

const { repo, dir, domain } = values;

if (!repo || !dir) {
  console.error('用法: node deploy.mjs --repo owner/repo --dir ./output [--domain example.com]');
  process.exit(1);
}

if (!existsSync(dir)) {
  console.error(`输出目录不存在: ${dir}`);
  process.exit(1);
}

const [owner, repoName] = repo.split('/');
if (!owner || !repoName) {
  console.error('repo 格式应为 owner/repo');
  process.exit(1);
}

function run(cmd, opts = {}) {
  try {
    return execSync(cmd, { encoding: 'utf-8', stdio: opts.silent ? 'pipe' : 'inherit', ...opts }).trim();
  } catch (e) {
    if (opts.silent) return '';
    throw e;
  }
}

// 1. 检查 gh CLI 登录态
console.log('检查 gh CLI 登录态...');
const ghStatus = run('gh auth status 2>&1', { silent: true });
if (ghStatus.includes('not logged')) {
  console.error('gh CLI 未登录，请先运行: gh auth login');
  process.exit(1);
}
console.log('✓ gh CLI 已登录');

// 2. 如果有自定义域名，生成 CNAME 文件
if (domain) {
  writeFileSync(join(dir, 'CNAME'), domain);
  console.log(`✓ 生成 CNAME: ${domain}`);
}

// 3. 创建临时工作目录，初始化 git 并推送
const workDir = mkdtempSync(join(tmpdir(), 'skill-site-deploy-'));
console.log(`准备部署文件...`);

// 初始化 git
run(`git init`, { cwd: workDir, silent: true });
run(`git checkout -b gh-pages`, { cwd: workDir, silent: true });

// 复制网站文件
cpSync(dir, workDir, { recursive: true });

// 添加 .nojekyll 文件（禁用 Jekyll 处理）
writeFileSync(join(workDir, '.nojekyll'), '');

// 提交
run(`git add -A`, { cwd: workDir, silent: true });
run(`git commit -m "Deploy skill site"`, { cwd: workDir, silent: true });

// 设置远程并推送
const remoteUrl = `https://github.com/${repo}.git`;
run(`git remote add origin ${remoteUrl}`, { cwd: workDir, silent: true });

console.log(`推送到 ${repo} gh-pages 分支...`);
try {
  run(`git push origin gh-pages --force`, { cwd: workDir });
} catch (e) {
  console.error(`推送失败。请确认你对 ${repo} 有写权限。`);
  process.exit(1);
}
console.log('✓ 推送完成');

// 4. 开启 GitHub Pages
console.log('配置 GitHub Pages...');
try {
  // 先尝试获取当前 Pages 状态
  const pagesStatus = run(`gh api repos/${repo}/pages 2>&1`, { silent: true });
  if (pagesStatus.includes('"source"')) {
    // Pages 已存在，更新配置
    run(`gh api repos/${repo}/pages -X PUT -f "build_type=legacy" -f "source[branch]=gh-pages" -f "source[path]=/" 2>&1`, { silent: true });
  }
} catch {
  // Pages 不存在，创建
  try {
    run(`gh api repos/${repo}/pages -X POST -f "build_type=legacy" -f "source[branch]=gh-pages" -f "source[path]=/" 2>&1`, { silent: true });
  } catch {
    // 可能已存在，忽略
  }
}
console.log('✓ GitHub Pages 已配置');

// 5. 输出结果
const siteUrl = domain
  ? `https://${domain}`
  : `https://${owner}.github.io/${repoName}/`;

console.log('');
console.log('========================================');
console.log(`  网站已部署！`);
console.log(`  ${siteUrl}`);
console.log('========================================');

if (domain) {
  console.log('');
  console.log(`请在 DNS 服务商添加 CNAME 记录：`);
  console.log(`  ${domain} → ${owner}.github.io`);
}

// 清理临时目录
try {
  run(`rm -rf "${workDir}"`, { silent: true });
} catch {}

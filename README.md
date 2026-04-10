# skill-site-generator

为任意 SKILL.md 格式的 Agent Skill 生成 landing page 并部署到 GitHub Pages。

> 给你的 skill 做一个官网，只需一句话。

## 效果示例

用此 skill 生成的官网：[web-access.eze.is](https://web-access.eze.is)

## 安装

```bash
npx skills add eze-is/skill-site-generator
```

## 使用

安装后，直接告诉你的 Agent：

```
给 web-access skill 做一个官网
```

```
帮我给 https://github.com/xxx/my-skill 生成一个 landing page 并部署
```

Agent 会自动完成：读取 SKILL.md → 理解 skill 定位 → 生成网站 → 预览 → 部署到 GitHub Pages。

## 工作原理

| 步骤 | 做什么 | 谁做 |
|------|--------|------|
| 1. 前置检查 | 确认 skill 有公开 GitHub 仓库 | AI |
| 2. 读取理解 | 通读 SKILL.md，拿 stars/forks | AI |
| 3. 生成网站 | 写 HTML + 填充 i18n 双语 + 终端演示动画 | AI |
| 4. 生成资源 | favicon、OG 图、SEO 文件 | 脚本 |
| 5. 预览 | 浏览器打开，截图确认 | AI |
| 6. 部署 | 推送 gh-pages，开启 GitHub Pages | 脚本 |

### 设计理念

- **AI 做 AI 擅长的**：理解内容、写文案、生成 HTML
- **脚本做脚本擅长的**：图片处理、git 部署
- **不过度工程化**：没有 JSON 中间层、没有模板引擎，AI 直接对着一个好的参考范本写 HTML

网站内容的组织逻辑是 **问题 → 方案 → 效果 → 安装**，不是功能罗列。AI 会根据 skill 复杂度自动决定保留哪些区块。

## 生成的网站包含

- 中英双语切换（自动检测浏览器语言）
- Hero 区 + 终端演示动画（双语）
- Problem 对比区（Without / With）
- 架构图（可选，适用于有独立 runtime 的 skill）
- 能力卡片（4-6 张）
- API 端点展示（可选）
- 安装步骤
- FAQ
- 完整 SEO（Open Graph、Twitter Card、JSON-LD、sitemap）
- Favicon + 社交分享图

## 前置要求

- `gh` CLI 已登录（用于部署到 GitHub Pages）
- skill 必须有公开的 GitHub 仓库（没有的话 Agent 会帮你创建）

## 目录结构

```
skill-site-generator/
├── SKILL.md                     # 流程定义 + 内容生成哲学
├── references/
│   └── content-guide.md         # AI 内容生成思考框架
├── templates/
│   ├── reference.html           # 质量标准（web-access 官网实例）
│   ├── style.css                # 固定样式系统
│   └── script-base.js           # i18n + 动画逻辑
└── scripts/
    ├── generate-assets.mjs      # favicon / OG 图 / SEO 生成
    └── deploy.mjs               # GitHub Pages 部署
```

## License

MIT · 作者：[一泽 Eze](https://github.com/eze-is)

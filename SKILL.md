---
name: skill-site-generator
description: 为任意 Agent Skill 生成官网并部署。触发场景：用户要求给某个 skill 做官网、生成 landing page、部署 skill 网站、skill site。
metadata:
  author: 一泽Eze
  version: "2.0.0"
---

# skill-site-generator

为 SKILL.md 格式的 Agent Skill 生成 landing page 并部署到 GitHub Pages。

## 内容生成哲学

网站的目标读者是**第一次看到这个 skill 的开发者**。他不知道这个 skill 存在，不知道它解决什么问题，不知道该不该装。

内容的组织逻辑是：**问题 → 方案 → 效果 → 安装**，不是功能罗列。先让读者认出自己的痛点，再展示解决方案。

每个 skill 的复杂度不同。区块数量和深度应该匹配 skill 本身的复杂度，不是所有 skill 都套满所有区块。

## 执行流程

### 1. 确定目标与前置检查

用户给出 GitHub 仓库地址、本地 SKILL.md 路径、或 skill 名称。需要拿到：**SKILL.md 全文** 和 **GitHub owner/repo**。

**前置条件：skill 必须有公开的 GitHub 仓库。** 官网的存在意义是让别人发现并安装这个 skill——没有公开仓库，安装命令无处指向，官网就没有意义。

如果 skill 还没有仓库，先帮用户创建：

1. 确认 skill 目录中有 `SKILL.md`（必需）和相关文件
2. `gh repo create {skill-name} --public --source=. --push`
3. 确认仓库可访问后继续

### 2. 读取与理解

- `Read` SKILL.md 全文
- `gh api repos/{owner}/{repo}` 拿 stars、forks
- 通读 SKILL.md，理解这个 skill 做什么、怎么工作、解决什么问题

### 3. 生成网站

加载 `references/content-guide.md` 获取内容思考框架。

加载 `templates/reference.html` 作为**质量标准和结构参考**——这是一个完整的、效果好的 skill 官网实例（web-access）。以它为范本：
- 保持相同的 HTML 结构和 CSS class 名
- 保持相同的视觉质量和文案水平
- 根据目标 skill 的实际情况增删区块

直接 Write 生成 `index.html`，引用外部 `style.css` 和 `script.js`：
- `style.css`：从 `templates/style.css` 复制，**不修改**
- `script.js`：基于 `templates/script-base.js`，替换其中的 `i18n` 对象和 `demos` 数组为目标 skill 的内容

i18n 机制：所有文案元素加 `data-i18n` 属性，script.js 中的 `i18n` 对象包含 `en` 和 `zh` 两套翻译。

### 4. 生成辅助资源

```bash
node "${CLAUDE_SKILL_DIR}/scripts/generate-assets.mjs" \
  --name <skill名称> --repo <owner/repo> --color <品牌色> --out <输出目录> \
  --subtitle "一句话描述" --author "作者名" --stars "数量" --forks "数量"
```

脚本生成：favicon SVG/PNG、OG 社交分享图、robots.txt、sitemap.xml。`--subtitle`、`--author`、`--stars`、`--forks` 可选，用于丰富 OG 图内容。

### 5. 预览

在浏览器中打开生成的网站，截图展示给用户确认。可用 web-access 的 CDP 能力预览，或提示用户自行打开 `file://` 路径。

### 6. 部署

```bash
node "${CLAUDE_SKILL_DIR}/scripts/deploy.mjs" --repo <owner/repo> --dir <输出目录>
```

通过 `gh` CLI 推送到 `gh-pages` 分支，开启 GitHub Pages。自定义域名：用户指定时生成 CNAME 文件一并推送。

## 输出目录结构

```
<output>/
  index.html          ← AI 直接生成
  style.css           ← 从模板复制（固定）
  script.js           ← AI 基于模板生成（填入 i18n + demos）
  favicon.svg         ← 脚本生成
  favicon-*.png       ← 脚本生成（sharp 可用时）
  og.png              ← 脚本生成
  robots.txt          ← 脚本生成
  sitemap.xml         ← 脚本生成
```

## References

| 文件 | 何时加载 |
|------|---------|
| `references/content-guide.md` | Step 3 开始前，获取内容思考框架 |
| `templates/reference.html` | Step 3 开始前，作为 HTML 结构和文案质量参考 |
| `templates/style.css` | Step 3 复制到输出目录 |
| `templates/script-base.js` | Step 3 作为 JS 基础，填入动态数据 |

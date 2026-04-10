// ============================================
// skill-site-generator — Landing Page Scripts
// ============================================

// ---- i18n System ----
const i18n = {
  en: {
    'nav.why': 'Why',
    'nav.how': 'How',
    'nav.capabilities': 'Capabilities',
    'nav.install': 'Install',
    'hero.badge': 'Agent Skill',
    'hero.subtitle': 'Turn any SKILL.md into a polished landing page.',
    'hero.desc': 'One sentence to your agent, and it reads your skill, writes bilingual copy, generates HTML with SEO and OG assets, and deploys to GitHub Pages. This very page was built by the skill itself.',
    'hero.cta': 'See what it can do',
    'hero.steps': 'steps, fully automated',
    'hero.i18n': 'bilingual out of the box',
    'hero.command': 'command to deploy',
    'logos.label': 'Works with',
    'problem.label': 'The Problem',
    'problem.title': 'Great skills deserve a front door.',
    'problem.desc': "You built an amazing skill. But without a landing page, nobody discovers it, nobody understands what it does, and nobody installs it.",
    'problem.without': 'Without skill-site-generator',
    'problem.with': 'With skill-site-generator',
    'problem.w1': 'A raw SKILL.md on GitHub is your only "homepage"',
    'problem.w2': 'No SEO — search engines can\'t find your skill',
    'problem.w3': 'No OG image — shared links look bland on social media',
    'problem.w4': 'Writing bilingual copy and HTML from scratch takes hours',
    'problem.w5': 'Deploy? You still need to set up GitHub Pages manually',
    'problem.a1': 'Polished landing page generated from your SKILL.md',
    'problem.a2': 'Full SEO: structured data, sitemap, robots.txt, canonical URL',
    'problem.a3': 'OG image auto-generated with skill name, stats, and preview',
    'problem.a4': 'Bilingual EN/中 copy written by your agent in seconds',
    'problem.a5': 'One-command deploy to GitHub Pages — done in 30 seconds',
    'arch.label': 'How It Works',
    'arch.title': 'Read. Generate. Deploy.',
    'arch.desc': 'Your agent reads the target SKILL.md, understands what it does, generates a complete static site with bilingual content, and pushes it to GitHub Pages. No manual steps.',
    'arch.skillmd': 'SKILL.md',
    'arch.skillmdSub': 'Your skill\'s source of truth',
    'arch.agent': 'AI Agent',
    'arch.agentSub': 'Content + HTML generation',
    'arch.site': 'GitHub Pages',
    'arch.siteSub': 'Live website, custom domain',
    'arch.flow1': 'Read & Analyze',
    'arch.flow2': 'Write & Deploy',
    'arch.read': 'Read',
    'arch.readDesc': 'Parse SKILL.md, fetch GitHub stars/forks, understand the skill\'s purpose and capabilities',
    'arch.generate': 'Generate',
    'arch.generateDesc': 'Write bilingual copy, produce HTML + JS, create favicon, OG image, SEO files',
    'arch.deploy': 'Deploy',
    'arch.deployDesc': 'Push to gh-pages branch, enable GitHub Pages, optional custom domain via CNAME',
    'cap.label': 'Capabilities',
    'cap.title': 'Everything from SKILL.md to live website.',
    'cap.content': 'Intelligent Copywriting',
    'cap.contentDesc': 'Reads your SKILL.md and writes landing page copy that follows a problem-solution-effect narrative. Not a feature list — a story that makes developers install.',
    'cap.contentEx': '> "Generate a website for my web-access skill"',
    'cap.i18n': 'Bilingual i18n',
    'cap.i18nDesc': 'Every text element gets EN/中 translations baked into the JS. Users toggle languages with one click — no page reload, no separate builds.',
    'cap.html': 'Production-Ready HTML',
    'cap.htmlDesc': 'Generates semantic HTML with structured data, Open Graph tags, Twitter Cards, favicon links, and a responsive design that works on all devices.',
    'cap.assets': 'Auto Asset Generation',
    'cap.assetsDesc': 'Generates SVG/PNG favicons, a 1200x630 OG social image, robots.txt, and sitemap.xml. All from a single script invocation with your skill\'s branding.',
    'cap.deploy': 'One-Click Deploy',
    'cap.deployDesc': 'Pushes the generated site to a gh-pages branch and enables GitHub Pages. Custom domain? Just provide a CNAME — it handles the rest.',
    'cap.meta': 'Meta Recursion',
    'cap.metaDesc': 'This skill generates websites for skills — including itself. This page is living proof. The ultimate dogfooding: if it can sell itself, it can sell anything.',
    'cap.metaEx': '> "Generate a website for skill-site-generator itself"',
    'install.label': 'Get Started',
    'install.title': 'One sentence. One website.',
    'install.step1': 'Install the skill',
    'install.step2': 'No configuration needed',
    'install.step2desc': 'The skill works out of the box. It carries its own templates, scripts, and content guide — nothing to configure.',
    'install.step3': 'Tell your agent to build',
    'install.step3desc': 'Say something like <code>"Generate a landing page for my-skill"</code> — the skill activates, reads the SKILL.md, and outputs a complete website.',
    'install.req': 'Requirements',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Does it only work with Claude Code skills?',
    'faq.a1': 'No. It generates websites for any <strong>SKILL.md-based</strong> skill, regardless of which agent harness runs it — Claude Code, Cursor, Gemini CLI, Codex CLI, etc.',
    'faq.q2': 'Can I customize the generated website?',
    'faq.a2': "The output is plain HTML + CSS + JS — all static files you fully own. Edit anything after generation. The shared CSS template provides a polished baseline; you can override or replace it.",
    'faq.q3': 'Wait, this page was generated by the skill itself?',
    'faq.a3': 'Yes. This is <strong>skill-site-generator generating its own landing page</strong>. It read its own SKILL.md, wrote the bilingual copy, produced the HTML, and generated all assets. If it can sell itself, it can sell your skill too.',
    'faq.q4': 'How does the bilingual support work technically?',
    'faq.a4': 'All text elements use <strong>data-i18n</strong> attributes. The script.js contains an i18n object with en/zh translations. A toggle button switches languages instantly — no reload, no separate pages, no build step.',
    'faq.q5': 'What if my skill is very simple or very complex?',
    'faq.a5': "The content guide adapts: lightweight skills get fewer sections (Hero + Problem + Capabilities + Install), while complex multi-component skills get the full treatment including architecture diagrams and API references. Sections match the skill's actual complexity.",
    'faq.q6': 'Does deployment require any manual setup?',
    'faq.a6': 'No. The deploy script uses <strong>gh CLI</strong> to push to a gh-pages branch and enable GitHub Pages automatically. For custom domains, just pass a CNAME value — the script creates the file and deploys it with the site.',
  },
  zh: {
    'nav.why': '为什么',
    'nav.how': '原理',
    'nav.capabilities': '能力',
    'nav.install': '安装',
    'hero.badge': 'Agent Skill',
    'hero.subtitle': '一句话，把任何 SKILL.md 变成精美官网。',
    'hero.desc': '对你的 Agent 说一句话，它就能读取 skill、撰写双语文案、生成带 SEO 和社交分享图的 HTML，并部署到 GitHub Pages。这个页面就是它自己生成的。',
    'hero.cta': '看看它能做什么',
    'hero.steps': '步，全自动完成',
    'hero.i18n': '中英双语开箱即用',
    'hero.command': '条命令完成部署',
    'logos.label': '兼容以下 Agent',
    'problem.label': '痛点',
    'problem.title': '好 skill 值得一个好门面。',
    'problem.desc': '你做了一个厉害的 skill，但没有官网，就没人发现它、没人理解它做什么、没人安装它。',
    'problem.without': '没有 skill-site-generator',
    'problem.with': '有了 skill-site-generator',
    'problem.w1': 'GitHub 上的 SKILL.md 就是你唯一的「主页」',
    'problem.w2': '没有 SEO — 搜索引擎找不到你的 skill',
    'problem.w3': '没有 OG 图 — 分享链接在社交媒体上毫无吸引力',
    'problem.w4': '从零写双语文案和 HTML 要花好几个小时',
    'problem.w5': '部署？还得手动配置 GitHub Pages',
    'problem.a1': '从 SKILL.md 自动生成精美官网',
    'problem.a2': '完整 SEO：结构化数据、sitemap、robots.txt、canonical URL',
    'problem.a3': 'OG 社交图自动生成，包含 skill 名称、数据和预览',
    'problem.a4': '中英双语文案由 Agent 秒级完成',
    'problem.a5': '一条命令部署到 GitHub Pages — 30 秒搞定',
    'arch.label': '工作原理',
    'arch.title': '读取、生成、部署。',
    'arch.desc': 'Agent 读取目标 SKILL.md，理解它做什么，生成带双语内容的完整静态站，然后推送到 GitHub Pages。全程无需手动操作。',
    'arch.skillmd': 'SKILL.md',
    'arch.skillmdSub': '你的 skill 的唯一真相来源',
    'arch.agent': 'AI Agent',
    'arch.agentSub': '内容 + HTML 生成',
    'arch.site': 'GitHub Pages',
    'arch.siteSub': '在线网站，支持自定义域名',
    'arch.flow1': '读取与分析',
    'arch.flow2': '生成与部署',
    'arch.read': '读取',
    'arch.readDesc': '解析 SKILL.md，获取 GitHub stars/forks，理解 skill 的功能和定位',
    'arch.generate': '生成',
    'arch.generateDesc': '撰写双语文案，产出 HTML + JS，创建 favicon、OG 图、SEO 文件',
    'arch.deploy': '部署',
    'arch.deployDesc': '推送到 gh-pages 分支，开启 GitHub Pages，可选自定义域名',
    'cap.label': '核心能力',
    'cap.title': '从 SKILL.md 到上线网站，一步到位。',
    'cap.content': '智能文案撰写',
    'cap.contentDesc': '读取你的 SKILL.md，按「痛点→方案→效果」的叙事逻辑撰写官网文案。不是功能罗列 — 而是让开发者想装的故事。',
    'cap.contentEx': '> "给我的 web-access skill 生成一个官网"',
    'cap.i18n': '中英双语 i18n',
    'cap.i18nDesc': '每个文本元素都内嵌了 EN/中 翻译。用户一键切换语言 — 无需刷新页面，无需单独构建。',
    'cap.html': '生产级 HTML',
    'cap.htmlDesc': '生成语义化 HTML，内含结构化数据、Open Graph 标签、Twitter Cards、favicon 链接、响应式设计，适配所有设备。',
    'cap.assets': '自动资产生成',
    'cap.assetsDesc': '生成 SVG/PNG favicon、1200x630 OG 社交图、robots.txt 和 sitemap.xml。一次脚本调用，使用你 skill 的品牌色。',
    'cap.deploy': '一键部署',
    'cap.deployDesc': '将生成的站点推送到 gh-pages 分支并开启 GitHub Pages。要自定义域名？传个 CNAME 就行。',
    'cap.meta': '元递归',
    'cap.metaDesc': '这个 skill 给 skill 做官网 — 包括它自己。这个页面就是活证据。终极自举：如果它能推销自己，它就能推销任何 skill。',
    'cap.metaEx': '> "给 skill-site-generator 自己生成一个官网"',
    'install.label': '开始使用',
    'install.title': '一句话，一个网站。',
    'install.step1': '安装 Skill',
    'install.step2': '无需额外配置',
    'install.step2desc': '开箱即用。Skill 自带模板、脚本和内容指南 — 无需任何配置。',
    'install.step3': '让 Agent 开工',
    'install.step3desc': '说类似 <code>"给我的 skill 生成一个官网"</code> — skill 自动激活，读取 SKILL.md，输出完整网站。',
    'install.req': '环境要求',
    'faq.title': '常见问题',
    'faq.q1': '只支持 Claude Code 的 skill 吗？',
    'faq.a1': '不是。它可以为任何基于 <strong>SKILL.md 标准</strong>的 skill 生成网站，无论运行在哪个 Agent 工具 — Claude Code、Cursor、Gemini CLI、Codex CLI 等。',
    'faq.q2': '可以自定义生成的网站吗？',
    'faq.a2': '输出是纯 HTML + CSS + JS — 都是你完全拥有的静态文件。生成后随意编辑。共享 CSS 模板提供精美的基线，你可以覆盖或替换。',
    'faq.q3': '等等，这个页面是 skill 自己生成的？',
    'faq.a3': '是的。这就是 <strong>skill-site-generator 给自己生成的官网</strong>。它读取了自己的 SKILL.md，撰写了双语文案，生成了 HTML，并产出了所有资产。如果它能推销自己，它也能推销你的 skill。',
    'faq.q4': '双语支持的技术原理是什么？',
    'faq.a4': '所有文本元素使用 <strong>data-i18n</strong> 属性。script.js 包含一个 i18n 对象，内含 en/zh 两套翻译。切换按钮即时切换语言 — 不刷新、不跳转、无构建步骤。',
    'faq.q5': '如果我的 skill 非常简单或非常复杂怎么办？',
    'faq.a5': '内容指南会自适应：轻量 skill 生成更少的区块（Hero + Problem + Capabilities + Install），复杂的多组件 skill 则获得完整处理，包括架构图和 API 参考。区块数量匹配 skill 的实际复杂度。',
    'faq.q6': '部署需要手动设置吗？',
    'faq.a6': '不需要。部署脚本使用 <strong>gh CLI</strong> 推送到 gh-pages 分支并自动开启 GitHub Pages。自定义域名只需传入 CNAME 值 — 脚本会创建文件并随站点一起部署。',
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const data = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!data[key]) return;
    if (el.dataset.i18nHtml === 'true' || key.startsWith('faq.a') || key === 'install.step2desc' || key === 'install.step3desc') {
      el.innerHTML = data[key];
    } else {
      el.textContent = data[key];
    }
  });
  const btn = document.getElementById('lang-toggle');
  btn.textContent = lang === 'en' ? 'EN / 中' : '中 / EN';
  localStorage.setItem('ssg-lang', lang);
}

// ---- Copy to Clipboard ----
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.dataset.copy;
    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add('copied');
      const icon = btn.innerHTML;
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = icon;
      }, 2000);
    });
  });
});

// ---- Scroll Reveal ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section-inner, .logos-section').forEach(el => {
  observer.observe(el);
});

// ---- Terminal Demo Animation ----
const demos = [
  {
    prompt: { en: 'Generate a landing page for my web-access skill', zh: '给我的 web-access skill 生成一个官网' },
    url: 'web-access.eze.is',
    output: [
      { text: { en: 'Reading SKILL.md...', zh: '读取 SKILL.md...' }, cls: 't-dim' },
      { text: { en: 'Fetching GitHub data: 4,100 stars, 290 forks', zh: '获取 GitHub 数据：4,100 stars，290 forks' }, cls: 't-info' },
      { text: { en: 'Generating bilingual copy (EN/中)...', zh: '生成中英双语文案...' }, cls: 't-info' },
      { text: '', cls: '' },
      { text: { en: 'Writing index.html with 7 sections...', zh: '写入 index.html，包含 7 个区块...' }, cls: 't-accent' },
      { text: { en: 'Generating favicon, OG image, sitemap...', zh: '生成 favicon、OG 图、sitemap...' }, cls: 't-accent' },
      { text: { en: '✓ Website ready at /tmp/web-access-site/', zh: '✓ 网站已就绪：/tmp/web-access-site/' }, cls: 't-success' },
    ]
  },
  {
    prompt: { en: 'Deploy the generated site to GitHub Pages', zh: '把生成的网站部署到 GitHub Pages' },
    url: 'github.com/eze-is/web-access/settings/pages',
    output: [
      { text: { en: 'Pushing to gh-pages branch...', zh: '推送到 gh-pages 分支...' }, cls: 't-dim' },
      { text: { en: 'Enabling GitHub Pages for eze-is/web-access', zh: '为 eze-is/web-access 启用 GitHub Pages' }, cls: 't-info' },
      { text: { en: 'Setting custom domain: web-access.eze.is', zh: '设置自定义域名：web-access.eze.is' }, cls: 't-info' },
      { text: '', cls: '' },
      { text: { en: 'CNAME file created and pushed', zh: 'CNAME 文件已创建并推送' }, cls: 't-accent' },
      { text: { en: '✓ Live at https://web-access.eze.is', zh: '✓ 已上线：https://web-access.eze.is' }, cls: 't-success' },
    ]
  },
  {
    prompt: { en: 'Generate a website for skill-site-generator itself', zh: '给 skill-site-generator 自己生成官网' },
    url: 'skill-site-generator.eze.is',
    output: [
      { text: { en: 'Meta mode: generating site for myself...', zh: '元模式：给自己生成官网...' }, cls: 't-dim' },
      { text: { en: 'Reading my own SKILL.md — I know this one well', zh: '读取自己的 SKILL.md — 这个我很熟' }, cls: 't-info' },
      { text: { en: 'Writing copy about... writing copy. How recursive.', zh: '撰写关于……撰写文案的文案。真是递归。' }, cls: 't-info' },
      { text: '', cls: '' },
      { text: { en: 'Generating HTML, assets, SEO files...', zh: '生成 HTML、资源文件、SEO 文件...' }, cls: 't-accent' },
      { text: { en: '✓ The skill that builds its own homepage — done', zh: '✓ 给自己做官网的 skill — 完成' }, cls: 't-success' },
    ]
  }
];

let currentDemo = 0;

function typeText(element, text, speed = 35) {
  return new Promise(resolve => {
    let i = 0;
    element.textContent = '';
    if (!text) { resolve(); return; }
    const timer = setInterval(() => {
      element.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

function showOutputLines(container, lines, delay = 400) {
  return new Promise(resolve => {
    container.innerHTML = '';
    let i = 0;
    const timer = setInterval(() => {
      if (i >= lines.length) {
        clearInterval(timer);
        resolve();
        return;
      }
      const line = lines[i];
      const div = document.createElement('div');
      div.className = line.cls || '';
      div.textContent = line.text;
      div.style.opacity = '0';
      div.style.transform = 'translateY(4px)';
      container.appendChild(div);

      requestAnimationFrame(() => {
        div.style.transition = 'opacity 0.3s, transform 0.3s';
        div.style.opacity = '1';
        div.style.transform = 'translateY(0)';
      });

      i++;
    }, delay);
  });
}

function t(val) {
  if (!val) return '';
  if (typeof val === 'string') return val;
  return val[currentLang] || val.en || '';
}

async function runDemo() {
  const promptEl = document.getElementById('demo-prompt');
  const outputEl = document.getElementById('demo-output');
  const urlEl = document.getElementById('browser-url-text');
  const cursorEl = document.querySelector('.t-cursor');
  const browserBody = document.getElementById('browser-demo');

  while (true) {
    const demo = demos[currentDemo];

    outputEl.innerHTML = '';
    cursorEl.style.display = 'inline';

    await typeText(promptEl, t(demo.prompt), 30);
    await sleep(500);
    cursorEl.style.display = 'none';

    urlEl.textContent = demo.url;
    browserBody.innerHTML = `
      <div class="browser-loading">
        <div class="browser-skeleton">
          <div class="skel-nav" style="animation: pulse 1.5s ease-in-out infinite"></div>
          <div class="skel-hero-block" style="animation: pulse 1.5s ease-in-out infinite 0.2s"></div>
          <div class="skel-lines">
            <div class="skel-line w80" style="animation: pulse 1.5s ease-in-out infinite 0.3s"></div>
            <div class="skel-line w60" style="animation: pulse 1.5s ease-in-out infinite 0.4s"></div>
            <div class="skel-line w70" style="animation: pulse 1.5s ease-in-out infinite 0.5s"></div>
          </div>
        </div>
      </div>
    `;

    const localizedOutput = demo.output.map(line => ({
      text: t(line.text),
      cls: line.cls
    }));
    await showOutputLines(outputEl, localizedOutput, 500);
    await sleep(4000);

    currentDemo = (currentDemo + 1) % demos.length;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 添加 pulse 动画
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
`;
document.head.appendChild(style);

// 页面加载后启动
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-toggle');
  langBtn.addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'zh' : 'en');
  });

  const saved = localStorage.getItem('ssg-lang');
  if (saved && saved !== 'en') {
    setLang(saved);
  }

  setTimeout(runDemo, 1000);
});

// ---- Nav Scroll Effect ----
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    nav.style.borderBottomColor = 'var(--border)';
  } else {
    nav.style.borderBottomColor = 'var(--border-subtle)';
  }

  lastScroll = scrollY;
}, { passive: true });

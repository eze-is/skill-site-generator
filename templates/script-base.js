// ============================================
// web-access — Landing Page Scripts
// ============================================

// ---- i18n System ----
const i18n = {
  en: {
    'nav.why': 'Why',
    'nav.how': 'How',
    'nav.capabilities': 'Capabilities',
    'nav.install': 'Install',
    'hero.badge': 'Agent Skill',
    'hero.subtitle': 'Give your AI agent eyes and hands on the web.',
    'hero.desc': 'Connect to your daily browser with full login state. Search, browse, click, extract — your agent operates the web like you do.',
    'hero.cta': 'See what it can do',
    'hero.stars': 'stars',
    'hero.installs': 'installs via npx',
    'logos.label': 'Works with',
    'problem.label': 'The Problem',
    'problem.title': 'Your agent is blind to the real web.',
    'problem.desc': "Built-in web tools return summaries, not source. They can't log in, can't interact, can't see what you see.",
    'problem.without': 'Without web-access',
    'problem.with': 'With web-access',
    'problem.w1': 'Search returns snippets, not real pages',
    'problem.w2': 'No login state — paywalls, auth walls everywhere',
    'problem.w3': 'Dynamic content invisible (SPA, lazy-load)',
    'problem.w4': 'Anti-scraping platforms completely blocked',
    'problem.w5': "Can't click, scroll, fill forms, or navigate",
    'problem.w6': 'One tool at a time, no parallel research',
    'problem.a1': 'Full page content from the real browser DOM',
    'problem.a2': "Your Chrome's login sessions, cookies, everything",
    'problem.a3': 'JavaScript-rendered content fully accessible',
    'problem.a4': 'Xiaohongshu, WeChat, Zhihu — all work',
    'problem.a5': 'Click, scroll, type, upload files, take screenshots',
    'problem.a6': 'Parallel sub-agents, each with their own tabs',
    'arch.label': 'How It Works',
    'arch.title': 'Three layers. Zero new browsers.',
    'arch.desc': 'web-access connects directly to your daily Chrome via CDP. No Puppeteer, no headless browser, no separate profile. Your agent sees exactly what you see.',
    'arch.agent': 'AI Agent',
    'arch.agentSub': 'Claude Code, Cursor, etc.',
    'arch.proxy': 'CDP Proxy',
    'arch.proxySub': 'Lightweight local bridge',
    'arch.chrome': 'Your Chrome',
    'arch.chromeSub': 'Login state, cookies, extensions',
    'arch.see': 'See',
    'arch.seeDesc': 'Query the DOM, extract text, discover links and structure',
    'arch.act': 'Act',
    'arch.actDesc': 'Click buttons, scroll pages, fill forms, upload files',
    'arch.read': 'Read',
    'arch.readDesc': 'Extract content, capture screenshots, analyze video frames',
    'cap.label': 'Capabilities',
    'cap.title': 'Everything your agent needs on the web.',
    'cap.research': 'Deep Research',
    'cap.researchDesc': 'Multi-layer search: engine results → primary sources → full page extraction. Verify facts against official documentation, not second-hand reports.',
    'cap.auth': 'Authenticated Access',
    'cap.authDesc': 'Operates inside your logged-in Chrome. Access dashboards, admin panels, internal tools — anything you can see, your agent can see.',
    'cap.extract': 'Anti-Scraping Bypass',
    'cap.extractDesc': 'Xiaohongshu, WeChat Official Accounts, Zhihu, Weibo — platforms that block static fetching work naturally through the real browser.',
    'cap.interact': 'Full Interaction',
    'cap.interactDesc': 'Click, scroll, type, upload files, handle popups. Navigate multi-step flows like a human — form submissions, checkout processes, configuration wizards.',
    'cap.video': 'Video Analysis',
    'cap.videoDesc': 'Seek to any timestamp, capture frames, analyze video content visually. Extract information from tutorials, presentations, and recordings.',
    'cap.parallel': 'Parallel Sub-Agents',
    'cap.parallelDesc': 'Spawn multiple agents, each with their own browser tabs. Research N topics simultaneously — total time equals the slowest single task.',
    'api.label': 'Under the Hood',
    'api.title': 'Simple HTTP API. Powerful primitives.',
    'api.desc': 'The CDP Proxy exposes a clean REST API. Your agent calls curl — no SDK, no dependency, no complexity.',
    'api.new': 'Open a new background tab',
    'api.eval': 'Execute JavaScript in page context',
    'api.click': 'Click an element by CSS selector',
    'api.screenshot': 'Capture page or video frame',
    'api.scroll': 'Scroll to position or direction',
    'api.navigate': 'Navigate to a new URL',
    'api.setFiles': 'Upload local files to file inputs',
    'api.close': 'Close a tab when done',
    'install.label': 'Get Started',
    'install.title': 'Two minutes to full web access.',
    'install.step1': 'Install the skill',
    'install.step2': 'Enable Chrome debugging',
    'install.step2desc': 'Open <code>chrome://inspect/#remote-debugging</code> in Chrome, check <strong>"Allow remote debugging"</strong>, restart Chrome.',
    'install.step3': 'Start using it',
    'install.step3desc': 'Ask your agent to browse, search, or interact with any website. The skill activates automatically.',
    'install.req': 'Requirements',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Is this safe? Can the agent mess up my browser?',
    'faq.a1': 'All operations happen in <strong>new background tabs</strong> created by the agent. Your existing tabs are never touched. When the task is done, the agent closes its own tabs.',
    'faq.q2': 'Does this work with private/internal websites?',
    'faq.a2': "Yes. Since it uses your real Chrome with all your login sessions, it can access any site you're logged into — including corporate intranets, admin dashboards, and internal tools.",
    'faq.q3': 'Will websites detect and block this?',
    'faq.a3': "The skill operates through your real browser, not a headless automation tool. Most websites can't distinguish it from normal browsing. However, extremely aggressive anti-bot systems may still flag automated patterns.",
    'faq.q4': 'Can multiple agents use the browser simultaneously?',
    'faq.a4': 'Yes. Each sub-agent creates its own tabs and operates independently. They share one Chrome instance and one proxy, using different tab IDs — no conflicts.',
    'faq.q5': 'Does it work outside Claude Code?',
    'faq.a5': 'web-access follows the SKILL.md standard. It works with any agent harness that supports skills — Claude Code, Cursor, Gemini CLI, Codex CLI, and others.',
    'faq.q6': 'What about headless/server environments?',
    'faq.a6': "web-access is designed for local development where you have a running Chrome instance. For server environments, you'd need a headed Chrome session accessible via CDP.",
  },
  zh: {
    'nav.why': '为什么',
    'nav.how': '原理',
    'nav.capabilities': '能力',
    'nav.install': '安装',
    'hero.badge': 'Agent Skill',
    'hero.subtitle': '让你的 AI Agent 能看、能操作、能上网。',
    'hero.desc': '直连你日常使用的 Chrome 浏览器，天然携带登录态。搜索、浏览、点击、提取 — Agent 像你一样操作网页。',
    'hero.cta': '看看它能做什么',
    'hero.stars': '星标',
    'hero.installs': '次 npx 安装',
    'logos.label': '兼容以下 Agent',
    'problem.label': '痛点',
    'problem.title': '你的 Agent 是个「网络盲」。',
    'problem.desc': '内置联网工具只能拿到摘要，不是一手信息。没有登录态，无法交互，看不到你看到的内容。',
    'problem.without': '没有 web-access',
    'problem.with': '有了 web-access',
    'problem.w1': '搜索只返回摘要片段，不是真实页面',
    'problem.w2': '没有登录态 — 到处是付费墙、登录墙',
    'problem.w3': '动态内容不可见（SPA、懒加载）',
    'problem.w4': '反爬平台完全无法访问',
    'problem.w5': '不能点击、滚动、填表、导航',
    'problem.w6': '一次只能用一个工具，无法并行调研',
    'problem.a1': '从真实浏览器 DOM 获取完整页面内容',
    'problem.a2': '直接使用你 Chrome 的登录状态、Cookie',
    'problem.a3': 'JavaScript 动态渲染的内容完全可访问',
    'problem.a4': '小红书、微信公众号、知乎 — 全部支持',
    'problem.a5': '点击、滚动、输入、上传文件、截图',
    'problem.a6': '并行子 Agent，各自独立操作浏览器标签页',
    'arch.label': '工作原理',
    'arch.title': '三层架构，零额外浏览器。',
    'arch.desc': 'web-access 通过 CDP 协议直连你的日常 Chrome。不用 Puppeteer，不用无头浏览器，不用单独的配置文件。Agent 看到的就是你看到的。',
    'arch.agent': 'AI Agent',
    'arch.agentSub': 'Claude Code、Cursor 等',
    'arch.proxy': 'CDP Proxy',
    'arch.proxySub': '轻量级本地代理',
    'arch.chrome': '你的 Chrome',
    'arch.chromeSub': '登录态、Cookie、扩展',
    'arch.see': '看',
    'arch.seeDesc': '查询 DOM、提取文本、发现链接和页面结构',
    'arch.act': '做',
    'arch.actDesc': '点击按钮、滚动页面、填写表单、上传文件',
    'arch.read': '读',
    'arch.readDesc': '提取内容、截图捕获、分析视频帧',
    'cap.label': '核心能力',
    'cap.title': 'Agent 上网所需的一切。',
    'cap.research': '深度调研',
    'cap.researchDesc': '多层搜索：搜索引擎结果 → 一手来源 → 全页提取。基于官方文档验证事实，而非二手报道。',
    'cap.auth': '登录态访问',
    'cap.authDesc': '在你已登录的 Chrome 中操作。后台面板、管理系统、内部工具 — 你能看到的，Agent 都能看到。',
    'cap.extract': '突破反爬限制',
    'cap.extractDesc': '小红书、微信公众号、知乎、微博 — 这些封锁静态抓取的平台，通过真实浏览器自然访问。',
    'cap.interact': '完整交互',
    'cap.interactDesc': '点击、滚动、输入、上传文件、处理弹窗。像人一样完成多步流程 — 表单提交、结账流程、配置向导。',
    'cap.video': '视频分析',
    'cap.videoDesc': '跳转到任意时间点、截取帧画面、视觉分析视频内容。从教程、演示和录屏中提取信息。',
    'cap.parallel': '并行子 Agent',
    'cap.parallelDesc': '生成多个 Agent，各自拥有独立的浏览器标签页。同时调研 N 个主题 — 总耗时等于最慢的单个任务。',
    'api.label': '底层实现',
    'api.title': '简洁的 HTTP API，强大的原语。',
    'api.desc': 'CDP Proxy 暴露一套简洁的 REST API。Agent 用 curl 调用 — 无 SDK，无依赖，无复杂度。',
    'api.new': '打开新的后台标签页',
    'api.eval': '在页面上下文中执行 JavaScript',
    'api.click': '通过 CSS 选择器点击元素',
    'api.screenshot': '截取页面或视频帧',
    'api.scroll': '滚动到指定位置或方向',
    'api.navigate': '导航到新 URL',
    'api.setFiles': '上传本地文件到文件输入框',
    'api.close': '关闭标签页',
    'install.label': '开始使用',
    'install.title': '两分钟，完整联网能力。',
    'install.step1': '安装 Skill',
    'install.step2': '开启 Chrome 调试',
    'install.step2desc': '在 Chrome 地址栏打开 <code>chrome://inspect/#remote-debugging</code>，勾选 <strong>「允许远程调试」</strong>，重启 Chrome。',
    'install.step3': '开始使用',
    'install.step3desc': '让你的 Agent 去浏览、搜索或操作任何网站。Skill 会自动激活。',
    'install.req': '环境要求',
    'faq.title': '常见问题',
    'faq.q1': '安全吗？Agent 会搞乱我的浏览器吗？',
    'faq.a1': '所有操作都在 Agent 自己创建的<strong>新后台标签页</strong>中进行。你现有的标签页不会被触碰。任务完成后，Agent 会关闭自己创建的标签页。',
    'faq.q2': '支持内网/私有网站吗？',
    'faq.a2': '支持。因为使用的是你真实 Chrome 的所有登录状态，它可以访问你已登录的任何网站 — 包括企业内网、管理后台和内部工具。',
    'faq.q3': '网站会检测并封锁吗？',
    'faq.a3': '这个 Skill 通过你的真实浏览器操作，而不是无头自动化工具。大多数网站无法区分它和正常浏览。但极其激进的反机器人系统仍可能标记自动化模式。',
    'faq.q4': '多个 Agent 能同时使用浏览器吗？',
    'faq.a4': '可以。每个子 Agent 创建自己的标签页，独立操作。它们共享一个 Chrome 实例和一个 Proxy，通过不同的 tab ID 操作不同的标签页 — 没有冲突。',
    'faq.q5': '只支持 Claude Code 吗？',
    'faq.a5': 'web-access 遵循 SKILL.md 标准。它兼容所有支持 skills 的 Agent 工具 — Claude Code、Cursor、Gemini CLI、Codex CLI 等。',
    'faq.q6': '支持无头/服务器环境吗？',
    'faq.a6': 'web-access 设计用于有 Chrome 运行的本地开发环境。服务器环境需要一个可通过 CDP 访问的有界面的 Chrome 会话。',
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const data = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!data[key]) return;
    // 对于包含 HTML 的内容（install step2desc, FAQ answers 等），使用 innerHTML
    if (el.dataset.i18nHtml === 'true' || key.startsWith('faq.a') || key === 'install.step2desc') {
      el.innerHTML = data[key];
    } else {
      el.textContent = data[key];
    }
  });
  // 更新按钮文字
  const btn = document.getElementById('lang-toggle');
  btn.textContent = lang === 'en' ? 'EN / 中' : '中 / EN';
  // 持久化
  localStorage.setItem('wa-lang', lang);
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
// demos 支持双语：prompt 和 output.text 可以是 {en, zh} 对象或纯字符串
const demos = [
  {
    prompt: { en: 'Help me research the latest AI agent frameworks', zh: '帮我调研最新的 AI Agent 框架' },
    url: 'google.com/search?q=ai+agent+frameworks',
    output: [
      { text: { en: 'Opening new tab...', zh: '打开新标签页...' }, cls: 't-dim' },
      { text: { en: 'Searching Google for "AI agent frameworks 2026"', zh: '在 Google 搜索「AI agent frameworks 2026」' }, cls: 't-info' },
      { text: { en: 'Found 12 results. Extracting top 5...', zh: '找到 12 条结果，提取前 5 条...' }, cls: 't-info' },
      { text: '', cls: '' },
      { text: { en: 'Opening primary sources in parallel (3 tabs)...', zh: '并行打开 3 个一手来源...' }, cls: 't-accent' },
      { text: { en: 'Extracting content from official docs...', zh: '从官方文档提取内容...' }, cls: 't-info' },
      { text: { en: '✓ Research complete — 3 sources verified', zh: '✓ 调研完成 — 3 个来源已验证' }, cls: 't-success' },
    ]
  },
  {
    prompt: { en: 'Check my GitHub notifications and summarize', zh: '看看我的 GitHub 通知，给我总结一下' },
    url: 'github.com/notifications',
    output: [
      { text: { en: 'Connecting to your Chrome...', zh: '连接你的 Chrome...' }, cls: 't-dim' },
      { text: { en: 'Navigating to GitHub notifications (logged in)', zh: '打开 GitHub 通知页（已登录）' }, cls: 't-info' },
      { text: { en: 'Found 8 unread notifications', zh: '发现 8 条未读通知' }, cls: 't-info' },
      { text: '', cls: '' },
      { text: { en: '3 PR reviews requested', zh: '3 个 PR 等待 review' }, cls: 't-accent' },
      { text: { en: '2 issue mentions, 3 release updates', zh: '2 条 issue 提及，3 个版本更新' }, cls: 't-accent' },
      { text: { en: '✓ Summary ready', zh: '✓ 总结完成' }, cls: 't-success' },
    ]
  },
  {
    prompt: { en: 'Grab the top trending posts from Xiaohongshu about AI', zh: '去小红书搜一下 AI 相关的热门帖子' },
    url: 'xiaohongshu.com/search_result/?keyword=AI',
    output: [
      { text: { en: 'CDP mode — anti-scraping platform detected', zh: 'CDP 模式 — 检测到反爬平台' }, cls: 't-dim' },
      { text: { en: 'Opening Xiaohongshu in real browser...', zh: '在真实浏览器中打开小红书...' }, cls: 't-info' },
      { text: { en: 'Scrolling feed to load content...', zh: '滚动信息流加载内容...' }, cls: 't-info' },
      { text: { en: 'Extracting 10 posts with engagement data...', zh: '提取 10 条帖子及互动数据...' }, cls: 't-info' },
      { text: '', cls: '' },
      { text: { en: 'Downloading cover images...', zh: '下载封面图...' }, cls: 't-accent' },
      { text: { en: '✓ 10 posts extracted with full metadata', zh: '✓ 10 条帖子提取完成' }, cls: 't-success' },
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

// 从双语对象或纯字符串中取当前语言的文本
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

    // 把双语 output 转为当前语言的纯文本
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
  // 语言切换
  const langBtn = document.getElementById('lang-toggle');
  langBtn.addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'zh' : 'en');
  });

  // 读取持久化语言设置
  const saved = localStorage.getItem('wa-lang');
  if (saved && saved !== 'en') {
    setLang(saved);
  }

  // 延迟启动 demo 动画
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

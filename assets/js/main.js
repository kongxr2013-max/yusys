/* ─────────────────────────────────────────
   INTERNAL SEARCH — Fuse.js
   Add new entries here as the site grows.
───────────────────────────────────────── */
const SITE_INDEX = [
  // ── HOME ──
  { title: 'Home', sub: 'Overview of Yusys Technologies', page: 'home', icon: '🏠', bg: '#f2f4fa', cat: 'Pages' },

  // ── PRODUCTS ──
  { title: 'Core Banking System', sub: 'Distributed microservices, cloud-native, zero-downtime core banking', page: 'product-core', icon: '💻', bg: 'rgba(11,31,74,0.08)', cat: 'Products', keywords: 'core banking legacy migration microservices' },
  { title: 'AI-Powered Mobile Banking Super App', sub: 'Intelligent mobile banking platform with AI personalisation', page: 'product-ai', icon: '📱', bg: 'rgba(37,99,235,0.08)', cat: 'Products', keywords: 'mobile app AI personalisation retail banking' },
  { title: 'Consumer Credit Platform', sub: 'Full lifecycle digital lending — RMB 170B+ assets, 80M+ customers, 4B+ disbursements', page: 'product-credit', icon: '💳', bg: 'rgba(5,150,105,0.08)', cat: 'Products', keywords: 'credit loan scoring origination risk BNPL cash loan consumer finance' },
  { title: 'Enterprise Data Intelligence Platform', sub: 'Big data, analytics, and AI decision engine for banks', page: 'product-data', icon: '🧊', bg: 'rgba(99,102,241,0.08)', cat: 'Products', keywords: 'data analytics big data lakehouse real-time' },
  { title: 'Corporate Online Banking', sub: 'Transaction banking, cash management, trade finance portal', page: 'product-corporate', icon: '🏢', bg: 'rgba(14,165,233,0.08)', cat: 'Products', keywords: 'corporate treasury cash management trade finance' },
  { title: 'RegTech & Compliance Platform', sub: 'BCBS239, AML/KYC, regulatory reporting automation', page: 'product-regtech', icon: '📋', bg: 'rgba(217,119,6,0.08)', cat: 'Products', keywords: 'regulatory compliance BCBS AML KYC reporting' },
  { title: 'AI Due Diligence Engine', sub: 'Intelligent document analysis for financial due diligence', page: 'product-diligence', icon: '🔍', bg: 'rgba(168,85,247,0.08)', cat: 'Products', keywords: 'due diligence AI document analysis fintech' },
  { title: 'Infrastructure & Security', sub: 'Banking-grade cloud infrastructure and cybersecurity', page: 'product-infra', icon: '🔒', bg: 'rgba(220,38,38,0.08)', cat: 'Products', keywords: 'infrastructure security cloud cybersecurity' },

  // ── SOLUTIONS ──
  { title: 'Core Banking Modernisation', sub: 'Migrating from legacy mainframe to modern architecture', page: 'sol-coremod', icon: '🔄', bg: 'rgba(11,31,74,0.08)', cat: 'Solutions', keywords: 'legacy modernisation migration mainframe' },
  { title: 'Corporate Banking Solution', sub: 'End-to-end digital transformation for corporate banks', page: 'sol-corporate', icon: '🏦', bg: 'rgba(14,165,233,0.08)', cat: 'Solutions', keywords: 'corporate banking digital transformation' },
  { title: 'RegTech Solution', sub: 'Automated compliance and regulatory reporting', page: 'sol-regtech', icon: '⚖️', bg: 'rgba(217,119,6,0.08)', cat: 'Solutions', keywords: 'compliance regtech regulation' },
  { title: 'Joint-Stock Bank Solution', sub: 'Full-suite digital banking for joint-stock commercial banks', page: 'sol-jointop', icon: '🏛', bg: 'rgba(37,99,235,0.08)', cat: 'Solutions', keywords: 'joint stock commercial bank' },
  { title: 'Commercial Bank Solution', sub: 'Tailored transformation for mid-sized commercial banks', page: 'sol-commercial', icon: '🏦', bg: 'rgba(5,150,105,0.08)', cat: 'Solutions', keywords: 'commercial bank mid-size' },
  { title: 'Rural Bank Solution', sub: 'Digital banking for rural and cooperative financial institutions', page: 'sol-rural', icon: '🌾', bg: 'rgba(5,150,105,0.08)', cat: 'Solutions', keywords: 'rural bank cooperative agricultural' },
  { title: 'Digital Bank Solution', sub: 'Cloud-native platform for neobanks and digital-first challengers', page: 'sol-digital', icon: '⚡', bg: 'rgba(99,102,241,0.08)', cat: 'Solutions', keywords: 'neobank digital bank challenger cloud' },
  { title: 'International Banking Solution', sub: 'Cross-border banking infrastructure for global expansion', page: 'sol-international', icon: '🌐', bg: 'rgba(14,165,233,0.08)', cat: 'Solutions', keywords: 'international overseas cross-border global bank' },
  { title: 'Consumer Finance Solution', sub: 'Retail lending and consumer credit digital platform', page: 'sol-consumer', icon: '👤', bg: 'rgba(168,85,247,0.08)', cat: 'Solutions', keywords: 'consumer finance retail lending personal loan' },
  { title: 'Data & Analytics Solution', sub: 'Enterprise data strategy and intelligence for banks', page: 'sol-data', icon: '📊', bg: 'rgba(99,102,241,0.08)', cat: 'Solutions', keywords: 'data analytics intelligence reporting' },
  { title: 'Securities & Insurance Solution', sub: 'Digital transformation for securities firms and insurers', page: 'sol-securities', icon: '📈', bg: 'rgba(5,150,105,0.08)', cat: 'Solutions', keywords: 'securities insurance capital markets' },

  // ── CASE STUDIES ──
  { title: 'Case Studies', sub: 'Real-world deployments across global banking clients', page: 'cases', icon: '🗂', bg: 'rgba(11,31,74,0.08)', cat: 'Pages', keywords: 'case study client project implementation' },
  { title: 'HK Corporate Banking — 7× Client Growth', sub: 'Major commercial bank, Hong Kong — corporate online banking platform', page: 'cases', icon: '🏢', bg: 'rgba(37,99,235,0.08)', cat: 'Cases', keywords: 'hong kong corporate banking 7x growth transactions' },
  { title: 'Mobile Banking Super App', sub: 'Offshore bank — unified mobile platform', page: 'cases', icon: '📱', bg: 'rgba(14,165,233,0.08)', cat: 'Cases', keywords: 'mobile super app offshore bank fintech' },
  { title: 'Payment Infrastructure — Rural Credit Cooperative', sub: 'National clearing platform: 110M+ daily txns, 36 member institutions', page: 'cases', icon: '🏦', bg: 'rgba(14,165,233,0.08)', cat: 'Cases', keywords: 'payment infrastructure clearing settlement rural credit cooperative national' },
  { title: 'Core Banking Migration — Zero Downtime', sub: 'Leading global bank — next-generation core system', page: 'cases', icon: '💻', bg: 'rgba(11,31,74,0.08)', cat: 'Cases', keywords: 'core banking migration zero downtime legacy' },
  { title: 'Big Data Platform — Digital Bank', sub: 'Overseas digital bank — lakehouse analytics', page: 'cases', icon: '🧊', bg: 'rgba(99,102,241,0.08)', cat: 'Cases', keywords: 'big data platform lakehouse analytics offshore' },
  { title: 'Regulatory Reporting — State-owned Bank Overseas', sub: 'Major state-owned bank — BCBS239 compliance across branches', page: 'cases', icon: '📋', bg: 'rgba(217,119,6,0.08)', cat: 'Cases', keywords: 'regulatory reporting BCBS239 state bank overseas compliance' },

  // ── CBDC ──
  { title: 'Payment Infrastructure & CBDC', sub: 'Clearing & settlement systems, CBDC smart contracts, central bank infrastructure', page: 'cbdc', icon: '🏛', bg: 'rgba(79,70,229,0.08)', cat: 'Pages', keywords: 'payment infrastructure clearing settlement CBDC central bank smart contract mBridge' },

  // ── AI ──
  { title: 'AI Platform', sub: 'Full-stack AI for financial services — LLM, agents, analytics', page: 'ai', icon: '🤖', bg: 'rgba(99,102,241,0.08)', cat: 'Pages', keywords: 'AI artificial intelligence LLM machine learning banking' },

  // ── COMPANY ──
  { title: 'About Yusys', sub: 'Company history, leadership, and global presence', page: 'about', icon: '🏛', bg: 'rgba(11,31,74,0.06)', cat: 'Company', keywords: 'about company history leadership management team' },
  { title: 'Newsroom', sub: 'Press releases, white papers, and insights', page: 'newsroom', icon: '📰', bg: 'rgba(5,150,105,0.06)', cat: 'Company', keywords: 'news press whitepaper insight publication' },
  { title: 'White Paper — Digital Banking Era', sub: 'Banks enter the digital era: strategy guide for banking leaders', page: 'newsroom', icon: '📄', bg: 'rgba(37,99,235,0.06)', cat: 'Company', keywords: 'whitepaper digital transformation strategy AI banking' },
];

/* ── Engine ── */
const fuse = new Fuse(SITE_INDEX, {
  keys: [
    { name: 'title',    weight: 0.5 },
    { name: 'sub',      weight: 0.3 },
    { name: 'keywords', weight: 0.2 },
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 1,
});

let searchActiveIdx = -1;
let searchVisibleItems = [];

function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('search-main-input').focus(), 60);
  renderSearchEmpty();
}

function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('search-main-input').value = '';
  document.getElementById('search-results').innerHTML = '';
  document.getElementById('search-empty').style.display = 'none';
  searchActiveIdx = -1;
  searchVisibleItems = [];
}

function closeSearchOnBg(e) {
  if (e.target === document.getElementById('search-overlay')) closeSearch();
}

function renderSearchEmpty() {
  document.getElementById('search-results').innerHTML = '';
  document.getElementById('search-empty').style.display = 'none';
}

function doSearch(q) {
  const resultsEl = document.getElementById('search-results');
  const emptyEl   = document.getElementById('search-empty');
  searchActiveIdx = -1;
  searchVisibleItems = [];

  if (!q.trim()) { resultsEl.innerHTML = ''; emptyEl.style.display = 'none'; return; }

  const raw = fuse.search(q);
  if (!raw.length) {
    resultsEl.innerHTML = '';
    emptyEl.style.display = 'block';
    return;
  }
  emptyEl.style.display = 'none';

  // Group by category
  const groups = {};
  raw.forEach(r => {
    const cat = r.item.cat;
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(r.item);
  });

  let html = '';
  const catOrder = ['Pages', 'Products', 'Solutions', 'Cases', 'Company'];
  catOrder.forEach(cat => {
    if (!groups[cat]) return;
    html += `<div class="search-group-label">${cat}</div>`;
    groups[cat].forEach(item => {
      const idx = searchVisibleItems.length;
      searchVisibleItems.push(item);
      html += `
        <div class="search-result-item" data-idx="${idx}" onclick="searchGoTo('${item.page}')">
          <div class="search-result-icon" style="background:${item.bg}">${item.icon}</div>
          <div>
            <div class="search-result-title">${item.title}</div>
            <div class="search-result-sub">${item.sub}</div>
          </div>
          <span class="search-result-badge">${cat}</span>
        </div>`;
    });
  });

  resultsEl.innerHTML = html;
}

function searchGoTo(page) {
  closeSearch();
  go(page);
}

function searchMoveActive(dir) {
  const items = document.querySelectorAll('.search-result-item');
  if (!items.length) return;
  items.forEach(i => i.classList.remove('active-item'));
  searchActiveIdx = Math.max(0, Math.min(items.length - 1, searchActiveIdx + dir));
  const active = items[searchActiveIdx];
  active.classList.add('active-item');
  active.scrollIntoView({ block: 'nearest' });
}

function searchConfirm() {
  const active = document.querySelector('.search-result-item.active-item');
  if (active) { active.click(); return; }
  // If nothing selected but results exist, go to first
  const first = document.querySelector('.search-result-item');
  if (first) first.click();
}

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('search-main-input');
  if (!input) return;

  input.addEventListener('input', function() { doSearch(this.value); });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); searchMoveActive(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); searchMoveActive(-1); }
    else if (e.key === 'Enter') { e.preventDefault(); searchConfirm(); }
    else if (e.key === 'Escape') { closeSearch(); }
  });
});

/* ── Original nav + page JS ── */

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-item').forEach(function(item) {
    var hasDropdown = item.querySelector('.mega-drop, .simple-drop');
    if (!hasDropdown) return;
    item.addEventListener('click', function(e) {
      // If click is inside a mega-row or simple-row, let it propagate (navigate)
      if (e.target.closest('.mega-row, .simple-row, button, a')) return;
      var isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.nav-item.open').forEach(function(i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
      e.stopPropagation();
    });
  });
  document.addEventListener('click', function() {
    document.querySelectorAll('.nav-item.open').forEach(function(i) { i.classList.remove('open'); });
  });
});

/* Routing */
function filterNews(btn, type) {
  document.querySelectorAll('.news-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.news-card').forEach(card => {
    card.style.display = (type === 'all' || card.dataset.type === type) ? '' : 'none';
  });
}
function scrollToSection(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var offset = 120; // nav + anchor bar
  var top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({top: top, behavior: 'smooth'});
  // Update active link — handles both CBDC top nav and doc sidebar nav
  var clicked = event.target;
  var parentNav = clicked.closest('.doc-nav, #cbdc-anchornav');
  if (parentNav) {
    parentNav.querySelectorAll('a').forEach(function(a) { a.classList.remove('active'); });
  } else {
    document.querySelectorAll('.cbdc-anchor-link').forEach(function(a) { a.classList.remove('active'); });
  }
  clicked.classList.add('active');
}
function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id)?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(showPage, 60);
}
function goToSection(pageId, sectionId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageId)?.classList.add('active');
  window.scrollTo({ top: 0 });
  setTimeout(function() {
    showPage();
    var el = document.getElementById(sectionId);
    if (!el) return;
    var offset = 120;
    var top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }, 80);
}

/* Nav scroll */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);
});

/* Platform feature tabs */
function switchTab(btn, id) {
  btn.closest('.wrap, .section-sm, section').querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.ftab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id)?.classList.add('active');
}

function filt(btn, cat) {
  document.querySelectorAll('.filt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.case-card').forEach(c => {
    c.style.display = cat === 'all' || c.dataset.cat === cat ? '' : 'none';
  });
}

/* Modals */
function openDemo() { var m=document.getElementById('modalBg'); m.style.display='flex'; m.classList.add('open'); document.body.style.overflow='hidden'; }
function closeModal() { var m=document.getElementById('modalBg'); m.style.display='none'; m.classList.remove('open'); document.body.style.overflow=''; }
function closeBg(e) { if (e.target === document.getElementById('modalBg')) closeModal(); }

/* Mobile menu */
function toggleMobileMenu() {
  var d = document.getElementById('mobile-menu-drawer');
  if (d.style.display === 'none' || !d.style.display) {
    d.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    closeMobileMenu();
  }
}
function closeMobileMenu() {
  var d = document.getElementById('mobile-menu-drawer');
  d.style.display = 'none';
  document.body.style.overflow = '';
}
function openCase() { document.getElementById('caseBg').classList.add('open'); document.body.style.overflow='hidden'; }

async function submitForm() {
  /* ────────────────────────────────────────────────────────────
     FORMSPREE — Demo Request
     步骤：
       1. 注册 https://formspree.io → New Form → 起名 "Demo Request"
       2. 复制 Form ID（格式如 xpwzabcd）
       3. 把下面 YOUR_DEMO_FORM_ID 替换成你的 ID
  ──────────────────────────────────────────────────────────── */
  const FORM_ID = 'xaqanyjo';

  const inner = document.getElementById('modalInner');
  const inputs  = inner.querySelectorAll('input, select, textarea');
  const firstName  = inputs[0].value.trim();
  const lastName   = inputs[1].value.trim();
  const email      = inputs[2].value.trim();
  const institution= inputs[3].value.trim();
  const country    = inputs[4].value.trim();
  const interest   = inputs[5].value.trim();
  const message    = inputs[6] ? inputs[6].value.trim() : '';

  // 前端校验
  let valid = true;
  [inputs[0], inputs[2], inputs[3]].forEach(el => {
    if (!el.value.trim()) { el.style.borderColor = '#dc2626'; valid = false; }
    else el.style.borderColor = '';
  });
  if (!valid) return;

  const submitBtn = inner.querySelector('button[onclick]');
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  try {
    const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject:    `Enquiry — ${institution} (${firstName} ${lastName})`,
        form_type:   'Contact Form',
        first_name:  firstName,
        last_name:   lastName,
        email:       email,
        institution: institution,
        country:     country,
        interest:    interest,
        message:     message,
      })
    });

    if (res.ok) {
      // 成功 → 显示确认界面
      inner.innerHTML = `
        <div style="text-align:center;padding:32px 16px">
          <div style="width:64px;height:64px;background:rgba(5,150,105,0.1);border:2px solid var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 20px">✓</div>
          <div class="h4" style="margin-bottom:10px;color:var(--navy)">Request received!</div>
          <p style="color:var(--ink-3);font-size:14px;margin-bottom:24px">A solutions architect will be in touch within <strong style="color:var(--navy)">2 business days</strong>.</p>
          <div style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--r-lg);padding:18px;margin-bottom:20px;text-align:left">
            <div style="font-family:var(--font-mono);font-size:10px;color:var(--ink-4);margin-bottom:10px;letter-spacing:1px">WHAT HAPPENS NEXT</div>
            <div style="display:grid;gap:8px">
              <div style="display:flex;gap:10px;font-size:13.5px;color:var(--ink-2)"><span style="color:var(--blue-2);font-family:var(--font-mono);font-weight:600">01</span>We match you to the right solutions expert</div>
              <div style="display:flex;gap:10px;font-size:13.5px;color:var(--ink-2)"><span style="color:var(--blue-2);font-family:var(--font-mono);font-weight:600">02</span>Calendar invite for a 45-min discovery call</div>
              <div style="display:flex;gap:10px;font-size:13.5px;color:var(--ink-2)"><span style="color:var(--blue-2);font-family:var(--font-mono);font-weight:600">03</span>Tailored demo and solution brief prepared</div>
            </div>
          </div>
          <button class="btn btn-outline" onclick="closeModal()" style="width:100%;justify-content:center">Back to site</button>
        </div>`;
    } else {
      // Formspree 返回错误
      submitBtn.textContent = 'Submit failed — please try again';
      submitBtn.style.background = '#dc2626';
      submitBtn.disabled = false;
    }
  } catch (err) {
    submitBtn.textContent = 'Network error — please try again';
    submitBtn.style.background = '#dc2626';
    submitBtn.disabled = false;
  }
}

/* Scroll reveal - show everything immediately, animate in */
function showPage() {
  document.querySelectorAll('.page.active .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('in'), 40 + i * 55);
  });
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0, rootMargin: '0px' });
  document.querySelectorAll('.reveal:not(.in)').forEach(el => obs.observe(el));
}

/* Keyboard */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); document.getElementById('caseBg').classList.remove('open'); document.body.style.overflow=''; }
  if ((e.metaKey||e.ctrlKey) && e.key==='k') { e.preventDefault(); openSearch(); }
});

/* ── JOURNEY TIMELINE DATA & ENGINE ── */
const JOURNEY_DATA = [
  { year: 1999, phase: 'Founding Era', title: 'Founded in Beijing', desc: 'Yusys Technologies established in Beijing. The company sets out with a clear focus: building financial IT solutions for China\'s banking sector.', pills: ['🏢 Founded in Beijing', '💡 Banking-first vision'] },
  { year: 2000, phase: 'Founding Era', title: 'Entered the banking software market', desc: 'Yusys enters the banking software and services market, beginning to build the domain expertise and client relationships that will define the company.', pills: ['🏦 Banking software entry', '📐 Domain expertise'] },
  { year: 2002, phase: 'Founding Era', title: 'IBM strategic partner', desc: 'Became one of IBM\'s Service Providers (SP) in China — a major validation of Yusys\'s technical capability and delivery quality in the financial IT sector.', pills: ['🔴 IBM SP Partner', '🤝 Strategic alliance'] },
  { year: 2005, phase: 'Founding Era', title: 'Deloitte Asia-Pacific recognition', desc: 'Named by Deloitte as one of the fastest-growing high-technology enterprises in the Asia-Pacific region, recognising Yusys\'s rapid expansion across Chinese banking clients.', pills: ['🏆 Deloitte Asia-Pacific', '📈 Fast-growing tech'] },
  { year: 2006, phase: 'Founding Era', title: 'Merger & Tsinghua partnership', desc: 'Completed the merger of Yuxin Hongtai and Yicheng Century, renaming the combined entity Beijing Yusys Yicheng Technology Co., Ltd. Jointly established the Financial Information Technology Research Institute with Tsinghua University.', pills: ['🔗 Company merger', '🎓 Tsinghua partnership'] },
  { year: 2007, phase: 'Rapid Growth', title: 'NASDAQ listing', desc: 'Listed on NASDAQ — becoming an internationally recognised financial technology company. Used capital to acquire Ruiyang Jiaxin, Yichu Electronics, Runxin Technology, and Shanghai Fujie Consulting, cementing Yusys\'s position as China\'s only full-suite banking IT provider.', pills: ['📊 NASDAQ listed', '🇺🇸 International debut', '🛒 Strategic acquisitions'] },
  { year: 2008, phase: 'Rapid Growth', title: 'Expanded to securities & insurance', desc: 'Extended business coverage beyond banking into securities and insurance sectors, and took the first steps toward international expansion.', pills: ['📈 Securities & insurance', '🌐 First global steps'] },
  { year: 2009, phase: 'Rapid Growth', title: 'FinTech 100 & CMMI3', desc: 'Entered the global FinTech 100 ranking and achieved CMMI Level 3 certification, reinforcing Yusys\'s credentials as a world-class software engineering organisation.', pills: ['🌍 FinTech 100', '✅ CMMI3 certified'] },
  { year: 2010, phase: 'Rapid Growth', title: 'IDC No.1 in China banking IT', desc: 'Ranked No. 1 in market share among China\'s banking IT solution providers by IDC — the beginning of a sustained period of industry leadership.', pills: ['🥇 IDC No.1 China', '🏦 Banking IT leader'] },
  { year: 2012, phase: 'Rapid Growth', title: 'Privatisation from NASDAQ', desc: 'Completed the privatisation process and officially delisted from NASDAQ, setting the stage for a return to China\'s domestic capital markets.', pills: ['🔄 NASDAQ delisted', '🇨🇳 China re-focus'] },
  { year: 2014, phase: 'Second Take-off', title: 'Ecosystem expansion through M&A', desc: 'Acquired and established stakes in Tonggen Yuan, Yusys Jinshi, Zhuhai Jinlianan, Yusys Qirong, Shanghai Yuyi, Shanghai Pabei, and Beijing Youdi — continuously expanding the financial IT solution ecosystem.', pills: ['🛒 7 acquisitions', '🌐 Full-suite ecosystem'] },
  { year: 2015, phase: 'Second Take-off', title: 'Red-chip restructuring & rebrand', desc: 'Completed red-chip return and multi-round restructuring. Formally launched share reform. In August, renamed Yusys Technologies Co., Ltd. — the name the company carries today.', pills: ['♻️ Red-chip return', '📛 Renamed Yusys Technologies'] },
  { year: 2016, phase: 'Second Take-off', title: 'Big data ecosystem & cloud push', desc: 'Sixth consecutive year ranked No.1 in China banking IT market share (IDC). Signed strategic cooperation with Transwarp (big data); established Beijing Hangyu Jinfu for asset and wealth management; aggressively pushed cloud services in banking.', pills: ['🥇 6th year IDC No.1', '☁️ Cloud strategy', '📊 Big data ecosystem'] },
  { year: 2017, phase: 'Second Take-off', title: 'IDC Pioneer & seventh year No.1', desc: 'Recognised as IDC China FinTech Pioneer TOP 25. Seventh consecutive year ranked No.1 in China banking IT solution market share (IDC). Awarded 2017 Grade-A Large Enterprise in systems integration.', pills: ['🚀 IDC FinTech Pioneer', '🥇 7 consecutive years No.1'] },
  { year: 2018, phase: 'Second Take-off', title: 'A-share listing on Shenzhen Stock Exchange', desc: 'In November, listed on China\'s A-share market (Stock Code: 300674, SZ) — a landmark moment completing the company\'s transformation into a publicly listed domestic financial technology group. Signed strategic partnerships with Ant Financial and H3C Group.', pills: ['📈 A-share: 300674', '🐜 Ant Financial partnership', '🤝 H3C Group'] },
  { year: 2019, phase: 'Global Expansion', title: 'Global subsidiaries established', desc: 'Leveraging the Belt and Road Initiative, established global subsidiaries in Hong Kong, Macao, Singapore, and Indonesia — laying the foundation for international banking IT deployment and overseas client development.', pills: ['🇭🇰 Hong Kong', '🇮🇩 Indonesia', '🇸🇬 Singapore'] },
  { year: 2020, phase: 'Global Expansion', title: 'Baidu strategic investment & Global FinTech Top 100', desc: 'Baidu made a strategic equity investment in Yusys, advancing cooperation across AI, big data, and cloud (ABC). Yusys entered the global FinTech Top 100 ranking. Established further subsidiaries in Singapore and Indonesia to expand Southeast Asia business.', pills: ['🔵 Baidu strategic investor', '🌍 FinTech Global Top 100', '🌏 Southeast Asia expansion'] },
  { year: 2021, phase: 'Global Expansion', title: 'Dual HQ: Beijing & Zhuhai', desc: 'Launched a dual-headquarter strategic structure — Beijing and Zhuhai — opening a new chapter in regional development and operational resilience.', pills: ['🏢 Beijing HQ', '🏢 Zhuhai HQ', '🗺 Dual HQ strategy'] },
  { year: 2022, phase: 'Global Expansion', title: 'RMB 1.115B capital raise', desc: 'Successfully completed a fixed-increase fundraising of RMB 1.115 billion — with 4.2× oversubscription demonstrating strong market confidence in Yusys\'s long-term strategy.', pills: ['💰 RMB 1.115B raised', '4.2× oversubscribed'] },
  { year: 2023, phase: 'Global Expansion', title: 'Revenue exceeds RMB 5B; "Hidden Champion" award', desc: 'Annual revenue surpassed RMB 5 billion (≈$700M). Awarded Beijing\'s "Hidden Champion" honour recognising Yusys\'s sustained excellence in a specialist field. Named to Beijing\'s Top 100 Private Enterprises for Science & Technology Innovation.', pills: ['💰 RMB 5B+ revenue', '🏆 Hidden Champion', '🔬 Tech innovation top 100'] },
  { year: 2024, phase: 'Global Expansion', title: 'Beijing Top 100 Private Enterprise & Digital Economy Benchmark', desc: 'Named to Beijing\'s Top 100 Private Enterprises list. Awarded the prestigious Beijing Digital Economy Benchmark Enterprise honour — recognising Yusys\'s leadership in driving digital transformation across China\'s financial sector.', pills: ['🏆 Beijing Top 100 Private', '🌐 Digital Economy Benchmark', '💰 $525M revenue'] },
  { year: 2025, phase: 'AI-First Era', title: 'Full-stack AI transformation across all product lines', desc: 'Yusys moved decisively from software vendor to intelligent financial solutions provider — embedding AI across every major product line. Overseas delivery of a central bank digital currency project marked the company\'s first step from domestic CBDC builder to global digital currency partner. Overseas business more than doubled year-on-year.', pills: ['🤖 Full-stack AI transformation', '🌐 Overseas CBDC delivered', '🌏 Overseas revenue doubled'] },
  { year: 2026, phase: 'AI-First Era', title: '"AI + Globalisation + Web3" — the next chapter', desc: 'Three strategic pillars defined for the decade ahead: AI-first across all financial technology products; global expansion focused on Southeast Asia and the Middle East; and Web3 infrastructure positioning in stablecoins and next-generation cross-border payment systems.', pills: ['🧠 AI + Globalisation + Web3', '🌏 SE Asia & Middle East', '🪙 Web3 & stablecoins'] },
];

const JOURNEY_WIN = 10;
let journeyIdx = 0;
let journeyWinStart = 0;

function renderJourney() {
  const nav = document.getElementById('journeyNav');
  const panels = document.getElementById('journeyPanels');
  if (!nav || !panels) return;

  // Render ALL year buttons once
  nav.innerHTML = JOURNEY_DATA.map((d, i) =>
    `<button class="journey-yr-btn" id="jyrb-${i}" onclick="journeyGo(${i})">
      <span class="yr-label">${d.year}</span>
      <span class="yr-phase">${d.phase}</span>
    </button>`
  ).join('');

  // Render all panels
  panels.innerHTML = JOURNEY_DATA.map((d, i) => `
    <div class="journey-panel${i===0?' active':''}" id="jp-${i}">
      <div class="journey-left">
        <div class="journey-yr-num">${d.year}</div>
        <div class="journey-phase-tag">${d.phase}</div>
      </div>
      <div class="journey-right">
        <div class="journey-title">${d.title}</div>
        <div class="journey-desc">${d.desc}</div>
        <div class="journey-pills">${d.pills.map(p=>`<span class="journey-pill">${p}</span>`).join('')}</div>
      </div>
    </div>`).join('');

  updateJourneyRibbon();
  updateJourneyUI();
}

function updateJourneyRibbon() {
  const total = JOURNEY_DATA.length;
  const ribbon = document.getElementById('journeyNav');
  const wrap = ribbon?.parentElement;
  if (!ribbon || !wrap) return;

  // Apply size classes based on distance from active
  JOURNEY_DATA.forEach((_, i) => {
    const btn = document.getElementById('jyrb-'+i);
    if (!btn) return;
    const dist = Math.abs(i - journeyIdx);
    btn.classList.remove('active','near','far');
    if (i === journeyIdx) btn.classList.add('active');
    else if (dist <= 2) btn.classList.add('near');
    else btn.classList.add('far');
  });

  // Compute translation to center active button
  // Each button is ~88px wide (72 min + 6 gap), center the active one in the wrap
  requestAnimationFrame(() => {
    const activeBtn = document.getElementById('jyrb-'+journeyIdx);
    if (!activeBtn || !ribbon || !wrap) return;
    const wrapW = wrap.offsetWidth;
    const btnLeft = activeBtn.offsetLeft;
    const btnW = activeBtn.offsetWidth;
    // Offset to center active btn
    let offset = btnLeft - (wrapW / 2) + (btnW / 2);
    // Clamp so we don't over-scroll at edges
    const ribbonW = ribbon.scrollWidth;
    offset = Math.max(0, Math.min(offset, ribbonW - wrapW));
    ribbon.style.transform = `translateX(-${offset}px)`;
  });
}

function journeyGo(idx) {
  document.querySelectorAll('.journey-panel').forEach(p => p.classList.remove('active'));
  journeyIdx = idx;
  document.getElementById('jp-'+idx)?.classList.add('active');
  updateJourneyRibbon();
  updateJourneyUI();
}

function journeyStep(dir) {
  const next = journeyIdx + dir;
  if (next < 0 || next >= JOURNEY_DATA.length) return;
  journeyGo(next);
}

function journeyWindowShift(dir) { /* no-op, kept for compat */ }

function updateJourneyUI() {
  const total = JOURNEY_DATA.length;
  const pct = ((journeyIdx + 1) / total * 100).toFixed(1);
  const prog = document.getElementById('journeyProg');
  const cnt = document.getElementById('journeyCount');
  const prev = document.getElementById('journeyPrev');
  const next = document.getElementById('journeyNext');
  if (prog) prog.style.width = pct + '%';
  if (cnt) cnt.textContent = `${journeyIdx + 1} / ${total}`;
  if (prev) prev.disabled = journeyIdx === 0;
  if (next) next.disabled = journeyIdx === total - 1;
}

function setLang(lang) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`)?.classList.add('active');
  // Placeholder: future i18n hook
}

document.addEventListener('DOMContentLoaded', () => {
  showPage();
  initReveal();
  renderJourney();
});

/* ── LEADERSHIP BIO DATA ── */
const CASE_DATA = {
  'hk-corporate': {
    badge: 'Corporate Online Banking',
    badgeClass: 'badge-blue',
    icon: '🏢',
    client: 'Major Commercial Bank · Hong Kong',
    title: 'Next-Generation Corporate Online Banking Platform — Major Commercial Bank, Hong Kong',
    gradient: 'linear-gradient(135deg,#0c2340 0%,#1d4ed8 100%)',
    painPoints: [
      { label: 'Digital lag', desc: 'Outdated platform, difficult to differentiate, unable to meet evolving corporate client needs.' },
      { label: 'Channel imbalance', desc: 'Weak online presence, overloaded offline channels, high operating costs, poor customer experience.' },
      { label: 'Cross-region barriers', desc: 'Legacy system could not support group-wide needs; cross-border business growing in complexity.' },
      { label: 'Low efficiency', desc: 'Business processing took 1–3 days; high risk of client attrition; labour costs running high.' },
    ],
    solutions: [
      { label: 'Business process re-engineering', desc: 'Consolidated and simplified non-value-add steps; fully digitised all business touchpoints. Client-side page styles and menus are configurable for rapid feature rollout.' },
      { label: 'Multi-channel integration', desc: 'Introduced mobile certificate + biometric authentication; enabling corporate clients to transact securely via mobile banking.' },
      { label: 'Middleware architecture', desc: 'Distributed microservices design enables independent and agile delivery of different business products, meeting client demands faster.' },
    ],
    metrics: [
      { num: '17K → 120K+', label: 'Corporate clients' },
      { num: '30K → 200K+', label: 'Daily transactions' },
      { num: '>90%', label: 'Processing time reduced' },
      { num: '~50%', label: 'OBD staff workload reduced' },
    ],
    outcomes: [
      { label: 'Client growth', desc: 'Corporate client base grew from 17,000 to over 120,000 — a 7× increase.' },
      { label: 'Efficiency uplift', desc: 'Daily transaction volume rose from 30,000 to over 200,000. Processing time cut from 1–3 days to 30 minutes–2 hours. Corporate client time costs reduced by over 90%.' },
      { label: 'Staff productivity', desc: 'After go-live, OBD (Online Banking Department) staff workload reduced by approximately 50%.' },
    ],
  },
  'mobile-bank': {
    badge: 'Mobile Banking', badgeClass: 'badge-blue', icon: '📱',
    gradient: 'linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%)',
    client: 'Offshore Bank · Mobile Platform',
    title: 'Mobile Banking Platform Project for an Offshore Bank',
    painPoints: [
      { label: 'Fragmented channels', desc: 'Disconnected web, mobile and branch experiences creating inconsistent journeys for retail clients.' },
      { label: 'Legacy architecture', desc: 'Monolithic platform unable to rapidly launch new products or integrate third-party services.' },
      { label: 'Low engagement', desc: 'Clients not using digital channels at expected frequency; operational costs remained high.' },
    ],
    solutions: [
      { label: 'Super App architecture', desc: 'Unified personal finance, open ecosystem services, and precision marketing into a single mobile platform.' },
      { label: '20+ years of domain knowledge', desc: 'Accumulated best practices from decades of mobile banking R&D built into configurable product modules.' },
      { label: 'Open ecosystem', desc: 'API-first design enables rapid integration with third-party fintech providers and lifestyle platforms.' },
    ],
    metrics: [
      { num: '20+', label: 'Years mobile R&D' },
      { num: 'Super App', label: 'Single platform' },
      { num: 'Open API', label: 'Ecosystem ready' },
    ],
    outcomes: [
      { label: 'Digital channel consolidation', desc: 'Web, mobile, and ecosystem services unified into a single super app — eliminating siloed journeys and reducing cross-channel drop-off.' },
      { label: 'Rapid delivery', desc: 'Configurable product factory enables new feature rollout without full redeployment cycles.' },
    ],
  },
  'offshore-corporate-ob': {
    badge: 'Corporate Online Banking', badgeClass: 'badge-green', icon: '🏢',
    gradient: 'linear-gradient(135deg,#065f46 0%,#059669 100%)',
    client: 'Offshore Bank · Corporate Online Banking',
    title: 'Online Banking Project of an Offshore Bank',
    painPoints: [
      { label: 'Weak digital channels', desc: 'Corporate clients unable to self-serve key transactions; relationship managers manually handling routine requests.' },
      { label: 'Single channel dependency', desc: 'Lack of mobile access for corporate treasury operations; limited to desktop-only workflows.' },
      { label: 'Slow product updates', desc: 'Monolithic system made adding or modifying features a lengthy, high-risk process.' },
    ],
    solutions: [
      { label: 'Multi-channel platform', desc: 'Unified web and mobile corporate banking with configurable interfaces for different client segments.' },
      { label: 'Microservices architecture', desc: 'Independent service modules enable agile delivery of individual product lines without system-wide risk.' },
      { label: 'Self-service portal', desc: 'Corporate clients independently manage transactions, reporting, and account services — reducing dependency on RM staff.' },
    ],
    metrics: [
      { num: 'Multi-channel', label: 'Web + Mobile' },
      { num: 'Microservices', label: 'Architecture' },
      { num: 'Self-service', label: 'Corporate portal' },
    ],
    outcomes: [
      { label: 'Channel coverage', desc: 'Corporate clients now operate across web and mobile with unified session management and authentication.' },
      { label: 'Agile delivery', desc: 'Product teams deploy individual services independently, reducing time-to-market for new features.' },
    ],
  },
  'payment-infra-rucc': {
    badge: 'Payment Infrastructure', badgeClass: 'badge-teal', icon: '🏦',
    gradient: 'linear-gradient(135deg,#064e3b 0%,#0ea5e9 100%)',
    client: 'Rural Credit Cooperative Banking System · National Clearing',
    title: 'National Payment Infrastructure for the Rural Credit Cooperative Banking System',
    painPoints: [
      { label: 'Fragmented clearing', desc: 'Rural credit cooperative banks lacked a unified national clearing platform, resulting in slow, costly interbank settlement and limited transaction volume capacity.' },
      { label: 'Scale constraints', desc: 'Existing infrastructure could not support the transaction volumes required as digital banking adoption accelerated across rural institutions.' },
      { label: 'Interoperability gaps', desc: 'Connecting 36 member institutions with diverse legacy systems into a single coherent national payment network required a purpose-built architecture.' },
    ],
    solutions: [
      { label: 'National clearing platform', desc: 'Designed and built the central payment clearing infrastructure for the rural credit cooperative banking system — covering interbank transfers, e-wallet transactions, and real-time settlement.' },
      { label: 'Scalable architecture', desc: '24/7 high-availability platform scaled from 175,000 daily transactions at launch to over 110 million at peak — a 600× increase in capacity over successive generations.' },
      { label: 'Full institution connectivity', desc: 'Onboarded 36 member institutions into a unified clearing network with standardised interfaces, alias directory, and embedded KYC/AML risk controls.' },
    ],
    metrics: [
      { num: '110M+', label: 'Daily txns at peak' },
      { num: '175K→110M+', label: 'Transaction growth' },
      { num: '36', label: 'Member institutions' },
      { num: '24/7', label: 'Platform availability' },
    ],
    outcomes: [
      { label: 'National scale achieved', desc: 'Platform now processes over 110 million daily transactions — growing from 175,000 at launch through successive generations of infrastructure expansion.' },
      { label: 'Proven payment infrastructure blueprint', desc: 'This deployment establishes a replicable model for building national-level instant payment clearing systems — directly applicable to economies where improving payment efficiency is the immediate priority.' },
    ],
  },
  'core-global': {
    badge: 'Core Banking', badgeClass: 'badge-navy', icon: '💻',
    gradient: 'linear-gradient(135deg,#0f172a 0%,#334155 100%)',
    client: 'Leading Global Bank · Core System',
    title: 'Next-Generation Core Banking System for a Leading Global Bank',
    painPoints: [
      { label: 'Legacy vendor lock-in', desc: 'Dependence on foreign mainframe vendor with high licensing costs and slow product release cycles.' },
      { label: 'Slow time to market', desc: 'New product launches took months; parameterisation was limited and required vendor involvement.' },
      { label: 'Operational fragility', desc: 'Deployments required maintenance windows; fault isolation was slow due to tightly coupled monolithic architecture.' },
    ],
    solutions: [
      { label: 'Distributed microservices core', desc: 'Java-based, database-agnostic, cloud-native architecture with self-controlled source code.' },
      { label: 'Financial product factory', desc: 'Parameterised product configuration enabling business teams to launch new products without engineering dependency.' },
      { label: 'End-to-end automated delivery', desc: 'CI/CD pipeline with blue-green deployment and automated rollback ensures zero-downtime releases.' },
    ],
    metrics: [
      { num: '50%↓', label: 'License & support costs' },
      { num: '70–90%↓', label: 'Product launch time' },
      { num: '5–15 min', label: 'Fault identification' },
      { num: '0 min', label: 'Deployment downtime' },
    ],
    outcomes: [
      { label: 'Cost reduction', desc: 'Licence and vendor support costs reduced by over 50% following migration to self-controlled open architecture.' },
      { label: 'Speed to market', desc: 'New product launch time reduced by 70–90%. Fault identification time cut to 5–15 minutes.' },
      { label: 'Zero downtime', desc: 'Full production migration completed with zero unplanned downtime using parallel running and phased cutover.' },
    ],
  },
  'bigdata-digital-bank': {
    badge: 'Big Data', badgeClass: 'badge-blue', icon: '🧊',
    gradient: 'linear-gradient(135deg,#312e81 0%,#6d28d9 100%)',
    client: 'Overseas Digital Bank · Big Data',
    title: 'Big Data Platform Project for an Overseas Digital Bank',
    painPoints: [
      { label: 'Fragmented data', desc: 'Siloed systems across business lines with no unified data layer, making analytics and reporting unreliable.' },
      { label: 'No real-time capability', desc: 'Batch-only pipelines unable to support intraday risk monitoring or real-time customer analytics.' },
      { label: 'Governance gaps', desc: 'No consistent data standards, lineage tracking, or quality controls across the organisation.' },
    ],
    solutions: [
      { label: 'Lakehouse architecture', desc: 'Unified data storage and compute layer combining the flexibility of a data lake with the governance of a warehouse.' },
      { label: 'Real-time + batch pipeline', desc: 'Dual processing mode supporting both streaming analytics and scheduled batch reporting from a single platform.' },
      { label: 'DataOps toolchain', desc: 'Automated data quality checks, lineage tracking, and metadata management embedded into the delivery pipeline.' },
    ],
    metrics: [
      { num: 'On-time', label: 'Delivery' },
      { num: 'Real-time', label: 'Analytics capability' },
      { num: 'Stable', label: 'Since launch' },
    ],
    outcomes: [
      { label: 'On-schedule delivery', desc: 'BDP system went live on schedule — full platform operational within agreed implementation timeline.' },
      { label: 'Stable operations', desc: 'Platform has been running stably since launch with no critical incidents during production operations.' },
    ],
  },
  'data-intel-soe': {
    badge: 'Data Intelligence', badgeClass: 'badge-green', icon: '🏗',
    gradient: 'linear-gradient(135deg,#134e4a 0%,#0f766e 100%)',
    client: 'Major State-owned Bank · Overseas Branches',
    title: 'Digital Intelligence Platform for the Overseas Branches of a Major State-owned Bank',
    painPoints: [
      { label: 'Multi-jurisdiction complexity', desc: 'Overseas branches operating under different local regulatory frameworks with no unified data architecture.' },
      { label: 'Manual reporting', desc: 'Risk and compliance reports produced manually, creating accuracy risks and significant staff overhead.' },
      { label: 'No consolidated view', desc: 'Group treasury and risk functions lacked real-time visibility across overseas branch portfolios.' },
    ],
    solutions: [
      { label: 'Consulting-led design', desc: 'Regulatory consulting phase mapped local requirements across each branch jurisdiction before technical implementation.' },
      { label: 'Unified data platform', desc: 'Single financial data platform serving all overseas branches with local compliance configurations per entity.' },
      { label: 'Tool deployment', desc: 'End-to-end tooling for data governance, risk dashboards, and automated regulatory submissions.' },
    ],
    metrics: [
      { num: 'Multi-branch', label: 'Coverage' },
      { num: 'BCBS239', label: 'Compliant' },
      { num: 'Automated', label: 'Reporting' },
    ],
    outcomes: [
      { label: 'Unified oversight', desc: 'Group-level visibility across all overseas branch data assets with consistent governance standards.' },
      { label: 'Compliance automation', desc: 'Regulatory submissions automated across multiple frameworks — reducing manual effort and submission risk.' },
    ],
  },
  'regtech-soe': {
    badge: 'Regulatory Reporting', badgeClass: 'badge-amber', icon: '📋',
    gradient: 'linear-gradient(135deg,#1c1917 0%,#44403c 100%)',
    client: 'Major State-owned Bank · Overseas Branches',
    title: 'Regulatory Reporting Platform for the Overseas Branches of a Major State-owned Bank',
    painPoints: [
      { label: 'Multi-framework compliance', desc: 'Overseas branches must simultaneously comply with BCBS239, GDPR, local AML/KYC rules, and host-country regulations.' },
      { label: 'Data quality issues', desc: 'Inconsistent data definitions and poor lineage tracking undermined report accuracy and audit readiness.' },
      { label: 'Manual submission processes', desc: 'High manual effort for regulatory submissions; risk of errors and missed deadlines across multiple regulators.' },
    ],
    solutions: [
      { label: 'Consulting + Product + Implementation', desc: 'End-to-end model: regulatory consulting defined scope, product configured the rules engine, implementation delivered the full system.' },
      { label: 'Unified reporting platform', desc: 'Single platform managing submissions across BCBS239, GDPR, local AML/KYC and other frameworks simultaneously.' },
      { label: 'Data governance layer', desc: 'Automated data quality validation, lineage tracking, and metadata standards ensure accuracy at source.' },
    ],
    metrics: [
      { num: '4+', label: 'Regulatory frameworks' },
      { num: 'Automated', label: 'Submissions' },
      { num: 'Audit-ready', label: 'Data lineage' },
    ],
    outcomes: [
      { label: 'Compliance coverage', desc: 'Single platform now covers BCBS239, GDPR, AML/KYC and local regulations across all overseas branch entities.' },
      { label: 'Stable since go-live', desc: 'Mature, stable, and compliant operations since system launch — no missed regulatory deadlines.' },
    ],
  },
  /* ── TEMPLATE: copy this block for each new case ──
  'case-id': {
    badge: '',           // e.g. 'Core Banking'
    badgeClass: '',      // badge-blue / badge-green / badge-teal / badge-navy / badge-amber
    icon: '',            // emoji
    client: '',          // e.g. 'Major State-owned Bank · Southeast Asia'
    title: '',
    gradient: '',        // CSS gradient for card header
    painPoints: [
      { label: '', desc: '' },
    ],
    solutions: [
      { label: '', desc: '' },
    ],
    metrics: [
      { num: '', label: '' },  // up to 4
    ],
    outcomes: [
      { label: '', desc: '' },
    ],
  },
  ── END TEMPLATE ── */
};

function openCaseDetail(id) {
  const d = CASE_DATA[id];
  if (!d) { openCase(); return; }
  const modal = document.getElementById('caseDetailModal');
  const body  = document.getElementById('caseDetailBody');
  body.innerHTML = `
    <div style="background:${d.gradient};border-radius:var(--r-lg);padding:22px;margin-bottom:22px;position:relative;overflow:hidden">
      <div style="position:absolute;right:16px;top:50%;transform:translateY(-50%);font-size:56px;opacity:0.1">${d.icon}</div>
      <span class="badge ${d.badgeClass}" style="margin-bottom:10px;display:inline-flex">${d.badge}</span>
      <div style="font-family:var(--font-serif);font-size:18px;font-weight:700;color:white">${d.client}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:3px">${d.title}</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(${d.metrics.length},1fr);gap:10px;margin-bottom:22px">
      ${d.metrics.map(m=>`<div style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--r-lg);padding:16px;text-align:center"><div style="font-family:var(--font-serif);font-size:20px;font-weight:800;color:var(--blue-2);line-height:1.2">${m.num}</div><div style="font-size:11px;color:var(--ink-3);margin-top:4px">${m.label}</div></div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">
      <div>
        <div style="font-size:11px;font-family:var(--font-mono);color:var(--ink-4);letter-spacing:1px;margin-bottom:10px">PAIN POINTS</div>
        ${d.painPoints.map(p=>`<div style="margin-bottom:10px"><span style="font-weight:600;color:var(--navy);font-size:13px">${p.label}: </span><span style="font-size:13px;color:var(--ink-3);line-height:1.6">${p.desc}</span></div>`).join('')}
      </div>
      <div>
        <div style="font-size:11px;font-family:var(--font-mono);color:var(--ink-4);letter-spacing:1px;margin-bottom:10px">SOLUTION</div>
        ${d.solutions.map(s=>`<div style="margin-bottom:10px"><span style="font-weight:600;color:var(--navy);font-size:13px">${s.label}: </span><span style="font-size:13px;color:var(--ink-3);line-height:1.6">${s.desc}</span></div>`).join('')}
      </div>
    </div>
    <div style="background:var(--surface);border-radius:var(--r-lg);padding:18px;margin-bottom:20px;border:1px solid var(--border)">
      <div style="font-size:11px;font-family:var(--font-mono);color:var(--ink-4);letter-spacing:1px;margin-bottom:10px">PROJECT OUTCOMES</div>
      ${d.outcomes.map(o=>`<div style="margin-bottom:8px"><span style="font-weight:600;color:var(--green);font-size:13px">✓ ${o.label}: </span><span style="font-size:13px;color:var(--ink-3);line-height:1.6">${o.desc}</span></div>`).join('')}
    </div>
    <div style="display:flex;gap:10px">
      <button class="btn btn-navy btn-lg" style="flex:1;justify-content:center" onclick="openDemo()">Discuss a similar project</button>
      <button class="btn btn-outline" onclick="closeCaseDetail()">Close</button>
    </div>
  `;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeCaseDetail(e) {
  if (e && e.target !== document.getElementById('caseDetailModal') && !e.target.closest('button[onclick*="closeCaseDetail"]')) return;
  document.getElementById('caseDetailModal').style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('caseDetailModal').style.display = 'none';
    document.body.style.overflow = '';
  }
});


const BIO_DATA = {
  'placeholder-2': {
    avatar: '👤',
    photo: null,
    name: '[ Name ]',
    title: '[ Title ]',
    bio: '[ Bio to be provided. ]'
  },
  'placeholder-3': {
    avatar: '👤',
    photo: null,
    name: '[ Name ]',
    title: '[ Title ]',
    bio: '[ Bio to be provided. ]'
  },
  'placeholder-4': {
    avatar: '👤',
    photo: null,
    name: '[ Name ]',
    title: '[ Title ]',
    bio: '[ Bio to be provided. ]'
  },
  'placeholder-5': {
    avatar: '👤',
    photo: null,
    name: '[ Name ]',
    title: '[ Title ]',
    bio: '[ Bio to be provided. ]'
  },
  'placeholder-6': {
    avatar: '👤',
    photo: null,
    name: '[ Name ]',
    title: '[ Title ]',
    bio: '[ Bio to be provided. ]'
  },
  'ning-zhang': {
    avatar: '👨‍💻',
    photo: 'data:image/jpeg;base64,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',
    name: 'Ning Zhang',
    title: 'Chief Technology Officer & Senior Vice President',
    tags: ['Tsinghua University', 'USC', 'Silicon Valley', 'Oracle · Zuora · Snowball Finance'],
    bio: 'Mr. Ning Zhang is the Chief Technology Officer and Senior Vice President of Yusys Technologies. A dual-degree holder with master\'s degrees from Tsinghua University and the University of Southern California, Ning brings over two decades of engineering and technology leadership experience spanning both Silicon Valley and China\'s financial technology sector.\n\nHe began his career at Oracle Corporation as a Senior Software Engineer, before moving to Fortify Inc. and later Zuora Inc., where he rose to Director of Engineering. He subsequently joined Snowball Finance as Senior Technical Director and then VP of Engineering, before taking on his current role at Yusys Technologies in May 2024.'
  }
};

function openBio(id) {
  const d = BIO_DATA[id];
  if (!d) return;
  const avEl = document.getElementById('bio-avatar'); if(d.photo){ avEl.innerHTML = '<img src="'+d.photo+'" style="width:100%;height:100%;object-fit:cover;object-position:center top" alt="'+d.name+'">'; } else { avEl.textContent = d.avatar; }
  document.getElementById('bio-name').textContent = d.name;
  document.getElementById('bio-title').textContent = d.title;
  document.getElementById('bio-text').innerHTML = d.bio.split('\n\n').map(p => `<p style="margin:0 0 14px">${p}</p>`).join('');
  const modal = document.getElementById('bio-modal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeBio(e) {
  if (e && e.target !== document.getElementById('bio-modal') && !e.target.closest('button')) return;
  document.getElementById('bio-modal').style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') { document.getElementById('bio-modal').style.display = 'none'; document.body.style.overflow = ''; }});

async function submitWPForm(btn) {
  /* ────────────────────────────────────────────────────────────
     FORMSPREE — White Paper Download
     步骤：
       1. 注册 https://formspree.io → New Form → 起名 "White Paper Download"
       2. 复制 Form ID（格式如 xpwzabcd）
       3. 把下面 YOUR_WP_FORM_ID 替换成你的 ID
  ──────────────────────────────────────────────────────────── */
  const FORM_ID = 'mlgadenl';

  var inputs = btn.parentNode.querySelectorAll('input');
  var firstName  = inputs[0].value.trim();
  var lastName   = inputs[1].value.trim();
  var email      = inputs[2].value.trim();
  var institution= inputs[3].value.trim();
  var jobTitle   = inputs[4].value.trim();

  // 前端校验
  var valid = true;
  [inputs[0], inputs[2], inputs[3]].forEach(function(el) {
    if (!el.value.trim()) { el.style.borderColor = '#dc2626'; valid = false; }
    else el.style.borderColor = '';
  });
  if (!valid) return;

  btn.textContent = 'Sending…';
  btn.disabled = true;
  Array.from(inputs).forEach(function(i) { i.disabled = true; });

  try {
    var res = await fetch('https://formspree.io/f/' + FORM_ID, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject:    'White Paper Download — ' + institution + ' (' + firstName + ' ' + lastName + ')',
        form_type:   'White Paper Download',
        first_name:  firstName,
        last_name:   lastName,
        email:       email,
        institution: institution,
        job_title:   jobTitle,
      })
    });

    if (res.ok) {
      btn.textContent = '✓ Check your inbox — we\'ll send it shortly';
      btn.style.background = '#059669';
    } else {
      btn.textContent = 'Submit failed — please try again';
      btn.style.background = '#dc2626';
      btn.disabled = false;
      Array.from(inputs).forEach(function(i) { i.disabled = false; });
    }
  } catch (err) {
    btn.textContent = 'Network error — please try again';
    btn.style.background = '#dc2626';
    btn.disabled = false;
    Array.from(inputs).forEach(function(i) { i.disabled = false; });
  }
}



;


/* ─────────────────────────────────────────
   NEWS DATA  –  single source of truth
   To add an article: add an object to the array below.
   type:   'whitepaper' | 'press' | 'insight'
   sort:   YYYYMM  (higher = shown first)
   action: 'download' | 'read' | 'link'
   url:    for 'download' use 'wp', for 'link' use full URL
───────────────────────────────────────── */
var NEWS_DATA = [
  {
    id: 'whitepaper-2025',
    type: 'whitepaper',
    date: '2025',
    sort: 202500,
    icon: '📄',
    color: '#0b1f4a',
    title: 'Business Innovation, Technology Empowerment: Banks Enter the Digital Era',
    excerpt: 'A strategic guide for banking leaders navigating digital transformation — AI adoption, data infrastructure, and the competitive dynamics reshaping financial services.',
    action: 'download',
    url: 'wp'
  }
  /* NEW ARTICLES GO HERE — copy the block above, change fields */
];

function newsTypeLabel(type) {
  if (type === 'whitepaper') return 'White Paper';
  if (type === 'press')      return 'Press Release';
  if (type === 'insight')    return 'Insight';
  return 'News';
}

function newsTypeBg(type) {
  if (type === 'whitepaper') return 'rgba(37,99,235,0.08)';
  if (type === 'press')      return 'rgba(14,165,233,0.08)';
  return 'rgba(5,150,105,0.08)';
}

function newsTypeColor(type) {
  if (type === 'whitepaper') return '#2563eb';
  if (type === 'press')      return '#0284c7';
  return '#059669';
}

function newsOnclick(item) {
  if (item.action === 'download') {
    return "document.getElementById('wp-download-section').style.display='grid'; document.getElementById('wp-download-section').scrollIntoView({behavior:'smooth'});";
  }
  if (item.url && item.url !== '#') {
    return "window.open('" + item.url + "','_blank');";
  }
  return "go('newsroom');";
}

function renderHomeNewsRow(item) {
  var label  = newsTypeLabel(item.type);
  var bg     = newsTypeBg(item.type);
  var color  = newsTypeColor(item.type);
  var action = item.action === 'download' ? 'Download →' : 'Read more →';
  var onclick = newsOnclick(item);
  var card = document.createElement('div');
  card.setAttribute('onclick', onclick);
  card.style.cssText = 'background:white;border:1px solid var(--border);border-radius:16px;overflow:hidden;cursor:pointer;transition:all 0.22s';
  card.onmouseover = function() { this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 40px rgba(0,0,0,0.11)'; };
  card.onmouseout  = function() { this.style.transform=''; this.style.boxShadow=''; };
  card.innerHTML =
    '<div style="height:160px;background:' + item.color + ';display:flex;align-items:center;justify-content:center;font-size:40px;position:relative;overflow:hidden">' +
      '<div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px);background-size:28px 28px"></div>' +
      '<span style="position:relative">' + item.icon + '</span>' +
    '</div>' +
    '<div style="padding:20px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">' +
        '<span style="background:' + bg + ';color:' + color + ';padding:3px 10px;border-radius:999px;font-size:11px;font-weight:500">' + label + '</span>' +
        '<span style="font-size:12px;color:var(--ink-4);font-family:var(--font-mono)">' + item.date + '</span>' +
      '</div>' +
      '<div style="font-weight:700;font-size:15px;color:var(--navy);line-height:1.4;margin-bottom:8px">' + item.title + '</div>' +
      '<p style="font-size:13px;color:var(--ink-3);line-height:1.65;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">' + item.excerpt + '</p>' +
      '<div style="font-size:13px;font-weight:600;color:#2563eb">' + action + '</div>' +
    '</div>';
  return card;
}

function renderNewsroomCard(item) {
  var label   = newsTypeLabel(item.type);
  var bg      = newsTypeBg(item.type);
  var color   = newsTypeColor(item.type);
  var action  = item.action === 'download' ? 'Download \u2192' : 'Read more \u2192';
  var onclick = newsOnclick(item);
  var card = document.createElement('div');
  card.setAttribute('onclick', onclick);
  card.style.cssText = 'background:white;border:1px solid var(--border);border-radius:16px;overflow:hidden;cursor:pointer;transition:all 0.25s';
  card.onmouseover = function() { this.style.transform = 'translateY(-3px)'; this.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; };
  card.onmouseout  = function() { this.style.transform = ''; this.style.boxShadow = ''; };
  card.innerHTML =
    '<div style="height:140px;background:' + item.color + ';display:flex;align-items:center;justify-content:center;font-size:36px">' + item.icon + '</div>' +
    '<div style="padding:20px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">' +
        '<span style="background:' + bg + ';color:' + color + ';padding:3px 10px;border-radius:999px;font-size:11px;font-weight:500">' + label + '</span>' +
        '<span style="font-size:12px;color:var(--ink-4);font-family:var(--font-mono)">' + item.date + '</span>' +
      '</div>' +
      '<div style="font-weight:700;font-size:15px;color:var(--navy);line-height:1.4;margin-bottom:8px">' + item.title + '</div>' +
      '<p style="font-size:13px;color:var(--ink-3);line-height:1.65;margin-bottom:12px">' + item.excerpt + '</p>' +
      '<div style="font-size:13px;font-weight:600;color:#2563eb">' + action + '</div>' +
    '</div>';
  return card;
}

function initNews() {
  var sorted = NEWS_DATA.slice().sort(function(a, b) { return b.sort - a.sort; });

  var homeList = document.getElementById('home-news-list');
  if (homeList) {
    homeList.innerHTML = '';
    var limit = Math.min(sorted.length, 4);
    for (var i = 0; i < limit; i++) {
      homeList.appendChild(renderHomeNewsRow(sorted[i]));
    }
  }

  var nrGrid = document.getElementById('newsroom-grid');
  if (nrGrid) {
    nrGrid.innerHTML = '';
    for (var j = 0; j < sorted.length; j++) {
      nrGrid.appendChild(renderNewsroomCard(sorted[j]));
    }
  }
}

document.addEventListener('DOMContentLoaded', function() { initNews(); });




/* ── COOKIE CONSENT ── */
(function() {
  var consent = localStorage.getItem('yusys_cookie_consent');
  if (consent) {
    var b = document.getElementById('cookie-banner');
    if (b) b.classList.add('hidden');
  }
})();
function acceptCookies() {
  localStorage.setItem('yusys_cookie_consent', 'accepted');
  var b = document.getElementById('cookie-banner');
  if (b) b.classList.add('hidden');
}
function declineCookies() {
  localStorage.setItem('yusys_cookie_consent', 'essential_only');
  var b = document.getElementById('cookie-banner');
  if (b) b.classList.add('hidden');
  openLegalModal('privacyModal');
}

/* ── LEGAL MODALS ── */
function openLegalModal(id) {
  var el = document.getElementById(id);
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeLegalModal(id, e) {
  if (e && e.target !== document.getElementById(id)) return;
  var el = document.getElementById(id);
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    ['privacyModal','copyrightModal'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.classList.contains('open')) {
        el.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
});


/* ─────────────────────────────────────────
   NEWS DATA  –  single source of truth
   To add an article: add an object to the array below.
   type:   'whitepaper' | 'press' | 'insight'
   sort:   YYYYMM  (higher = shown first)
   action: 'download' | 'read' | 'link'
   url:    for 'download' use 'wp', for 'link' use full URL
───────────────────────────────────────── */
var NEWS_DATA = [
  {
    id: 'whitepaper-2025',
    type: 'whitepaper',
    date: '2025',
    sort: 202500,
    icon: '<img src="images/newsroom1.jpg" style="width:344px;height:140px;display:block;">',
    color: '#0b1f4a',
    title: 'Business Innovation, Technology Empowerment: Banks Enter the Digital Era',
    excerpt: 'A strategic guide for banking leaders navigating digital transformation — AI adoption, data infrastructure, and the competitive dynamics reshaping financial services.',
    action: 'download',
    url: 'wp'
  }
  ,
  {
    id: 'money2020-asia-2026',
    type: 'insight',
    date: 'Apr 2026',
    sort: 202604,
    icon: '🎤',
    color: '#1a1a3e',
    title: 'From Aspiration to Execution: What It Really Takes to Scale AI in Banking',
    excerpt: 'At Money20/20 Asia, Yusys Technologies\' CTO and Hong Kong GM offered a ground-level view of where financial AI transformation stalls — and what it takes to move forward.',
    action: 'read',
    url: '#',
    thumb: 'data:image/jpeg;base64,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'
  }
  /* NEW ARTICLES GO HERE — copy the block above, change fields */
];

function newsTypeLabel(type) {
  if (type === 'whitepaper') return 'White Paper';
  if (type === 'press')      return 'Press Release';
  if (type === 'insight')    return 'Insight';
  return 'News';
}

function newsTypeBg(type) {
  if (type === 'whitepaper') return 'rgba(37,99,235,0.08)';
  if (type === 'press')      return 'rgba(14,165,233,0.08)';
  return 'rgba(5,150,105,0.08)';
}

function newsTypeColor(type) {
  if (type === 'whitepaper') return '#2563eb';
  if (type === 'press')      return '#0284c7';
  return '#059669';
}

function newsOnclick(item) {
  if (item.action === 'download') {
    return "document.getElementById('wp-download-section').style.display='grid'; document.getElementById('wp-download-section').scrollIntoView({behavior:'smooth'});";
  }
  if (item.id === 'money2020-asia-2026') {
    return "go('article-money2020');";
  }
  if (item.url && item.url !== '#') {
    return "window.open('" + item.url + "','_blank');";
  }
  return "go('newsroom');";
}

function renderHomeNewsRow(item) {
  var label  = newsTypeLabel(item.type);
  var bg     = newsTypeBg(item.type);
  var color  = newsTypeColor(item.type);
  var action = item.action === 'download' ? 'Download →' : 'Read more →';
  var onclick = newsOnclick(item);
  var card = document.createElement('div');
  card.setAttribute('onclick', onclick);
  card.style.cssText = 'background:white;border:1px solid var(--border);border-radius:16px;overflow:hidden;cursor:pointer;transition:all 0.22s';
  card.onmouseover = function() { this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 40px rgba(0,0,0,0.11)'; };
  card.onmouseout  = function() { this.style.transform=''; this.style.boxShadow=''; };
  card.innerHTML =
    (item.thumb ? '<div style="height:160px;background:center/cover no-repeat url(' + item.thumb + ')"></div>' : '<div style="height:160px;background:' + item.color + ';display:flex;align-items:center;justify-content:center;font-size:40px;position:relative;overflow:hidden"><div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px);background-size:28px 28px"></div><span style="position:relative">' + item.icon + '</span></div>') +
    '<div style="padding:20px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">' +
        '<span style="background:' + bg + ';color:' + color + ';padding:3px 10px;border-radius:999px;font-size:11px;font-weight:500">' + label + '</span>' +
        '<span style="font-size:12px;color:var(--ink-4);font-family:var(--font-mono)">' + item.date + '</span>' +
      '</div>' +
      '<div style="font-weight:700;font-size:15px;color:var(--navy);line-height:1.4;margin-bottom:8px">' + item.title + '</div>' +
      '<p style="font-size:13px;color:var(--ink-3);line-height:1.65;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">' + item.excerpt + '</p>' +
      '<div style="font-size:13px;font-weight:600;color:#2563eb">' + action + '</div>' +
    '</div>';
  return card;
}

function renderNewsroomCard(item) {
  var label   = newsTypeLabel(item.type);
  var bg      = newsTypeBg(item.type);
  var color   = newsTypeColor(item.type);
  var action  = item.action === 'download' ? 'Download \u2192' : 'Read more \u2192';
  var onclick = newsOnclick(item);
  var card = document.createElement('div');
  card.setAttribute('onclick', onclick);
  card.style.cssText = 'background:white;border:1px solid var(--border);border-radius:16px;overflow:hidden;cursor:pointer;transition:all 0.25s';
  card.onmouseover = function() { this.style.transform = 'translateY(-3px)'; this.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; };
  card.onmouseout  = function() { this.style.transform = ''; this.style.boxShadow = ''; };
  card.innerHTML =
    (item.thumb ? '<div style="height:140px;background:center/cover no-repeat url(' + item.thumb + ')"></div>' : '<div style="height:140px;background:' + item.color + ';display:flex;align-items:center;justify-content:center;font-size:36px">' + item.icon + '</div>') +
    '<div style="padding:20px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">' +
        '<span style="background:' + bg + ';color:' + color + ';padding:3px 10px;border-radius:999px;font-size:11px;font-weight:500">' + label + '</span>' +
        '<span style="font-size:12px;color:var(--ink-4);font-family:var(--font-mono)">' + item.date + '</span>' +
      '</div>' +
      '<div style="font-weight:700;font-size:15px;color:var(--navy);line-height:1.4;margin-bottom:8px">' + item.title + '</div>' +
      '<p style="font-size:13px;color:var(--ink-3);line-height:1.65;margin-bottom:12px">' + item.excerpt + '</p>' +
      '<div style="font-size:13px;font-weight:600;color:#2563eb">' + action + '</div>' +
    '</div>';
  return card;
}

function initNews() {
  var sorted = NEWS_DATA.slice().sort(function(a, b) { return b.sort - a.sort; });

  var homeList = document.getElementById('home-news-list');
  if (homeList) {
    homeList.innerHTML = '';
    var limit = Math.min(sorted.length, 4);
    for (var i = 0; i < limit; i++) {
      homeList.appendChild(renderHomeNewsRow(sorted[i]));
    }
  }

  var nrGrid = document.getElementById('newsroom-grid');
  if (nrGrid) {
    nrGrid.innerHTML = '';
    for (var j = 0; j < sorted.length; j++) {
      nrGrid.appendChild(renderNewsroomCard(sorted[j]));
    }
  }
}

document.addEventListener('DOMContentLoaded', function() { initNews(); });





/* ── HASH ROUTING ── */
function handleHash() {
  var h = window.location.hash.replace('#','');
  if (h && document.getElementById('page-' + h)) {
    go(h);
  }
}
window.addEventListener('hashchange', handleHash);
/* Check hash on load */
(function() {
  var h = window.location.hash.replace('#','');
  if (h && document.getElementById('page-' + h)) {
    setTimeout(function(){ go(h); }, 200);
  }
})();


/* ── SOCIAL SHARING ── */
function getArticleShareUrl() {
  return encodeURIComponent(window.location.origin + window.location.pathname + '#article-money2020');
}
function getArticleShareTitle() {
  return encodeURIComponent('From Aspiration to Execution: What It Really Takes to Scale AI in Banking — Yusys Technologies');
}
function shareLinkedIn() {
  window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + getArticleShareUrl(), '_blank', 'width=600,height=500');
}
function shareFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + getArticleShareUrl(), '_blank', 'width=600,height=500');
}
function shareX() {
  window.open('https://x.com/intent/tweet?url=' + getArticleShareUrl() + '&text=' + getArticleShareTitle(), '_blank', 'width=600,height=500');
}

/* ── COOKIE CONSENT ── */
(function() {
  var consent = localStorage.getItem('yusys_cookie_consent');
  if (consent) {
    var b = document.getElementById('cookie-banner');
    if (b) b.classList.add('hidden');
  }
})();
function acceptCookies() {
  localStorage.setItem('yusys_cookie_consent', 'accepted');
  var b = document.getElementById('cookie-banner');
  if (b) b.classList.add('hidden');
}
function declineCookies() {
  localStorage.setItem('yusys_cookie_consent', 'essential_only');
  var b = document.getElementById('cookie-banner');
  if (b) b.classList.add('hidden');
  openLegalModal('privacyModal');
}

/* ── LEGAL MODALS ── */
function openLegalModal(id) {
  var el = document.getElementById(id);
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeLegalModal(id, e) {
  if (e && e.target !== document.getElementById(id)) return;
  var el = document.getElementById(id);
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    ['privacyModal','copyrightModal'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.classList.contains('open')) { closeLegalModal(id); }
    });
  }
});
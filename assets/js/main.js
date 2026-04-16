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
  { year: 2015, phase: 'Second Take-off', title: 'Red-chip restructuring & rebrand', desc: 'Completed red-chip return and multi-round restructuring. Formally launched share reform. In August, renamed Beijing Yusys Technologies Group Co., Ltd. — the name the company carries today.', pills: ['♻️ Red-chip return', '📛 Renamed Yusys Technologies'] },
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


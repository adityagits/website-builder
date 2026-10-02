/* Component library. Add your own by pushing to WB.components.
   Each component: { id, label, category, icon, html() } where html() returns the
   section markup. Styling comes ONLY from theme/theme.css (`wb-*` classes). */
(function () {
  const WB = (window.WB = window.WB || {});

  // inline SVG placeholder images (no network needed)
  const ph = (w, h, label = "Image", c1 = "#e0e7ff", c2 = "#c7d2fe") =>
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
        `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>` +
        `<rect width="100%" height="100%" fill="url(#g)"/>` +
        `<text x="50%" y="50%" font-family="sans-serif" font-size="${Math.round(h / 12)}" fill="#6366f1" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`
    );
  const avatar = (n, c) => ph(160, 160, n, c, "#e2e8f0");
  WB.placeholder = ph;

  WB.categories = [
    "Navigation", "Hero", "Content", "Features", "Social proof", "Conversion", "Footer", "Layout",
  ];

  const C = [];
  const add = (id, label, category, icon, html) => C.push({ id, label, category, icon, html });

  add("navbar", "Navbar", "Navigation", "☰", () => `
<header class="wb-section wb-nav" data-pad="none"><div class="wb-container">
  <a class="wb-nav__brand" href="index.html">Brand</a>
  <ul class="wb-nav__links">
    <li><a href="index.html">Home</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a class="wb-btn" href="#contact">Get started</a></li>
  </ul>
</div></header>`);

  add("hero-center", "Hero · Centered", "Hero", "✦", () => `
<section class="wb-section wb-hero wb-hero--center" data-pad="xl"><div class="wb-container">
  <span class="wb-eyebrow">Introducing</span>
  <h1>Build beautiful websites without writing code</h1>
  <p class="wb-lead">Drag, drop and publish. A clean, fast starting point for any idea you want to put online.</p>
  <div class="wb-actions"><a class="wb-btn" href="#">Get started</a><a class="wb-btn wb-btn--outline" href="#">Learn more</a></div>
</div></section>`);

  add("hero-split", "Hero · Split", "Hero", "◧", () => `
<section class="wb-section wb-hero" data-pad="lg"><div class="wb-container wb-split">
  <div>
    <span class="wb-eyebrow">New release</span>
    <h1>Launch your next big idea faster</h1>
    <p class="wb-lead">Everything you need to design, customise and ship a modern landing page.</p>
    <div class="wb-actions"><a class="wb-btn" href="#">Start free</a><a class="wb-btn wb-btn--ghost" href="#">Watch demo</a></div>
  </div>
  <img class="wb-media" src="${ph(720, 540, "Hero image")}" alt="Hero image">
</div></section>`);

  add("hero-image", "Hero · Background", "Hero", "▣", () => `
<section class="wb-section wb-hero wb-hero--image wb-hero--center" data-pad="xl" style="background-image:url('${ph(1600, 800, " ", "#312e81", "#0ea5e9")}')"><div class="wb-container">
  <h1>A bold headline over a full-width image</h1>
  <p class="wb-lead">Change the background by editing the section's HTML or style.</p>
  <div class="wb-actions"><a class="wb-btn" href="#">Primary action</a></div>
</div></section>`);

  add("text", "Text block", "Content", "¶", () => `
<section class="wb-section" data-width="narrow"><div class="wb-container">
  <h2>Section heading</h2>
  <p>Write your story here. Click any text to edit it directly on the page. Use the inspector on the right to change the background, spacing and alignment of this section.</p>
  <p>Add a second paragraph, or drop in more components from the sidebar.</p>
</div></section>`);

  add("image-text", "Image + text", "Content", "◫", () => `
<section class="wb-section"><div class="wb-container wb-split">
  <img class="wb-media" src="${ph(640, 480, "Image")}" alt="Image">
  <div>
    <span class="wb-eyebrow">About us</span>
    <h2>Tell visitors what makes you different</h2>
    <p>A short, friendly paragraph that explains your product, service or story. Keep it clear and focused on the value you deliver.</p>
    <div class="wb-actions"><a class="wb-btn" href="#">Read more</a></div>
  </div>
</div></section>`);

  add("image", "Full image", "Content", "🖼", () => `
<section class="wb-section" data-pad="sm"><div class="wb-container">
  <img class="wb-media" src="${ph(1200, 520, "Wide image")}" alt="Wide image">
</div></section>`);

  add("gallery", "Gallery", "Content", "▦", () => `
<section class="wb-section" data-bg="alt"><div class="wb-container">
  <div class="wb-header"><h2>Gallery</h2><p class="wb-lead">A few moments worth sharing.</p></div>
  <div class="wb-grid wb-gallery" data-cols="3">
    <img src="${ph(480, 360, "1")}" alt="Gallery 1"><img src="${ph(480, 360, "2", "#fce7f3", "#fbcfe8")}" alt="Gallery 2"><img src="${ph(480, 360, "3", "#dcfce7", "#bbf7d0")}" alt="Gallery 3">
    <img src="${ph(480, 360, "4", "#fef3c7", "#fde68a")}" alt="Gallery 4"><img src="${ph(480, 360, "5")}" alt="Gallery 5"><img src="${ph(480, 360, "6", "#e0f2fe", "#bae6fd")}" alt="Gallery 6">
  </div>
</div></section>`);

  add("video", "Video embed", "Content", "▶", () => `
<section class="wb-section" data-width="narrow"><div class="wb-container">
  <div class="wb-video"><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video" allowfullscreen loading="lazy"></iframe></div>
</div></section>`);

  add("features-grid", "Features grid", "Features", "▥", () => `
<section class="wb-section" id="features"><div class="wb-container">
  <div class="wb-header"><span class="wb-eyebrow">Features</span><h2>Everything you need</h2><p class="wb-lead" style="margin-inline:auto">Powerful building blocks that work great together.</p></div>
  <div class="wb-grid" data-cols="3">
    <div class="wb-card"><span class="wb-icon">⚡</span><h3>Lightning fast</h3><p>Pages are lightweight, clean and quick to load on any device.</p></div>
    <div class="wb-card"><span class="wb-icon">🎨</span><h3>Fully themeable</h3><p>Change colours, fonts and spacing once and the whole site follows.</p></div>
    <div class="wb-card"><span class="wb-icon">📱</span><h3>Responsive</h3><p>Looks great on desktop, tablet and mobile out of the box.</p></div>
    <div class="wb-card"><span class="wb-icon">🧩</span><h3>Modular</h3><p>Mix and match ready-made sections to build any page.</p></div>
    <div class="wb-card"><span class="wb-icon">🔒</span><h3>Secure</h3><p>Static HTML means a tiny attack surface and easy hosting.</p></div>
    <div class="wb-card"><span class="wb-icon">🚀</span><h3>Export anywhere</h3><p>Download plain HTML and host it wherever you like.</p></div>
  </div>
</div></section>`);

  add("features-list", "Feature rows", "Features", "☷", () => `
<section class="wb-section" data-bg="alt"><div class="wb-container wb-split">
  <div><span class="wb-eyebrow">Why us</span><h2>Built for the way you work</h2><p class="wb-lead">Focus on content while the theme takes care of the details.</p></div>
  <div class="wb-stack">
    <div class="wb-card"><h3>✔ Simple to start</h3><p>Pick a section, edit the text, publish.</p></div>
    <div class="wb-card"><h3>✔ Easy to extend</h3><p>Add your own components in a few lines of code.</p></div>
    <div class="wb-card"><h3>✔ Yours to keep</h3><p>No lock-in. Exported pages are plain HTML and CSS.</p></div>
  </div>
</div></section>`);

  add("stats", "Stats", "Features", "％", () => `
<section class="wb-section" data-bg="primary" data-align="center" data-pad="md"><div class="wb-container">
  <div class="wb-grid" data-cols="4">
    <div class="wb-stat"><strong>10k+</strong><p>Happy customers</p></div>
    <div class="wb-stat"><strong>99.9%</strong><p>Uptime</p></div>
    <div class="wb-stat"><strong>120</strong><p>Countries</p></div>
    <div class="wb-stat"><strong>24/7</strong><p>Support</p></div>
  </div>
</div></section>`);

  add("steps", "Steps", "Features", "①", () => `
<section class="wb-section"><div class="wb-container">
  <div class="wb-header"><h2>How it works</h2></div>
  <div class="wb-grid" data-cols="3">
    <div class="wb-card--flat"><span class="wb-icon">1</span><h3>Choose</h3><p>Pick the sections that fit your page.</p></div>
    <div class="wb-card--flat"><span class="wb-icon">2</span><h3>Customise</h3><p>Edit text, images and the theme.</p></div>
    <div class="wb-card--flat"><span class="wb-icon">3</span><h3>Publish</h3><p>Export clean HTML and go live.</p></div>
  </div>
</div></section>`);

  add("logos", "Logo cloud", "Social proof", "◎", () => `
<section class="wb-section" data-pad="sm"><div class="wb-container">
  <p class="wb-muted wb-small" style="text-align:center">Trusted by teams at</p>
  <div class="wb-logos"><span>Acme</span><span>Globex</span><span>Initech</span><span>Umbrella</span><span>Hooli</span></div>
</div></section>`);

  add("testimonials", "Testimonials", "Social proof", "❝", () => `
<section class="wb-section" data-bg="alt"><div class="wb-container">
  <div class="wb-header"><span class="wb-eyebrow">Testimonials</span><h2>Loved by customers</h2></div>
  <div class="wb-grid" data-cols="3">
    ${[["Priya S.", "Founder"], ["Daniel K.", "Designer"], ["Mei L.", "Marketer"]]
      .map(([n, r], i) => `<figure class="wb-card wb-quote" style="margin:0"><blockquote>“This saved us weeks. The result looks professional and was effortless to set up.”</blockquote><div class="wb-person"><img class="wb-avatar" src="${avatar(n[0], ["#e0e7ff", "#fce7f3", "#dcfce7"][i])}" alt="${n}"><div><p><strong>${n}</strong></p><p class="wb-muted wb-small">${r}</p></div></div></figure>`)
      .join("\n    ")}
  </div>
</div></section>`);

  add("team", "Team", "Social proof", "☺", () => `
<section class="wb-section"><div class="wb-container">
  <div class="wb-header"><h2>Meet the team</h2><p class="wb-lead" style="margin-inline:auto">The people behind the product.</p></div>
  <div class="wb-grid" data-cols="4">
    ${["Alex Doe", "Sam Lee", "Jo Park", "Ravi Rao"]
      .map((n, i) => `<div class="wb-team"><img class="wb-avatar" src="${avatar(n[0], ["#e0e7ff", "#fef3c7", "#dcfce7", "#fce7f3"][i])}" alt="${n}"><h3>${n}</h3><p class="wb-muted">Role title</p></div>`)
      .join("\n    ")}
  </div>
</div></section>`);

  add("pricing", "Pricing", "Conversion", "$", () => `
<section class="wb-section" id="pricing"><div class="wb-container">
  <div class="wb-header"><span class="wb-eyebrow">Pricing</span><h2>Simple, transparent pricing</h2></div>
  <div class="wb-grid" data-cols="3">
    <div class="wb-card wb-price"><h3>Starter</h3><div class="wb-price__amount">$0<small>/mo</small></div><ul><li>1 website</li><li>Community support</li><li>Basic sections</li></ul><a class="wb-btn wb-btn--outline wb-btn--block" href="#">Choose Starter</a></div>
    <div class="wb-card wb-price wb-price--featured"><span class="wb-badge">Most popular</span><h3>Pro</h3><div class="wb-price__amount">$19<small>/mo</small></div><ul><li>10 websites</li><li>Priority support</li><li>All sections</li><li>Custom themes</li></ul><a class="wb-btn wb-btn--block" href="#">Choose Pro</a></div>
    <div class="wb-card wb-price"><h3>Business</h3><div class="wb-price__amount">$49<small>/mo</small></div><ul><li>Unlimited websites</li><li>Dedicated support</li><li>Team access</li></ul><a class="wb-btn wb-btn--outline wb-btn--block" href="#">Choose Business</a></div>
  </div>
</div></section>`);

  add("cta", "Call to action", "Conversion", "➜", () => `
<section class="wb-section" data-bg="primary" data-align="center"><div class="wb-container">
  <h2>Ready to get started?</h2>
  <p class="wb-lead" style="margin-inline:auto">Join thousands of people building with us today.</p>
  <div class="wb-actions"><a class="wb-btn" href="#">Create your site</a></div>
</div></section>`);

  add("newsletter", "Newsletter", "Conversion", "✉", () => `
<section class="wb-section" data-bg="alt" data-align="center"><div class="wb-container">
  <h2>Stay in the loop</h2>
  <p class="wb-lead">Get product updates and tips straight to your inbox.</p>
  <form class="wb-inline-form" onsubmit="return false"><input type="email" placeholder="you@example.com" aria-label="Email"><a class="wb-btn" href="#">Subscribe</a></form>
</div></section>`);

  add("contact", "Contact form", "Conversion", "☎", () => `
<section class="wb-section" id="contact"><div class="wb-container wb-split">
  <div><span class="wb-eyebrow">Contact</span><h2>Let's talk</h2><p class="wb-lead">Questions, ideas or feedback? Send us a message and we'll reply within a day.</p><p class="wb-muted">hello@example.com<br>+1 (555) 000-0000</p></div>
  <form class="wb-card wb-form" action="#" method="post">
    <label>Name<input type="text" name="name" placeholder="Your name"></label>
    <label>Email<input type="email" name="email" placeholder="you@example.com"></label>
    <label>Message<textarea name="message" rows="4" placeholder="How can we help?"></textarea></label>
    <button class="wb-btn" type="submit">Send message</button>
  </form>
</div></section>`);

  add("faq", "FAQ", "Conversion", "?", () => `
<section class="wb-section" data-width="narrow"><div class="wb-container">
  <div class="wb-header"><h2>Frequently asked questions</h2></div>
  <div class="wb-faq">
    <details data-open="1"><summary>Can I use my own domain?</summary><p>Yes. Export your pages and host them on any domain you own.</p></details>
    <details><summary>Do I need to know how to code?</summary><p>No. Everything is edited visually, but you can always tweak the HTML.</p></details>
    <details><summary>Can I change the look of the whole site?</summary><p>Yes. Open the Theme tab to adjust colours, fonts and spacing in one place.</p></details>
  </div>
</div></section>`);

  add("footer", "Footer", "Footer", "▁", () => `
<footer class="wb-section wb-footer" data-bg="dark" data-pad="none"><div class="wb-container">
  <div class="wb-footer-grid">
    <div><a class="wb-nav__brand" href="index.html" style="color:inherit">Brand</a><p class="wb-muted" style="margin-top:.75rem">Short description of your company or project.</p></div>
    <div><h4>Product</h4><ul><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li><li><a href="#">Updates</a></li></ul></div>
    <div><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Careers</a></li><li><a href="#">Contact</a></li></ul></div>
    <div><h4>Legal</h4><ul><li><a href="#">Privacy</a></li><li><a href="#">Terms</a></li></ul></div>
  </div>
  <div class="wb-footer__bottom"><p>© 2026 Brand. All rights reserved.</p><p>Made with Website Builder</p></div>
</div></footer>`);

  add("footer-simple", "Footer · Simple", "Footer", "—", () => `
<footer class="wb-section" data-pad="sm" data-align="center"><div class="wb-container"><p class="wb-muted wb-small" style="margin:0">© 2026 Brand. All rights reserved.</p></div></footer>`);

  add("spacer", "Spacer", "Layout", "↕", () => `<div class="wb-section wb-spacer" data-pad="none"></div>`);
  add("divider", "Divider", "Layout", "―", () => `<section class="wb-section" data-pad="sm"><div class="wb-container"><hr class="wb-divider"></div></section>`);
  add("html", "Custom HTML", "Layout", "</>", () => `
<section class="wb-section" data-pad="sm"><div class="wb-container"><div class="wb-editable"><p>Custom block — use “Edit HTML” in the inspector to paste your own markup.</p></div></div></section>`);

  WB.components = C;
  WB.componentById = Object.fromEntries(C.map((c) => [c.id, c]));
})();

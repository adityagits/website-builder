/* Website Builder — theme behaviour (tiny, dependency-free).
   Powers: mobile nav toggle, tabs, pricing toggle, carousel arrows, multi-step form, countdown.
   Included in every exported page. Does nothing while editing in the builder. */
(function () {
  "use strict";
  var editing = function () { return document.body.classList.contains("wb-edit"); };

  document.addEventListener("click", function (e) {
    if (editing()) return;
    var t = e.target.closest("button, a");
    if (!t) return;

    if (t.hasAttribute("data-wb-nav-toggle")) {
      var nav = t.closest(".wb-nav"); nav.classList.toggle("is-open");
      t.setAttribute("aria-expanded", nav.classList.contains("is-open"));
      return;
    }
    var openNav = t.closest(".wb-nav.is-open");
    if (openNav && t.tagName === "A") openNav.classList.remove("is-open");

    var tab = t.closest(".wb-tabs__list button");
    if (tab) {
      var box = tab.closest(".wb-tabs"), i = Array.prototype.indexOf.call(tab.parentNode.children, tab);
      Array.prototype.forEach.call(tab.parentNode.children, function (b, k) { b.classList.toggle("is-active", k === i); b.setAttribute("aria-selected", k === i); });
      Array.prototype.forEach.call(box.querySelectorAll(".wb-tabs__panel"), function (p, k) { p.classList.toggle("is-active", k === i); });
      return;
    }
    var bill = t.closest(".wb-billing button");
    if (bill) {
      var wrap = bill.closest(".wb-pricing"); wrap.setAttribute("data-period", bill.getAttribute("data-period"));
      Array.prototype.forEach.call(bill.parentNode.children, function (b) { b.classList.toggle("is-active", b === bill); });
      return;
    }
    var car = t.closest("[data-wb-carousel]");
    if (car && t.hasAttribute("data-dir")) {
      var track = car.querySelector(".wb-carousel__track");
      track.scrollBy({ left: track.clientWidth * 0.8 * Number(t.getAttribute("data-dir")), behavior: "smooth" });
      return;
    }
    var step = t.closest("[data-wb-step]");
    if (step) {
      var form = t.closest(".wb-multistep"), steps = form.querySelectorAll(".wb-step"), dots = form.querySelectorAll(".wb-steps-dots i");
      var cur = Array.prototype.findIndex.call(steps, function (s) { return s.classList.contains("is-active"); });
      var next = Math.max(0, Math.min(steps.length - 1, cur + Number(t.getAttribute("data-wb-step"))));
      Array.prototype.forEach.call(steps, function (s, k) { s.classList.toggle("is-active", k === next); });
      Array.prototype.forEach.call(dots, function (d, k) { d.classList.toggle("is-done", k <= next); });
    }
  });

  function tick() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-wb-countdown]"), function (el) {
      var ms = Math.max(0, new Date(el.getAttribute("data-wb-countdown")) - Date.now()), s = Math.floor(ms / 1000);
      var v = { d: Math.floor(s / 86400), h: Math.floor(s / 3600) % 24, m: Math.floor(s / 60) % 60, s: s % 60 };
      Object.keys(v).forEach(function (k) { var n = el.querySelector("[data-u=" + k + "]"); if (n) n.textContent = String(v[k]).padStart(2, "0"); });
    });
  }
  tick(); setInterval(tick, 1000);
})();

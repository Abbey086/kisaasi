// assets/js/main.js

// Mobile menu
(function () {
  const btn = document.querySelector('[data-menu-btn]');
  const menu = document.querySelector('[data-menu]');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// FAQ accordion
(function () {
  const items = document.querySelectorAll('[data-faq-item]');
  items.forEach((item) => {
    const btn = item.querySelector('[data-faq-btn]');
    const panel = item.querySelector('[data-faq-panel]');
    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      const isOpen = panel.classList.contains('hidden') === false;

      // close all
      items.forEach((it) => {
        it.querySelector('[data-faq-panel]')?.classList.add('hidden');
        it.querySelector('[data-faq-btn]')?.setAttribute('aria-expanded', 'false');
      });

      // open current if it was closed
      if (!isOpen) {
        panel.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

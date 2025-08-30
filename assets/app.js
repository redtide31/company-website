// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const t = document.querySelector('[data-menu-toggle]');
  const p = document.querySelector('[data-menu-panel]');
  if (!t || !p) return;
  t.addEventListener('click', () => p.classList.toggle('mobile'));
});

import './style.css';

document.querySelectorAll<HTMLButtonElement>('.entry-head').forEach((btn) => {
  btn.addEventListener('click', () => {
    const entry = btn.closest('.entry');
    if (!entry) return;
    const open = entry.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
});

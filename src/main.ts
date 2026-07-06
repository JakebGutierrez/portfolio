import '@fontsource/instrument-sans/400.css';
import '@fontsource/instrument-sans/500.css';
import '@fontsource/instrument-sans/600.css';
import '@fontsource/ibm-plex-mono/400.css';
import './style.css';

document.querySelectorAll<HTMLButtonElement>('.entry-head').forEach((btn) => {
  btn.addEventListener('click', () => {
    const entry = btn.closest('.entry');
    if (!entry) return;
    const open = entry.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
});

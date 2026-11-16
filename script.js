const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Открыть меню');
  navigation.classList.remove('is-open');
}
menu.addEventListener('click', () => {
  const opened = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(opened));
  menu.setAttribute('aria-label', opened ? 'Закрыть меню' : 'Открыть меню');
  navigation.classList.toggle('is-open', opened);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
window.matchMedia('(min-width: 1000px)').addEventListener('change', closeMenu);

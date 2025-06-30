const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnFechar = document.getElementById('btn-fechar');

// Abre o menu
if (btnMenu) {
  btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block';
  });
}

// Fecha o menu ao clicar no botão fechar
if (btnFechar) {
  btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
  });
}

// Fecha ao clicar no overlay
if (overlay) {
  overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
  });
}

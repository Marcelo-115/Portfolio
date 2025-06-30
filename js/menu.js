// Obtém os elementos do menu mobile e overlay
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

// Abre o menu mobile ao clicar no botão de abrir
if (btnMenu && menu) {
    btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu');
    });
}

// Fecha o menu ao clicar em qualquer lugar do menu mobile
if (menu) {
    menu.addEventListener('click', (event) => {
        // Para evitar fechar o menu se clicar dentro do conteúdo do menu
        if (event.target.closest('nav') === null) {
            menu.classList.remove('abrir-menu');
        }
    });
}

// Fecha o menu ao clicar no overlay
if (overlay) {
    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });
}

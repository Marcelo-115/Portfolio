// Altera a classe do cabeçalho com base na posição da rolagem
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (!header) return; // segurança: só continua se encontrar o <header>

    // Aplica ou remove a classe "rolagem" se passou de 100px de rolagem
    header.classList.toggle("rolagem", window.scrollY > 100);
});

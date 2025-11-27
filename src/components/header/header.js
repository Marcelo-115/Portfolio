export function loadHeader() {
    fetch('/src/components/Header/header.html')
        .then(res => res.text())
        .then(html => {
            document.querySelector('header').innerHTML = html;
        });
}
export function loadHeader() {
    fetch('/src/components/header/header.html')
        .then(res => res.text())
        .then(html => {
            document.querySelector('header').innerHTML = html;
        });

}

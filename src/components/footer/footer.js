export function loadFooter() {
    fetch('/src/components/Footer/footer.html')
        .then(res => res.text())
        .then(html => {
            document.querySelector('footer').innerHTML = html;
        });
}
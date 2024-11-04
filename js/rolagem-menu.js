window.addEventListener("scroll", function(){
    let header = document.querySelector('#inicio')
    header.classList.toggle('rolagem',window.scrollY > 500)
})
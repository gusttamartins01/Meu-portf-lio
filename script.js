AOS.init();

// Navbar com efeito ao rolar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const form = document.getElementById('formContato');
const mensagem = document.getElementById('mensagem-enviada');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    mensagem.style.display = 'block';

    // Reset após 3 segundos
    setTimeout(() => {
        form.reset();
        mensagem.style.display = 'none';
    }, 3000);
});
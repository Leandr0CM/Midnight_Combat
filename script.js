

// 2. Remoção do Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000); // 1 segundo de loading falso para efeito dramático
});

// 3. Navbar Dinâmica ao Rolar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 4. Efeito Typewriter no Hero Section
const typeText = "Projetando máquinas. Destruindo limites.";
const typeElement = document.getElementById('typewriter-text');
let i = 0;

function typeWriter() {
    if (i < typeText.length) {
        typeElement.innerHTML += typeText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
// Inicia o typewriter um pouco depois da página carregar
setTimeout(typeWriter, 1500);

// 5. Scroll Reveal (Aparecer ao rolar a página)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Dispara na carga inicial

// 6. Efeito Tilt 3D estilo Vanilla (sem bibliotecas pesadas)
const tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // posição X dentro do card
        const y = e.clientY - rect.top;  // posição Y dentro do card
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max 10 graus
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
        card.style.transition = 'transform 0.5s ease';
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none'; // Remove transição suave durante o movimento para não bugar
    });
});

// 7. Sistema de Tabs (Cotas de Patrocínio)
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// 8. Botão Back to Top
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 9. Lógica do Carrossel da Frota
let slideIndex = 1;
showSlides(slideIndex);

// Função para os botões de avançar/voltar
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Função para clicar direto nos pontinhos
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    
    // Se passar do último, volta pro primeiro
    if (n > slides.length) { slideIndex = 1 }
    // Se voltar do primeiro, vai pro último
    if (n < 1) { slideIndex = slides.length }
    
    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }
    
    // Remove a classe 'active' de todos os pontinhos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Mostra o slide atual e ativa o pontinho correspondente
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].className += " active";
}
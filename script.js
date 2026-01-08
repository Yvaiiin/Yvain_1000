document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Gestion du Menu Mobile ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('navLinks');
    const navLinks = document.querySelectorAll('.nav-links a');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
        });
    });


    // --- 2. Animation au Scroll (Fade In Up) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Déclenche quand 10% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Une seule fois
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach(el => observer.observe(el));


    // --- 3. Parallaxe de la Boîte (Desktop uniquement) ---
    const box = document.getElementById('product-3d');
    
    document.addEventListener('mousemove', (e) => {
        if(window.innerWidth > 968 && box) {
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;
            
            // Applique une rotation subtile 3D
            box.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        }
    });

});
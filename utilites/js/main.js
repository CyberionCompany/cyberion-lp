document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DO MENU MOBILE (ROBUSTA) ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                document.body.classList.add('menu-open');
                mobileMenuBtn.innerHTML = '✕';
            } else {
                document.body.classList.remove('menu-open');
                mobileMenuBtn.innerHTML = '☰';
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    mobileMenuBtn.innerHTML = '☰';
                }
            });
        });
    }

    // --- LÓGICA DE ANIMAÇÃO DE SCROLL (FLUIDA) ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: para de observar o elemento depois que ele já apareceu
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // O elemento é revelado quando 10% dele está visível
    });
    
    // Aplica a classe .reveal a todas as seções para animação automática
    document.querySelectorAll('main > section, footer').forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });


   // --- LÓGICA DO CARROSSEL COM CONTROLES (CORRIGIDO) ---
    const sliderContainer = document.querySelector('.testimonials-slider');

    if (sliderContainer) {
        try {
            // Ícones SVG para as setas de navegação
            const navIcons = [
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>`
            ];

            var slider = tns({
                container: sliderContainer,
                items: 1, // Exibe sempre 1 item por vez
                slideBy: 'page',
                mouseDrag: true,
                autoplay: false,
                autoplayButtonOutput: false,
                
                // Habilita as setas de navegação
                controls: true, 
                // Usa os novos ícones SVG
                controlsText: navIcons, 
                
                // Habilita os pontos de navegação
                nav: true
                // Bloco 'responsive' foi removido para corrigir o bug de múltiplos itens
            });
        } catch (error) {
            console.error("Erro ao inicializar o Tiny Slider:", error);
        }
    }

});
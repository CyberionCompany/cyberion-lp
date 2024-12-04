particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ['#D90BCB', '#C004D9', '#9305F2', '#3204D9'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { 
            enable: true, 
            distance: 150, 
            color: '#ffffff', 
            opacity: 0.4, 
            width: 1 
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    alert(`Dados enviados:\nNome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}`);
    
    this.reset();
});
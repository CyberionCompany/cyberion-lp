function createStars() {
    const container = document.getElementById('starContainer');
    const starCount = window.innerWidth < 480 ? 50 : 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        star.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(star);
    }
}

createStars();
window.addEventListener('resize', () => {
    const container = document.getElementById('starContainer');
    container.innerHTML = '';
    createStars();
});

document.getElementById('cosmicForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('.cosmic-input');
    const isValid = [...inputs].every(input => input.value.trim() !== '');
    
    if (isValid) {
        alert('Conexão Cósmica Estabelecida!');
    } else {
        alert('Preencha todos os portais de comunicação!');
    }
});
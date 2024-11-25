const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});
// Wait till page fully loads
document.addEventListener('DOMContentLoaded', () => {
    // Fade-in effect for intro and coming-soon sections
    const intro = document.querySelector('.intro-message');
    const comingSoon = document.querySelector('.coming-soon');

    // Add fade-in effect after a short delay
    setTimeout(() => {
        intro.style.opacity = '1';
        intro.style.transform = 'translateY(0)';
    }, 300);

    setTimeout(() => {
        comingSoon.style.opacity = '1';
        comingSoon.style.transform = 'translateY(0)';
    }, 600);
});

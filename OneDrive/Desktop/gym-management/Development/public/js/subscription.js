// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Fade-in effect for the intro message
    const intro = document.querySelector('.intro-message');
    intro.style.opacity = '1';
    intro.style.transform = 'translateY(0)';

    // Fade-in for subscription plans
    const plans = document.querySelectorAll('.subscription');
    plans.forEach((plan, index) => {
        setTimeout(() => {
            plan.style.opacity = '1';
            plan.style.transform = 'translateY(0)';
        }, 400 * (index + 1)); // staggered fade-in
    });

    // Button click animation
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 300);
        });
    });
});

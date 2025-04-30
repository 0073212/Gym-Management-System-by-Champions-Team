// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Smooth Scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button Click Animation
    const buttons = document.querySelectorAll('.cta a');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });

    // Page Load Animation
    const headerContent = document.querySelector('.header-content');
    headerContent.style.opacity = 0;
    setTimeout(() => {
        headerContent.style.transition = "opacity 1s ease-in-out";
        headerContent.style.opacity = 1;
    }, 200);

});


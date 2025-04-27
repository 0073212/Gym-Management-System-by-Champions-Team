document.addEventListener('DOMContentLoaded', () => {
    // Daily Motivational Quotes
    const quotes = [
        "Your Body is a Reflection of How Hard You Work. Make it Legendary.",
        "Push yourself because no one else is going to do it for you.",
        "Success starts with self-discipline.",
        "Sweat today, shine tomorrow!",
        "You don't find willpower, you create it.",
        "Stay strong. Stay consistent. Results will come.",
        "Pain is temporary, pride is forever."
    ];

    const today = new Date();
    const dayIndex = today.getDate() % quotes.length; // Based on date of month

    const quoteElement = document.querySelector('#motivational-quote p');
    quoteElement.textContent = quotes[dayIndex];

    // Smooth Scroll to Subscription Section on Join Now Button Click
    const joinNowBtn = document.querySelector('.intro-content a');

    joinNowBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const subscriptionSection = document.getElementById('motivational-quote');
        subscriptionSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Fade-in Success Stories on Scroll
    const successSection = document.querySelector('.success-stories');

    window.addEventListener('scroll', () => {
        const sectionPosition = successSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            successSection.style.opacity = '1';
            successSection.style.transform = 'translateY(0)';
            successSection.style.transition = 'all 1s ease-out';
        }
    });

    successSection.style.opacity = '0';
    successSection.style.transform = 'translateY(100px)';
});


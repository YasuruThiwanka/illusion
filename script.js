document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"], a.cta-button[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Optional: Add a subtle scroll effect to the header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#1a1a1a';
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.6)';
        } else {
            header.style.backgroundColor = '#1f1f1f';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        }
    });
});

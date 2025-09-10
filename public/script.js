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

    // Add a scroll effect to the header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Form Handling ---
    const handleFormSubmit = async (form, url) => {
        const statusDiv = form.nextElementSibling;
        statusDiv.className = 'form-status'; // Reset classes
        statusDiv.textContent = '';
        statusDiv.style.display = 'none';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                statusDiv.textContent = result.message;
                statusDiv.classList.add('success');
                form.reset();
            } else {
                throw new Error(result.message || 'An unknown error occurred.');
            }
        } catch (error) {
            statusDiv.textContent = error.message || 'There was an error submitting your form. Please try again later.';
            statusDiv.classList.add('error');
        } finally {
            statusDiv.style.display = 'block';
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 5000); // Hide after 5 seconds
        }
    };

    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit(contactForm, 'http://localhost:3000/contact');
    });

    const donationForm = document.querySelector('#donation-form');
    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit(donationForm, 'http://localhost:3000/donate');
    });
});

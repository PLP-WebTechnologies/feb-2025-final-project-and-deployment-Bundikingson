// Image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider if it exists on the page
    const slider = document.querySelector('.slider');
    if (slider) {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        // Button event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Auto slide change every 5 seconds
        setInterval(nextSlide, 5000);

        // Show first slide initially
        showSlide(currentSlide);
    }

    // Form validation for contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (name === '' || email === '' || subject === '' || message === '') {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.className = 'error';
                formMessage.style.display = 'block';
                return;
            }
            
            if (!validateEmail(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.className = 'error';
                formMessage.style.display = 'block';
                return;
            }
            
            // Simulate form submission (in a real app, you would send to a server)
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.className = 'success';
            formMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Nav scroll effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.08)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Astondoa banner hide on scroll past hero
// Astondoa banner hide on scroll past hero
// Using a fixed threshold provides the most consistent user experience
const astondoaBanner = document.getElementById('astondoa-banner');

window.addEventListener('scroll', () => {
    if (astondoaBanner) {
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Hide banner when scrolled down 600px (clearing the main hero visual)
        if (scrollPosition > 600) {
            astondoaBanner.style.opacity = '0';
            astondoaBanner.style.transform = 'translateY(-200%)';
            astondoaBanner.style.pointerEvents = 'none';
        } else {
            astondoaBanner.style.opacity = '1';
            astondoaBanner.style.transform = 'translateY(0)';
            astondoaBanner.style.pointerEvents = 'auto';
        }
    }
});

// Testimonial Carousel
let currentSlide = 0;

function showTestimonial(n) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');

    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeTestimonial(n) {
    currentSlide += n;
    showTestimonial(currentSlide);
}

function currentTestimonial(n) {
    currentSlide = n;
    showTestimonial(currentSlide);
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
    changeTestimonial(1);
}, 5000);

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

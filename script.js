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
const astondoaBanner = document.getElementById('astondoa-banner');

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');

    if (astondoaBanner && hero) {
        const scrollPosition = window.pageYOffset;
        const heroBottom = hero.offsetTop + hero.offsetHeight;

        // Hide banner only when scrolling past the hero section (minus a small buffer)
        // This ensures it stays visible while viewing the hero content
        if (scrollPosition > (heroBottom - 100)) {
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

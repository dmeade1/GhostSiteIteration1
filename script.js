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
// Astondoa banner hide on scroll past hero using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
    const astondoaBanner = document.getElementById('astondoa-banner');
    const hero = document.querySelector('.hero');

    if (astondoaBanner && hero) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If hero is NOT intersecting (out of view), hide banner
                // If hero IS intersecting (in view), show banner
                if (!entry.isIntersecting) {
                    astondoaBanner.style.opacity = '0';
                    astondoaBanner.style.transform = 'translateY(-200%)';
                    astondoaBanner.style.pointerEvents = 'none';
                } else {
                    astondoaBanner.style.opacity = '1';
                    astondoaBanner.style.transform = 'translateY(0)';
                    astondoaBanner.style.pointerEvents = 'auto';
                }
            });
        }, {
            // Trigger when even 1 pixel of the hero is visible?
            // Actually we want to detect when it LEAVES.
            // threshold 0 means the callback is run when visibility crosses 0% (enters or leaves completely)
            threshold: 0
        });

        observer.observe(hero);
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

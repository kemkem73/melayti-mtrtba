// ===========================
// SMOOTH SCROLL BEHAVIOR
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// WHATSAPP MESSAGE GENERATION
// ===========================

// Function to generate WhatsApp message with product details
function generateWhatsAppMessage(productName, price) {
    const message = `مرحباً، أريد طلب ${productName} بسعر ${price} ج.م`;
    return encodeURIComponent(message);
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply observer to cards
document.querySelectorAll('.problem-card, .feature-card, .step, .audience-card, .faq-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===========================
// OFFER CARD HIGHLIGHTING
// ===========================

// Highlight the featured offer card on page load
window.addEventListener('load', function() {
    const featuredCard = document.querySelector('.offer-card.featured');
    if (featuredCard) {
        featuredCard.style.animation = 'pulse 2s infinite';
    }
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 4px 16px rgba(231, 76, 60, 0.15);
        }
        50% {
            box-shadow: 0 4px 16px rgba(231, 76, 60, 0.3);
        }
    }
`;
document.head.appendChild(style);

// ===========================
// MOBILE MENU HANDLING
// ===========================

// Handle header responsiveness
window.addEventListener('resize', function() {
    const header = document.querySelector('.header');
    if (window.innerWidth < 768) {
        header.style.padding = '12px 0';
    } else {
        header.style.padding = '16px 0';
    }
});

// ===========================
// FORM SUBMISSION HANDLING
// ===========================

// If there are any forms, prevent default submission and open WhatsApp
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data if needed
        const formData = new FormData(this);
        let message = 'مرحباً، أريد معرفة المزيد عن المنتج';
        
        // Open WhatsApp with message
        window.open('https://wa.me/201207327331?text=' + encodeURIComponent(message), '_blank');
    });
});

// ===========================
// BUTTON CLICK TRACKING
// ===========================

// Add click event listeners to all CTA buttons
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Log button click (can be extended for analytics)
        console.log('CTA Button clicked:', this.textContent);
    });
});

// ===========================
// DYNAMIC YEAR UPDATE
// ===========================

// Update copyright year dynamically
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.textContent = `© ${currentYear} ملايتي مترتبة. جميع الحقوق محفوظة.`;
    }
});

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// ACCESSIBILITY ENHANCEMENTS
// ===========================

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Close any open modals or overlays if they exist
        console.log('Escape key pressed');
    }
});

// ===========================
// ANALYTICS TRACKING (OPTIONAL)
// ===========================

// Track page view
console.log('Landing page loaded successfully');

// Track user interactions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary')) {
        console.log('User clicked CTA button:', e.target.textContent);
    }
});

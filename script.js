// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// FADE-IN ANIMATION FOR NEWS CARDS
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".news-card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 150); // stagger effect
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('navLinks');
    
    if (navLinks && !nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Matches Tab Navigation
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Player Search Filter
function filterPlayers() {
    const searchInput = document.getElementById('playerSearch');
    if (!searchInput) return;
    
    const searchValue = searchInput.value.toLowerCase();
    const playerCards = document.querySelectorAll('.player-card');
    
    playerCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        const position = card.getAttribute('data-position').toLowerCase();
        
        if (name.includes(searchValue) || position.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Contact Form Submission
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Display success message
    alert(`Thank you, ${name}! Your message has been received.\n\nSubject: ${subject}\n\nWe'll get back to you at ${email} soon.`);
    
    // Reset form
    event.target.reset();
    
    // In a real application, you would send this data to a server
    console.log('Form Data:', {
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}

// Smooth scroll to top when navigating
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// Add animation on scroll (optional enhancement)
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate elements on scroll
function handleScrollAnimation() {
    const cards = document.querySelectorAll('.news-card, .player-card, .match-card, .about-card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.news-card, .player-card, .match-card, .about-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
});

// Form validation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '' && this.hasAttribute('required')) {
                    this.style.borderColor = '#ff6b6b';
                } else {
                    this.style.borderColor = '#ddd';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#1e3c72';
            });
        });
    }
});
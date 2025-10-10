// Simple JavaScript for nav highlighting and smooth scrolling
// Run when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Highlight active nav link (default: Home)
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.hash || '#home'; // Or set based on URL

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Set Home as active by default
    document.getElementById('home-link').classList.add('active');

    // Add smooth scrolling for any anchor links (e.g., if you add IDs to sections later)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump
            const targetId = this.getAttribute('href').substring(1); // Remove #
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.background = '#ffffff';
        document.querySelector('.navbar').style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        document.querySelector('.navbar').style.background = 'transparent';
        document.querySelector('.navbar').style.boxShadow = 'none';
    }
});
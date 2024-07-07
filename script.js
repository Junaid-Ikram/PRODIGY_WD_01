document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const links = navbar.querySelectorAll('a');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section in navbar
    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        // Change navbar background color on scroll
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const links = navbar.querySelectorAll('a');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section in navbar
    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        // Change navbar background color on scroll
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#002244';
        } else {
            navbar.style.backgroundColor = '#003366';
        }
    });
});

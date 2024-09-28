
        const menuIcon = document.getElementById('menu-icon');
        const navLinks = document.querySelector('.nav-links');
        const contactBtn = document.getElementById('contactBtn');
        const contactSection = document.getElementById('contact');

        // Menu Toggle
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth Scroll to Contact Section
        contactBtn.addEventListener('click', function(event) {
            event.preventDefault();
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });


        <script src="script.js"></script>
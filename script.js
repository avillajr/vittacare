document.addEventListener('DOMContentLoaded', function () {

    // Initialize AOS Animation
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const header = document.querySelector('header');

    mobileToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            header.style.padding = '0'; // Ensure consistent height if we were changing it
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
        }
    });

    // Smooth Scroll for Anchor Links (if CSS scroll-behavior: smooth isn't supported enough or for more control)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Account for fixed header
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form Handling (WhatsApp Redirect)
    const whatsappNumber = "5511961778778"; // Defined as requested

    // 1. Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('contactName').value;
            const phone = document.getElementById('contactPhone').value;
            const service = document.getElementById('contactService').value;
            const message = document.getElementById('contactMessage').value;

            const text = `*Nova Solicitação de Orçamento*%0A%0A*Nome:* ${name}%0A*Telefone:* ${phone}%0A*Serviço:* ${service}%0A*Mensagem:* ${message}`;

            window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
        });
    }

    // 2. Recruitment Form
    const recruitForm = document.getElementById('recruitForm');
    if (recruitForm) {
        recruitForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('recruitName').value;
            const phone = document.getElementById('recruitPhone').value;
            const role = document.getElementById('recruitRole').value;
            const exp = document.getElementById('recruitExp').value;

            const text = `*Candidatura à Vaga*%0A%0A*Nome:* ${name}%0A*Telefone:* ${phone}%0A*Cargo:* ${role}%0A*Experiência:* ${exp}`;

            window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
        });
    }

});

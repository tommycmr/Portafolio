const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Alternar la clase para mostrar/ocultar
        });

        // Agregar un evento a cada enlace para cerrar el menú al hacer clic
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active'); // Cerrar el menú
            });
        });
        
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav ul li a');

    const highlightActiveLink = () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80; // Ajuste en fonction de la hauteur du header
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightActiveLink);
});


document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-menu').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });
});


$(document).ready(function () {
    // Initialisation de Turn.js après le chargement des images
    $(window).on("load", function () {
        $("#book").turn({
            width: 1200,          // Largeur totale (double page)
            height: 600,          // Hauteur du livre
            display: 'double',    // Mode "livre ouvert"
            autoCenter: true,     // Centre automatiquement
            duration: 1000,       // Animation fluide
            gradients: true,
            elevation: 50,
            when: {
                start: function (event, pageObject) {
                    console.log("Page tournée :", pageObject.page);
                },
                turned: function (event, pageObject) {
                    console.log("Page actuelle :", pageObject);
                }
            }
        });

        // Réinitialiser l'affichage pour corriger les bugs
        $("#book").turn("resize");
        $("#book").turn("display", "double");
    });

    // Ajout d'une page blanche uniquement si nécessaire
    $("#book").turn("addPage", $("<div class='page turn-page'></div>"), 1);
});

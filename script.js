// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Open External Links in a New Tab
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener("click", function(event) {
        window.open(this.href, '_blank');
    });
});

// Highlight Active Navigation Link
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    document.querySelectorAll('section').forEach(section => {
        let sectionTop = section.offsetTop - 50;
        let sectionHeight = section.clientHeight;
        let sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

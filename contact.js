document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    const links = document.querySelectorAll(".navbar nav a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Fade-in effect on scroll
    const fadeElements = document.querySelectorAll(".fade-in");
    function checkFadeIn() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn(); // Run on page load
});
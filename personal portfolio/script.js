// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Animate Progress Bars on Scroll
const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress-bar span");

window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });
    }
});
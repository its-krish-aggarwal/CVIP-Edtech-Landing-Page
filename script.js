document.addEventListener("DOMContentLoaded", () => {
    const exploreButton = document.querySelector(".explore-button");
    const enrollButtons = document.querySelectorAll(".enroll-button");
    const features = document.querySelectorAll(".feature");
    const navLinks = document.querySelectorAll(".nav-links a");

    exploreButton.addEventListener("click", (event) => {
        event.preventDefault();
        const coursesSection = document.querySelector("#courses");
        coursesSection.scrollIntoView({ behavior: "smooth" });
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

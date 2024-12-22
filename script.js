// JavaScript for Portfolio Website

// Show a loading spinner while the page is loading
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.createElement("div");
    loader.id = "page-loader";
    loader.style.position = "fixed";
    loader.style.top = 0;
    loader.style.left = 0;
    loader.style.width = "100%";
    loader.style.height = "100%";
    loader.style.background = "rgba(0, 0, 0, 0.8)";
    loader.style.display = "flex";
    loader.style.justifyContent = "center";
    loader.style.alignItems = "center";
    loader.style.zIndex = 9999;

    const spinner = document.createElement("div");
    spinner.className = "spinner-border text-light";
    spinner.style.width = "4rem";
    spinner.style.height = "4rem";
    loader.appendChild(spinner);

    document.body.appendChild(loader);

    // Remove loader after the page has fully loaded
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = 0;
            setTimeout(() => loader.remove(), 500);
        }, 1000);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for the navbar
                behavior: "smooth"
            });
        }
    });
});

// Contact form validation
const contactForm = document.querySelector("form");
if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Message sent successfully!");
            contactForm.reset();
        }
    });
}

// Fade-in animation for elements on scroll
const faders = document.querySelectorAll(".fade-in");
const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        }
    });
}, options);

faders.forEach(fader => appearOnScroll.observe(fader));

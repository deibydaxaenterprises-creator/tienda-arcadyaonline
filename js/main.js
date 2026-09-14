document.documentElement.classList.add("motion-ready");

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (toggle && links) {
        toggle.addEventListener("click", () => links.classList.toggle("open"));
        links.querySelectorAll("a").forEach(a =>
            a.addEventListener("click", () => links.classList.remove("open"))
        );
    }

    const revealItems = document.querySelectorAll(
        ".product-card, .category-card, .info-box, .product-gallery, .product-detail-info"
    );

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach(item => item.classList.add("is-visible"));
        return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealItems.forEach(item => revealObserver.observe(item));
});

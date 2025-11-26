document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".nav-wrapper");
    const toggle = document.querySelector(".nav-toggle");

    if (!wrapper || !toggle) return;

    toggle.addEventListener("click", () => {
        wrapper.classList.toggle("nav-open");
    });
});

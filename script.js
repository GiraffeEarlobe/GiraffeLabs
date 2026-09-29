const footerYear = document.querySelector("footer p");

if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()} GE • GiraffeLabs`;
}

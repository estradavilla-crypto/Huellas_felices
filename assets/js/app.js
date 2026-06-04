let btnToTop = document.getElementById("btnTop");

btnToTop.addEventListener ("click", () => {
    window.scrollTo({top: 0});
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        btnToTop.classList.remove("d-none");
    } else {
        btnToTop.classList.add  ("d-none");
    }
});
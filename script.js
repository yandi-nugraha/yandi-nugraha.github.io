// Membuat efek Parallax
const parallaxBg = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    parallaxBg.style.transform = `translateY(${offset * 0.5}px)`;
});

// Burger menu untuk tampilan mobile
function toggleMenu() {
    var navList = document.getElementById("navList");
    navList.classList.toggle("show");
}
window.addEventListener("scroll", function () {
    const topbar = document.querySelector(".topbar")
    topbar.classList.toggle("scrolled", window.scrollY > 10)
})

AOS.init({
    duration: 1000,
    once: true
})

const toggle = document.getElementById('darkModeToggle')
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    const isDark = document.body.classList.contains('dark')
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light')
    showToast(isDark ? '🌙 Dark Mode Aktif' : '☀️ Light Mode Aktif')
})

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark')
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section-2, .section-3')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            } else {
                entry.target.classList.remove('visible')
            }
        })
    }, {
        threshold: 0.3
    })

    sections.forEach((section) => observer.observe(section))
})

function toggleMenu() {
    const menu = document.querySelector('.topbar .menu')
    menu.classList.toggle('show')
}


function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.style.position = "fixed";
        toast.style.top = "20px";
        toast.style.right = "20px";
        toast.style.backgroundColor = "#333";
        toast.style.color = "#fff";
        toast.style.padding = "10px 20px";
        toast.style.borderRadius = "8px";
        toast.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
        toast.style.zIndex = "9999";
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.3s ease";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";

    setTimeout(() => {
        toast.style.opacity = "0";
    }, 1500);
}


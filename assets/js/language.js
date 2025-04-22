const id = {
    "title": "Portofolio",
    "nav_about": "Tentang Saya",
    "nav_portfolio": "Portofolio",
    "nav_contact": "Kontak",
    "toggle_dark_mode": "Ubah Mode Gelap",
    "p1": "Halo! Nama saya Nur Alamsyah, dan saya adalah seorang Junior Programmer yang antusias dan memiliki minat kuat dalam pengembangan web dan mobile.",
    "p2": "🌐 HTML, CSS, dan JavaScript, termasuk penggunaan dasar jQuery untuk membuat halaman web interaktif.",
    "p3": "💻 Kemampuan menengah dalam PHP dan Kotlin, yang memungkinkan saya membangun layanan backend dan aplikasi Android.",
    "p4": "🗃️ Pemahaman yang kuat tentang SQL dan pengalaman menggunakan database MySQL.",
    "p5": "Saya selalu bersemangat untuk mempelajari teknologi baru, membangun proyek yang bermanfaat, dan bekerja sama dalam tim pengembangan perangkat lunak. Fokus saya adalah menulis kode yang bersih, efisien, dan mudah dirawat.",
    "project1_title": "Proyek 1",
    "project1_desc": "Sistem Informasi Manajemen Perusahaan",
    "project1_link": "Lihat Proyek",
    "project2_title": "Proyek 2",
    "project2_desc": "Sistem Informasi Satuan Kerja Perangkat Daerah",
    "project2_link": "Lihat Proyek",
    "contact_title": "Kontak Saya",
    "contact_subtitle": "Silakan hubungi saya melalui salah satu platform berikut:",
    "contact_email": "Email",
    "contact_whatsapp": "WhatsApp",
    "contact_instagram": "Instagram",
    "contact_linkedin": "LinkedIn",
    "footer": "© 2025 Nur Alamsyah. Hak cipta dilindungi."
}

const en = {
    "title": "Portfolio",
    "nav_about": "About Me",
    "nav_portfolio": "Portfolio",
    "nav_contact": "Contact",
    "toggle_dark_mode": "Toggle Dark Mode",
    "p1": "Hello! My name is Nur Alamsyah, and I’m a passionate Junior Programmer with a strong interest in web and mobile development.",
    "p2": "🌐 HTML, CSS, and JavaScript, including basic use of jQuery for interactive web pages.",
    "p3": "💻 Intermediate skills in PHP and Kotlin, allowing me to build backend services and Android apps.",
    "p4": "🗃️ Strong understanding of SQL and experience using MySQL databases.",
    "p5": "I’m always excited to learn new technologies, build meaningful projects, and collaborate in software development teams. My focus is writing clean, efficient, and maintainable code.",
    "project1_title": "Project 1",
    "project1_desc": "Company Management Information System",
    "project1_link": "View Project",
    "project2_title": "Project 2",
    "project2_desc": "Regional Work Unit Information System",
    "project2_link": "View Project",
    "contact_title": "Contact Me",
    "contact_subtitle": "Please reach out to me via one of the following platforms:",
    "contact_email": "Email",
    "contact_whatsapp": "WhatsApp",
    "contact_instagram": "Instagram",
    "contact_linkedin": "LinkedIn",
    "footer": "© 2025 Nur Alamsyah. All rights reserved."
}

function loadData(language) {
    const langData = language === 'id' ? id : en
    document.getElementById('titles').textContent = langData.title
    document.getElementById('title').textContent = langData.title
    document.getElementById('p1').textContent = langData.p1
    document.getElementById('p2').textContent = langData.p2
    document.getElementById('p3').textContent = langData.p3
    document.getElementById('p4').textContent = langData.p4
    document.getElementById('p5').textContent = langData.p5
    document.getElementById('nav_about').textContent = langData.nav_about
    document.getElementById('nav_portfolio').textContent = langData.nav_portfolio
    document.getElementById('nav_contact').textContent = langData.nav_contact
    document.getElementById('project1_title').textContent = langData.project1_title
    document.getElementById('project1_desc').textContent = langData.project1_desc
    document.getElementById('project1_link').textContent = langData.project1_link
    document.getElementById('project2_title').textContent = langData.project2_title
    document.getElementById('project2_desc').textContent = langData.project2_desc
    document.getElementById('project2_link').textContent = langData.project2_link
    document.getElementById('contact_title').textContent = langData.contact_title
    document.getElementById('contact_subtitle').textContent = langData.contact_subtitle
    document.getElementById('contact_email').textContent = langData.contact_email
    document.getElementById('contact_whatsapp').textContent = langData.contact_whatsapp
    document.getElementById('contact_instagram').textContent = langData.contact_instagram
    document.getElementById('contact_linkedin').textContent = langData.contact_linkedin
    document.getElementById('footer').textContent = langData.footer
}

function setLanguageInLocalStorage(language) {
    localStorage.setItem('language', language)
}

function loadLanguageFromLocalStorage() {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
        loadData(savedLanguage)
    } else {
        loadData('id')
    }
}

loadLanguageFromLocalStorage()

document.addEventListener('click', event => {
    if (event.target.id === 'langId' || event.target.id === 'langEn') {
        const bahasa = event.target.id.replace('lang', '').toLowerCase()
        setLanguageInLocalStorage(bahasa)
        location.reload()
    }
})


        tailwind.config = {
            theme: {
                extend: {
                    // This makes "Inter" your default font everywhere
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'], 
                    },
                    // Define your exact custom brand colors here
                    colors: {
                        brand: {
                            green: '#16a34a', // You can change this hex code to your exact logo green
                            blue: '#172554',  // Your exact logo dark blue
                            light: '#f8fafc',
                            dark: '#0f172a'
                        }
                    }
                }
                
            }
        }

// 1. Translation Dictionary
const translations = {
    en: {
        loc: "Dar es Salaam, Tanzania",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Our Services",
        navGallery: "Gallery",
        navVolunteer: "Volunteer Hub",
        navJournal: "Journal & Publicity",
        navBlog: "Blog",
        navNews: "News & Updates",
        navBook: "Book Consultation"
    },
    de: {
        loc: "Dar es Salaam, Tansania",
        navHome: "Startseite",
        navAbout: "Über Uns",
        navServices: "Unsere Dienstleistungen",
        navGallery: "Galerie",
        navVolunteer: "Freiwilligenzentrum",
        navJournal: "Journal & Öffentlichkeit",
        navBlog: "Blog",
        navNews: "Neuigkeiten & Updates",
        navBook: "Beratung Buchen"
    },
    fr: {
        loc: "Dar es Salaam, Tanzanie",
        navHome: "Accueil",
        navAbout: "À Propos",
        navServices: "Nos Services",
        navGallery: "Galerie",
        navVolunteer: "Centre de Bénévolat",
        navJournal: "Journal et Publicité",
        navBlog: "Blog",
        navNews: "Actualités",
        navBook: "Réserver"
    },
    zh: {
        loc: "坦桑尼亚达累斯萨拉姆",
        navHome: "首页",
        navAbout: "关于我们",
        navServices: "我们的服务",
        navGallery: "画廊",
        navVolunteer: "志愿者中心",
        navJournal: "期刊与宣传",
        navBlog: "博客",
        navNews: "新闻与更新",
        navBook: "预约咨询"
    },
    ar: {
        loc: "دار السلام، تنزانيا",
        navHome: "الرئيسية",
        navAbout: "معلومات عنا",
        navServices: "خدماتنا",
        navGallery: "معرض الصور",
        navVolunteer: "مركز التطوع",
        navJournal: "مجلة ودعاية",
        navBlog: "مدونة",
        navNews: "الأخبار والتحديثات",
        navBook: "حجز استشارة"
    }
};

// 2. High-Quality Flag Image URLs
const languageConfig = {
    en: { name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    de: { name: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
    fr: { name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    zh: { name: '中文', flag: 'https://flagcdn.com/w40/cn.png' },
    ar: { name: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' }
};

// 3. The Perfected Header HTML
const headerHTML = `
    <header class="fixed w-full top-0 z-50 shadow-lg bg-white">
        
        <div class="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-2 md:py-3">
            <div class="max-w-[95rem] mx-auto px-6 lg:px-8 flex flex-row justify-between items-center w-full">
                
                <div class="hidden lg:flex w-1/4 text-xs font-medium tracking-wider text-blue-200 uppercase">
                    Your Global Growth Partner
                </div>

                <div class="flex flex-row items-center gap-4 md:gap-10 text-[13px] font-medium w-auto lg:w-2/4 lg:justify-center">
                    <a href="https://maps.google.com/?q=Dar+es+Salaam,+Tanzania" target="_blank" class="hidden md:flex items-center gap-2 hover:text-green-400 transition-colors group">
                        <i class="fa-solid fa-location-dot text-green-400 text-base group-hover:scale-110 transition-transform"></i>
                        <span data-i18n="loc">Dar es Salaam, Tanzania</span>
                    </a>
                    
                    <a href="https://wa.me/255752761705" target="_blank" class="flex items-center gap-2 hover:text-green-400 transition-colors group">
                        <i class="fa-brands fa-whatsapp text-green-400 text-[18px] group-hover:scale-110 transition-transform"></i>
                        <span>+255752761705</span>
                    </a>
                    
                    <a href="mailto:info@reachglobal.co.tz" class="hidden md:flex items-center gap-2 hover:text-green-400 transition-colors group">
                        <i class="fa-solid fa-envelope text-green-400 text-base group-hover:scale-110 transition-transform"></i>
                        <span>info@reachglobal.co.tz</span>
                    </a>
                </div>
                
                <div class="flex justify-end lg:w-1/4 relative">
                    <button id="lang-btn" class="bg-blue-800/60 hover:bg-blue-800 rounded px-4 py-1.5 md:px-5 md:py-2 flex items-center gap-2 border border-blue-700/50 transition-all shadow-sm focus:outline-none">
                        <img id="current-flag-img" src="https://flagcdn.com/w40/gb.png" alt="English" class="w-5 h-3.5 md:h-4 object-cover rounded-sm shadow-sm">
                        <span id="current-lang-text" class="font-semibold text-xs md:text-sm tracking-wide">English</span>
                        <i class="fa-solid fa-caret-down text-white text-[10px] md:text-xs ml-1 transition-transform duration-200" id="lang-arrow"></i>
                    </button>
                    
                    <div id="lang-menu" class="hidden absolute top-full right-0 mt-2 w-44 bg-white rounded-md shadow-2xl border border-gray-100 overflow-hidden z-50">
                        <div class="lang-option flex items-center gap-4 px-5 py-3 hover:bg-green-50 cursor-pointer text-blue-950 font-bold text-sm border-b border-gray-50" data-lang="en">
                            <img src="https://flagcdn.com/w40/gb.png" class="w-6 h-4 object-cover rounded-sm shadow-sm"> English
                        </div>
                        <div class="lang-option flex items-center gap-4 px-5 py-3 hover:bg-green-50 cursor-pointer text-blue-950 font-bold text-sm border-b border-gray-50" data-lang="de">
                            <img src="https://flagcdn.com/w40/de.png" class="w-6 h-4 object-cover rounded-sm shadow-sm"> Deutsch
                        </div>
                        <div class="lang-option flex items-center gap-4 px-5 py-3 hover:bg-green-50 cursor-pointer text-blue-950 font-bold text-sm border-b border-gray-50" data-lang="fr">
                            <img src="https://flagcdn.com/w40/fr.png" class="w-6 h-4 object-cover rounded-sm shadow-sm"> Français
                        </div>
                        <div class="lang-option flex items-center gap-4 px-5 py-3 hover:bg-green-50 cursor-pointer text-blue-950 font-bold text-sm border-b border-gray-50" data-lang="zh">
                            <img src="https://flagcdn.com/w40/cn.png" class="w-6 h-4 object-cover rounded-sm shadow-sm"> 中文
                        </div>
                        <div class="lang-option flex items-center gap-4 px-5 py-3 hover:bg-green-50 cursor-pointer text-blue-950 font-bold text-sm" data-lang="ar">
                            <img src="https://flagcdn.com/w40/sa.png" class="w-6 h-4 object-cover rounded-sm shadow-sm"> العربية
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="border-b-4 border-green-600 bg-white">
            <div class="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-flex h-24 relative w-full gap-2">
                    
                 <div class="flex items-center justify-start pl-0.5 z-10">
                    <a href="index.html" class="flex items-center gap-[10px] cursor-pointer group">
                        <div class="flex flex-col text-left">
                            <span class="font-extrabold text-lg md:text-2xl tracking-tight text-blue-950 leading-none">Reach Global</span>
                            <span class="text-green-600 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Consultant Company</span>
                        </div>
                    </a>
                </div>

                    <nav class="hidden xl:flex flex-1 justify-center items-center gap-x-3 xl:gap-x-4 2xl:gap-x-8 z-10 overflow-hidden desktop-nav">
                        <a href="index.html" class="nav-link relative text-blue-950 hover:text-green-600 font-bold text-[13px] 2xl:text-[14.5px] group py-2 whitespace-nowrap transition-colors">
                            <span data-i18n="navHome">Home</span>
                            <span class="nav-indicator absolute left-0 bottom-0 w-0 h-[3px] bg-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </a>
                        <a href="about.html" class="nav-link relative text-blue-950 hover:text-green-600 font-bold text-[13px] 2xl:text-[14.5px] group py-2 whitespace-nowrap transition-colors">
                            <span data-i18n="navAbout">About Us</span>
                            <span class="nav-indicator absolute left-0 bottom-0 w-0 h-[3px] bg-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </a>
                        <a href="service.html" class="nav-link relative text-blue-950 hover:text-green-600 font-bold text-[13px] 2xl:text-[14.5px] group py-2 whitespace-nowrap transition-colors">
                            <span data-i18n="navServices">Our Services</span>
                            <span class="nav-indicator absolute left-0 bottom-0 w-0 h-[3px] bg-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </a>
                        <a href="gallery.html" class="nav-link relative text-blue-950 hover:text-green-600 font-bold text-[13px] 2xl:text-[14.5px] group py-2 whitespace-nowrap transition-colors">
                            <span data-i18n="navGallery">Gallery</span>
                            <span class="nav-indicator absolute left-0 bottom-0 w-0 h-[3px] bg-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </a>
                        <a href="volunter.html" class="nav-link relative text-blue-950 hover:text-green-600 font-bold text-[13px] 2xl:text-[14.5px] group py-2 whitespace-nowrap transition-colors">
                            <span data-i18n="navVolunteer">Volunteer Hub</span>
                            <span class="nav-indicator absolute left-0 bottom-0 w-0 h-[3px] bg-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </a>
                        <a href="publicity.html" class="nav-link relative text-blue-950 hover:text-green-600 font-bold text-[13px] 2xl:text-[14.5px] group py-2 whitespace-nowrap transition-colors">
                            <span data-i18n="navJournal">Journal & Publicity</span>
                            <span class="nav-indicator absolute left-0 bottom-0 w-0 h-[3px] bg-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </a>
                        <a href="blog.html" class="nav-link relative text-blue-950 hover:text-green-600 font-bold text-[13px] 2xl:text-[14.5px] group py-2 whitespace-nowrap transition-colors">
                            <span data-i18n="navBlog">Blog</span>
                            <span class="nav-indicator absolute left-0 bottom-0 w-0 h-[3px] bg-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </a>
                        <a href="news.html" class="nav-link relative text-blue-950 hover:text-green-600 font-bold text-[13px] 2xl:text-[14.5px] group py-2 whitespace-nowrap transition-colors">
                            <span data-i18n="navNews">News & Updates</span>
                            <span class="nav-indicator absolute left-0 bottom-0 w-0 h-[3px] bg-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </a>
                    </nav>

                    <div class="flex items-center justify-end z-20 flex-shrink-0 xl:w-[260px]">
                        <button id="mobile-menu-btn" class="xl:hidden text-blue-950 hover:text-green-600 focus:outline-none p-2">
                            <i class="fa-solid fa-bars text-3xl"></i>
                        </button>
                        <a href="book.html" class="hidden xl:flex bg-green-600 hover:bg-blue-950 text-white px-7 py-3 rounded text-[15px] font-bold shadow-md hover:shadow-lg transition-all duration-300 items-center gap-2 transform hover:-translate-y-0.5 whitespace-nowrap">
                            <span data-i18n="navBook">Book Consultation</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <div id="mobile-menu" class="hidden xl:hidden absolute top-full left-0 w-max min-w-[240px] bg-white shadow-2xl z-40 rounded-br-lg border-b border-r border-gray-200 overflow-hidden">
            <div class="flex flex-col max-h-[75vh] overflow-y-auto">
                
                <div class="py-2 mobile-nav">
                    <a href="index.html" data-i18n="navHome" class="mob-nav-link block px-6 py-2.5 text-[15px] font-bold text-blue-950 hover:bg-green-50 hover:text-green-600 transition-colors">Home</a>
                    <a href="about.html" data-i18n="navAbout" class="mob-nav-link block px-6 py-2.5 text-[15px] font-bold text-blue-950 hover:bg-green-50 hover:text-green-600 transition-colors">About Us</a>
                    <a href="service.html" data-i18n="navServices" class="mob-nav-link block px-6 py-2.5 text-[15px] font-bold text-blue-950 hover:bg-green-50 hover:text-green-600 transition-colors">Our Services</a>
                    <a href="gallery.html" data-i18n="navGallery" class="mob-nav-link block px-6 py-2.5 text-[15px] font-bold text-blue-950 hover:bg-green-50 hover:text-green-600 transition-colors">Gallery</a>
                    <a href="volunter.html" data-i18n="navVolunteer" class="mob-nav-link block px-6 py-2.5 text-[15px] font-bold text-blue-950 hover:bg-green-50 hover:text-green-600 transition-colors">Volunteer Hub</a>
                    <a href="publicity.html" data-i18n="navJournal" class="mob-nav-link block px-6 py-2.5 text-[15px] font-bold text-blue-950 hover:bg-green-50 hover:text-green-600 transition-colors">Journal & Publicity</a>
                    <a href="news.html" data-i18n="navNews" class="mob-nav-link block px-6 py-2.5 text-[15px] font-bold text-blue-950 hover:bg-green-50 hover:text-green-600 transition-colors">News & Updates</a>
                </div>
                
                <div class="p-4 bg-gray-50 border-t border-gray-100">
                    <a href="book.html" class="block w-full text-center bg-green-600 hover:bg-blue-950 text-white px-4 py-3 rounded-md text-[14px] font-bold shadow-md transition-colors duration-300">
                        <span data-i18n="navBook">Book Consultation</span>
                    </a>
                </div>

            </div>
        </div>
    </header>
`;

// Insert the header into the page
document.getElementById('header-container').innerHTML = headerHTML;

// --- ACTIVE LINK LOGIC ---
// Get the current page URL (e.g., 'about.html')
const currentPage = window.location.pathname.split('/').pop() || 'index.html'; 

// 1. Highlight Desktop Links
const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
desktopLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
        // Force the text to stay green
        link.classList.replace('text-blue-950', 'text-green-600');
        // Force the underline to stay at 100% width
        const indicator = link.querySelector('.nav-indicator');
        if (indicator) {
            indicator.classList.replace('w-0', 'w-full');
            indicator.classList.remove('group-hover:w-full'); // Stop hover effect from overriding it
        }
    }
});

// 2. Highlight Mobile Links
const mobileLinks = document.querySelectorAll('.mobile-nav .mob-nav-link');
mobileLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
        // Give it a green background and green text so the user clearly sees where they are
        link.classList.add('bg-green-50', 'text-green-600', 'border-l-4', 'border-green-600');
        link.classList.remove('text-blue-950');
    }
});

// --- MOBILE MENU TOGGLE LOGIC ---
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}


// 6. Custom Language Dropdown Logic
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');
const langArrow = document.getElementById('lang-arrow');

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('hidden');
    langArrow.classList.toggle('rotate-180');
});

document.addEventListener('click', () => {
    if (!langMenu.classList.contains('hidden')) {
        langMenu.classList.add('hidden');
        langArrow.classList.remove('rotate-180');
    }
});

// 7. Apply Translation Function
function applyTranslation(lang) {
    if (!translations[lang]) return;

    document.getElementById('current-flag-img').src = languageConfig[lang].flag;
    document.getElementById('current-lang-text').textContent = languageConfig[lang].name;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    localStorage.setItem('rg_lang', lang);
}

// 8. Handle Language Selection Clicks
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
        const selectedLang = e.currentTarget.getAttribute('data-lang');
        applyTranslation(selectedLang);
    });
});

// 9. Init Storage on Page Load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('rg_lang') || 'en';
    applyTranslation(savedLang);
});



///footer logic//
// footer.js
(function() {
    // Create footer element
    const footer = document.createElement('footer');
    footer.className = 'bg-brand-blue text-white pt-16 pb-8 border-t border-white/10';
    
    footer.innerHTML = `
        <div class="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                
                <!-- About Reach Global -->
                <div>
                    <h4 class="text-lg font-bold mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-globe text-brand-green"></i>
                        <span>Reach Global</span>
                    </h4>
                    <p class="text-blue-100/70 text-sm leading-relaxed mb-4">
                        A Tanzanian consultancy bridging global ambition with local expertise. 
                        We provide market entry, regulatory navigation, and strategic partnerships 
                        across East Africa.
                    </p>
                    <div class="flex items-center gap-2 text-xs text-blue-100/50">
                        <i class="fa-regular fa-building"></i>
                        <span>Est. 2020 · Dar es Salaam</span>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-3 text-sm">
                        <li><a href="index.html" class="text-blue-100/70 hover:text-brand-green transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-brand-green"></i>Home</a></li>
                        <li><a href="about.html" class="text-blue-100/70 hover:text-brand-green transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-brand-green"></i>About Us</a></li>
                        <li><a href="services.html" class="text-blue-100/70 hover:text-brand-green transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-brand-green"></i>Our Services</a></li>
                        <li><a href="cases.html" class="text-blue-100/70 hover:text-brand-green transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-brand-green"></i>Impact Cases</a></li>
                        <li><a href="insights.html" class="text-blue-100/70 hover:text-brand-green transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-brand-green"></i>Insights</a></li>
                    </ul>
                </div>

                <!-- Related Links -->
                <div>
                    <h4 class="text-lg font-bold mb-4">Related Links</h4>
                    <ul class="space-y-3 text-sm">
                        <li><a href="blog.html" class="text-blue-100/70 hover:text-brand-green transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-brand-green"></i>Blog</a></li>
                        <li><a href="careers.html" class="text-blue-100/70 hover:text-brand-green transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-brand-green"></i>Careers</a></li>
                        <li><a href="volunteer.html" class="text-blue-100/70 hover:text-brand-green transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-brand-green"></i>Volunteer Hub</a></li>
                        <li><a href="privacy.html" class="text-blue-100/70 hover:text-brand-green transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-brand-green"></i>Privacy Policy</a></li>
                        <li><a href="terms.html" class="text-blue-100/70 hover:text-brand-green transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-brand-green"></i>Terms of Use</a></li>
                    </ul>
                </div>

                <!-- Contact Us -->
                <div>
                    <h4 class="text-lg font-bold mb-4">Contact Us</h4>
                    <ul class="space-y-3 text-sm">
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-location-dot text-brand-green mt-1"></i>
                            <span class="text-blue-100/70">Mbezi Beach, Dar es Salaam<br>Tanzania</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-phone text-brand-green"></i>
                            <a href="tel:+255123456789" class="text-blue-100/70 hover:text-brand-green transition">+255 123 456 789</a>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-envelope text-brand-green"></i>
                            <a href="mailto:hello@reachglobal.co.tz" class="text-blue-100/70 hover:text-brand-green transition">hello@reachglobal.co.tz</a>
                        </li>
                    </ul>
                    
                    <!-- Social Icons -->
                    <div class="flex gap-4 mt-6">
                        <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-green hover:text-white transition-all"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-green hover:text-white transition-all"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-green hover:text-white transition-all"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-green hover:text-white transition-all"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-blue-100/50 text-xs order-2 md:order-1">
                    &copy; ${new Date().getFullYear()} Reach Global Consultant Company. All rights reserved.
                </p>
                <div class="flex items-center gap-4 text-xs order-1 md:order-2">
                    <a href="#" class="text-blue-100/50 hover:text-brand-green transition">Sitemap</a>
                    <a href="#" class="text-blue-100/50 hover:text-brand-green transition">Accessibility</a>
                    <a href="#" class="text-blue-100/50 hover:text-brand-green transition">Cookies</a>
                </div>
            </div>
        </div>
    `;

    // Insert footer into the placeholder
    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) {
        footerContainer.appendChild(footer);
    } else {
        // Fallback: append to body
        document.body.appendChild(footer);
    }
})();
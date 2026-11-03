
// ========================================
// PORTFOLIO JAVASCRIPT
// ========================================

// HTML elements
const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const profilePhoto = document.getElementById("profilePhoto");
const photoFallback = document.getElementById("photoFallback");

// ========================================
// LANGUAGE TRANSLATION
// ========================================

const translations = {
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navEducation: "Education",
    navContact: "Contact",

    available: "CURIOUS MIND. CREATIVE BUILDER.",
    hello: "Hello, I'm",
    role: "Software Engineer",

    heroDescription:
      "I explore technology and build practical digital solutions through code, curiosity, and creative problem-solving.",

    contactMe: "Contact me ↗",
    discover: "Discover more ↓",

    location: "Aden, Yemen",
    field: "Software Engineering",

    creativeMind: "Creative mind",
    buildingIdeas: "Building ideas",
    scroll: "SCROLL TO EXPLORE",

    whoIAm: "WHO I AM",
    aboutTitle: "A little about me",
    aboutHeading:
      "Technology enthusiast. Problem solver. Lifelong learner.",

    aboutText1:
      "I am a Software Engineer with an interest in technology, software development, and medical equipment systems. I enjoy learning new technologies, solving technical problems, and developing practical solutions that make a difference.",

    aboutText2:
      "My interests include web development, programming, networking, and medical technology. I am always looking for opportunities to improve my technical skills, work on meaningful projects, and expand my knowledge.",

    aboutText3:
      "My goal is to combine technical knowledge, creativity, and problem-solving skills to build reliable and useful solutions.",

    whatIUse: "WHAT I WORK WITH",
    skillsTitle: "Technical skills",
    skillsIntro:
      "Technologies and tools I am learning and using to bring ideas to life.",

    webTitle: "Web development",
    backendTitle: "Backend development",
    frontendTitle: "Frontend frameworks",
    pythonTitle: "Python development",

    learningPath: "LEARNING PATH",
    educationTitle: "Education & growth",
    university: "UNIVERSITY",

    educationNote:
      "Building knowledge and developing a foundation in software engineering.",

    getInTouch: "GET IN TOUCH",
    contactTitle: "Have an idea? Let's connect.",

    contactDescription:
      "I'm always interested in learning, exchanging ideas, and exploring meaningful opportunities.",

    sendEmail: "Send me an email ↗",
    footerText: "Designed & built with curiosity."
  },

  ar: {
    navAbout: "من أنا",
    navSkills: "المهارات",
    navEducation: "التعليم",
    navContact: "تواصل معي",

    available: "عقل فضولي. مطور مبدع.",
    hello: "مرحباً، أنا",
    role: "مهندس برمجيات",

    heroDescription:
      "أستكشف التكنولوجيا وأبني حلولاً رقمية عملية من خلال البرمجة والفضول والتفكير الإبداعي.",

    contactMe: "تواصل معي ↗",
    discover: "اكتشف المزيد ↓",

    location: "عدن، اليمن",
    field: "هندسة البرمجيات",

    creativeMind: "عقل مبدع",
    buildingIdeas: "أبني الأفكار",
    scroll: "انتقل لاستكشاف الموقع",

    whoIAm: "من أنا",
    aboutTitle: "نبذة عني",
    aboutHeading:
      "مهتم بالتكنولوجيا. أحب حل المشكلات. ومتعلم مدى الحياة.",

    aboutText1:
      "أنا مهندس برمجيات مهتم بالتكنولوجيا وتطوير البرمجيات وأنظمة الأجهزة الطبية. أستمتع بتعلم التقنيات الجديدة وحل المشكلات التقنية وتطوير حلول عملية مفيدة.",

    aboutText2:
      "تشمل اهتماماتي تطوير الويب والبرمجة والشبكات والتكنولوجيا الطبية. أسعى دائماً إلى تحسين مهاراتي التقنية والعمل على مشاريع مفيدة وتوسيع معرفتي.",

    aboutText3:
      "هدفي هو الجمع بين المعرفة التقنية والإبداع ومهارات حل المشكلات لبناء حلول موثوقة ومفيدة.",

    whatIUse: "التقنيات التي أستخدمها",
    skillsTitle: "المهارات التقنية",
    skillsIntro:
      "التقنيات والأدوات التي أتعلمها وأستخدمها لتحويل الأفكار إلى واقع.",

    webTitle: "تطوير الويب",
    backendTitle: "تطوير الواجهات الخلفية",
    frontendTitle: "أطر عمل الواجهات الأمامية",
    pythonTitle: "تطوير بايثون",

    learningPath: "مسيرتي التعليمية",
    educationTitle: "التعليم والتطور",
    university: "الجامعة",

    educationNote:
      "بناء المعرفة وتطوير أساس قوي في هندسة البرمجيات.",

    getInTouch: "تواصل معي",
    contactTitle: "لديك فكرة؟ لنتواصل معاً.",

    contactDescription:
      "أهتم دائماً بالتعلم وتبادل الأفكار واستكشاف الفرص المفيدة.",

    sendEmail: "أرسل لي بريداً إلكترونياً ↗",
    footerText: "تم التصميم والبناء بشغف وفضول."
  }
};

let currentLanguage = "en";

// Change language
function setLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  languageToggle.textContent =
    language === "en" ? "العربية" : "English";
}

// Language button
languageToggle.addEventListener("click", () => {
  const newLanguage = currentLanguage === "en" ? "ar" : "en";
  setLanguage(newLanguage);
});

// ========================================
// DARK AND LIGHT THEME
// ========================================

function setTheme(theme) {
  document.body.classList.toggle("light", theme === "light");

  themeIcon.textContent = theme === "light" ? "☾" : "☼";

  localStorage.setItem("portfolio-theme", theme);
}

// Load saved theme
const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

setTheme(savedTheme);

// Theme button
themeToggle.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light")
    ? "dark"
    : "light";

  setTheme(newTheme);
});

// ========================================
// MOBILE NAVIGATION
// ========================================

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ========================================
// PROFILE IMAGE FALLBACK
// ========================================

function showProfileImage() {
  profilePhoto.style.display = "block";
  photoFallback.style.display = "none";
}

function showProfileFallback() {
  profilePhoto.style.display = "none";
  photoFallback.style.display = "grid";
}

profilePhoto.addEventListener("load", showProfileImage);
profilePhoto.addEventListener("error", showProfileFallback);

// Handle cached images
if (profilePhoto.complete) {
  if (profilePhoto.naturalWidth > 0) {
    showProfileImage();
  } else {
    showProfileFallback();
  }
}

// ========================================
// CURRENT YEAR
// ========================================

document.getElementById("year").textContent =
  new Date().getFullYear();

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerInstance.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  observer.observe(element);
});

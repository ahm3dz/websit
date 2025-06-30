const personalData = {
  name: {
    en: { first: "Ahmed", last: "Al-Zahrani" },
    ar: { first: "أحمد", last: "الزهراني" }
  },
  contact: {
    phone: "0534341014",
    email: "ahmadabduallahzh@gmail.com",
    whatsapp: "966534341014",
    linkedin: "https://www.linkedin.com/in/%D8%A3%D8%AD%D9%85%D8%AF-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87-a20358193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  about: {
    en: "I am Ahmed, a high school diploma graduate from TVTC. Passionate about technology, device maintenance, and operating systems. I enjoy learning programming and keeping up with new tech.",
    ar: "أنا أحمد، خريج دبلوم من الثانوية الصناعية (TVTC). شغوف بالتقنية، صيانة الأجهزة، وأنظمة التشغيل. أستمتع بتعلم البرمجة ومواكبة جديد التكنولوجيا."
  },
  skills: {
    en: ["Technology", "Device Maintenance", "Operating Systems", "Programming", "Problem Solving", "Hardware Troubleshooting"],
    ar: ["التقنية", "صيانة الأجهزة", "أنظمة التشغيل", "البرمجة", "حل المشاكل", "استكشاف أخطاء الأجهزة"]
  },
  copyrightYear: 2025
};

const codeSnippets = {
  en: [
    { text: "const developer = 'Ahmed';", type: "keyword" },
    { text: "function solveProblem() {", type: "function" },
    { text: "  return 'Innovation';", type: "string" },
    { text: "}", type: "keyword" },
    { text: "// Building the future", type: "comment" },
    { text: "let skills = ['Tech', 'Code'];", type: "keyword" },
    { text: "console.log('Hello World!');", type: "function" },
    { text: "if (passion === true) {", type: "keyword" },
    { text: "  createAmazingThings();", type: "function" },
    { text: "}", type: "keyword" }
  ],
  ar: [
    { text: "const مطور = 'أحمد';", type: "keyword" },
    { text: "function حل المشاكل() {", type: "function" },
    { text: "  return 'الابتكار';", type: "string" },
    { text: "}", type: "keyword" },
    { text: "// بناء المستقبل", type: "comment" },
    { text: "let مهارات = ['تقنية', 'برمجة'];", type: "keyword" },
    { text: "console.log('مرحبا بالعالم!');", type: "function" },
    { text: "if (شغف === true) {", type: "keyword" },
    { text: "  إنشاءأشياءمذهلة();", type: "function" },
    { text: "}", type: "keyword" }
  ]
};

const translations = {
  en: {
    pageTitle: "Ahmed Al-Zahrani - Portfolio",
    greeting: "Hello, I'm",
    profession: "Technology Specialist & Problem Solver",
    aboutTitle: "About Me",
    skillsTitle: "Skills & Expertise",
    contactMe: "Get In Touch",
    downloadVCard: "Download Contact",
    contactVia: "Contact Me",
    phone: "Phone",
    email: "Email",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    call: "Call",
    copy: "Copy",
    copied: "Copied!",
    chat: "Chat",
    connect: "Connect",
    closeModal: "Close",
    switchToDark: "Switch to Dark Mode",
    switchToLight: "Switch to Light Mode",
    switchToArabic: "Switch to Arabic",
    switchToEnglish: "Switch to English",
    allRightsReserved: "All rights reserved.",
    tvtcGraduate: "TVTC Graduate",
    techEnthusiast: "Tech Enthusiast",
    loadingText: "Loading Portfolio...",
    copyrightNote: "Built with passion for technology and innovation"
  },
  ar: {
    pageTitle: "أحمد الزهراني - ملف شخصي",
    greeting: "مرحباً، أنا",
    profession: "أخصائي تقنية وحلول المشاكل",
    aboutTitle: "نبذة عني",
    skillsTitle: "المهارات والخبرات",
    contactMe: "تواصل معي",
    downloadVCard: "تحميل بطاقة الاتصال",
    contactVia: "تواصل معي",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    whatsapp: "واتساب",
    linkedin: "لينكد إن",
    call: "اتصل",
    copy: "انسخ",
    copied: "تم النسخ!",
    chat: "محادثة",
    connect: "تواصل",
    closeModal: "إغلاق",
    switchToDark: "التحويل إلى الوضع المظلم",
    switchToLight: "التحويل إلى الوضع المضيء",
    switchToArabic: "التحويل إلى العربية",
    switchToEnglish: "التحويل إلى الإنجليزية",
    allRightsReserved: "جميع الحقوق محفوظة.",
    tvtcGraduate: "خريج التقنية",
    techEnthusiast: "عاشق التكنولوجيا",
    loadingText: "جاري تحميل الملف الشخصي...",
    copyrightNote: "مبني بشغف للتكنولوجيا والابتكار"
  }
};

let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';
let copiedEmail = false;
let isLoading = true;
let copyrightVisible = false;

class ParticleSystem {
  constructor() {
    this.container = document.getElementById('particles-container');
    this.particles = [];
    this.maxParticles = 20;
    this.colors = [
      'rgba(14, 165, 233, 0.3)',
      'rgba(217, 70, 239, 0.3)',
      'rgba(34, 197, 94, 0.3)',
      'rgba(245, 158, 11, 0.3)',
      'rgba(239, 68, 68, 0.3)'
    ];
    
    this.init();
  }

  init() {
    this.createParticles();
    this.updateTheme();
  }

  createParticles() {
    for (let i = 0; i < this.maxParticles; i++) {
      this.createParticle();
    }
  }

  createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 2 + 1;
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    const duration = Math.random() * 10 + 8;
    const delay = Math.random() * 10;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${Math.random() * 100}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    
    this.container.appendChild(particle);
    this.particles.push(particle);
    
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
        const index = this.particles.indexOf(particle);
        if (index > -1) {
          this.particles.splice(index, 1);
        }
        this.createParticle();
      }
    }, (duration + delay) * 1000);
  }

  updateTheme() {
    const isDark = currentTheme === 'dark';
    this.colors = isDark ? [
      'rgba(14, 165, 233, 0.25)',
      'rgba(217, 70, 239, 0.25)',
      'rgba(34, 197, 94, 0.25)',
      'rgba(245, 158, 11, 0.25)',
      'rgba(239, 68, 68, 0.25)'
    ] : [
      'rgba(14, 165, 233, 0.15)',
      'rgba(217, 70, 239, 0.15)',
      'rgba(34, 197, 94, 0.15)',
      'rgba(245, 158, 11, 0.15)',
      'rgba(239, 68, 68, 0.15)'
    ];
  }
}

class CodeAnimation {
  constructor() {
    this.container = document.getElementById('code-lines');
    this.particlesContainer = document.getElementById('code-particles');
    this.currentIndex = 0;
    this.isRunning = false;
    this.particles = [];
    
    this.init();
  }

  init() {
    this.startAnimation();
    this.createCodeParticles();
  }

  async startAnimation() {
    if (this.isRunning) return;
    this.isRunning = true;
    
    const snippets = codeSnippets[currentLanguage];
    this.container.innerHTML = '';
    this.currentIndex = 0;
    
    for (let i = 0; i < snippets.length; i++) {
      await this.typeCodeLine(snippets[i], i);
      await this.delay(300);
    }
    
    await this.delay(2000);
    this.isRunning = false;
    
    // Restart animation
    setTimeout(() => this.startAnimation(), 1000);
  }

  async typeCodeLine(snippet, index) {
    const line = document.createElement('div');
    line.className = 'code-line';
    line.style.animationDelay = `${index * 0.1}s`;
    
    const parts = this.parseCodeLine(snippet);
    parts.forEach(part => {
      const span = document.createElement('span');
      span.className = `code-${part.type}`;
      span.textContent = part.text;
      line.appendChild(span);
    });
    
    this.container.appendChild(line);
    return this.delay(200);
  }

  parseCodeLine(snippet) {
    // Simple parsing for demonstration
    const { text, type } = snippet;
    
    if (type === 'comment') {
      return [{ text, type: 'comment' }];
    }
    
    const parts = [];
    const keywords = ['const', 'let', 'var', 'function', 'if', 'return', '}', '{'];
    const strings = text.match(/'[^']*'|"[^"]*"/g) || [];
    const numbers = text.match(/\b\d+\b/g) || [];
    
    let remaining = text;
    
    // Replace strings
    strings.forEach(str => {
      if (remaining.includes(str)) {
        const index = remaining.indexOf(str);
        if (index > 0) {
          parts.push({ text: remaining.substring(0, index), type: 'text' });
        }
        parts.push({ text: str, type: 'string' });
        remaining = remaining.substring(index + str.length);
      }
    });
    
    if (remaining && !strings.length) {
      parts.push({ text: remaining, type });
    }
    
    return parts.length ? parts : [{ text, type }];
  }

  createCodeParticles() {
    const symbols = ['<', '>', '{', '}', '(', ')', ';', '=', '+', '-', '*', '/', '&', '|'];
    
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'code-particle';
      particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      
      particle.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        color: var(--code-keyword);
        animation-delay: ${Math.random() * 4}s;
        animation-duration: ${4 + Math.random() * 2}s;
      `;
      
      this.particlesContainer.appendChild(particle);
      this.particles.push(particle);
    }
  }

  updateLanguage() {
    if (this.isRunning) {
      this.isRunning = false;
      setTimeout(() => this.startAnimation(), 500);
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

class TypeWriter {
  constructor(element, text, speed = 30, delay = 0) {
    this.element = element;
    this.text = text;
    this.speed = speed;
    this.delay = delay;
    this.isComplete = false;
  }

  async start() {
    return new Promise((resolve) => {
      setTimeout(() => {
        let i = 0;
        const type = () => {
          if (i < this.text.length) {
            this.element.textContent += this.text.charAt(i);
            i++;
            setTimeout(type, this.speed);
          } else {
            this.isComplete = true;
            resolve();
          }
        };
        this.element.textContent = '';
        type();
      }, this.delay);
    });
  }
}

class RippleEffect {
  static create(element, event) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
      z-index: 1;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }
}

function updateElement(id, content) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = content;
  }
}

function updateHTML(id, content) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = content;
  }
}

function downloadVCard() {
  const link = document.createElement('a');
  link.href = 'assets/vcf/AhmedAlZahrani.vcf';
  link.download = 'AhmedAlZahrani.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(personalData.contact.email);
    copiedEmail = true;
    updateContactMethods();
    setTimeout(() => {
      copiedEmail = false;
      updateContactMethods();
    }, 2000);
  } catch (error) {
    console.error('Failed to copy email:', error);
  }
}

function applyTheme(theme) {
  document.body.className = `${theme} lang-${currentLanguage}`;
  
  const themeIcon = document.getElementById('theme-icon');
  if (theme === 'dark') {
    themeIcon.innerHTML = `
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    `;
  } else {
    themeIcon.innerHTML = `
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    `;
  }
  
  if (window.particleSystem) {
    window.particleSystem.updateTheme();
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
}

function applyLanguage(language) {
  const t = translations[language];
  
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.title = t.pageTitle;
  
  document.body.className = `${currentTheme} lang-${language}`;
  
  updateElement('language-text', language === 'en' ? 'عربي' : 'EN');
  updateElement('loading-text', t.loadingText);
  
  updateContentWithAnimations(language);
  
  if (window.codeAnimation) {
    window.codeAnimation.updateLanguage();
  }
}

async function updateContentWithAnimations(language) {
  const t = translations[language];
  const fullName = `${personalData.name[language].first} ${personalData.name[language].last}`;
  
  const elements = ['greeting', 'name', 'profession', 'about-text'];
  elements.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = '';
  });
  
  updateElement('badge-1', t.tvtcGraduate);
  updateElement('badge-2', t.techEnthusiast);
  updateElement('about-title', t.aboutTitle);
  updateElement('skills-title', t.skillsTitle);
  updateElement('download-text', t.downloadVCard);
  updateElement('contact-text', t.contactMe);
  updateElement('modal-title', t.contactVia);
  
  const copyrightText = `© ${personalData.copyrightYear} ${fullName}. ${t.allRightsReserved}`;
  updateElement('copyright', copyrightText);
  updateElement('copyright-note', t.copyrightNote);
  
  updateSkills(language);
  
  if (!isLoading) {
    const greetingWriter = new TypeWriter(document.getElementById('greeting'), t.greeting, 40, 100);
    await greetingWriter.start();
    
    const nameWriter = new TypeWriter(document.getElementById('name'), fullName, 60, 0);
    await nameWriter.start();
    
    const professionWriter = new TypeWriter(document.getElementById('profession'), t.profession, 30, 0);
    await professionWriter.start();
    
    const aboutWriter = new TypeWriter(document.getElementById('about-text'), personalData.about[language], 15, 0);
    await aboutWriter.start();
  } else {
    updateElement('greeting', t.greeting);
    updateElement('name', fullName);
    updateElement('profession', t.profession);
    updateElement('about-text', personalData.about[language]);
  }
}

function updateSkills(language) {
  const skillsGrid = document.getElementById('skills-grid');
  const skills = personalData.skills[language];
  
  const skillIcons = [
    `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
    `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
    `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,
    `<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>`,
    `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
    `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>`
  ];
  
  skillsGrid.innerHTML = skills.map((skill, index) => `
    <div class="skill-card" style="animation-delay: ${index * 0.1}s">
      <div class="skill-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${skillIcons[index % skillIcons.length]}
        </svg>
      </div>
      <span class="skill-name">${skill}</span>
    </div>
  `).join('');
}

function updateContactMethods() {
  const t = translations[currentLanguage];
  const contactMethods = document.getElementById('contact-methods');
  
  const methods = [
    {
      type: 'phone',
      icon: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`,
      label: t.phone,
      value: personalData.contact.phone,
      action: t.call,
      href: `tel:${personalData.contact.phone}`
    },
    {
      type: 'email',
      icon: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
      label: t.email,
      value: personalData.contact.email,
      action: copiedEmail ? t.copied : t.copy,
      onclick: 'copyEmail()'
    },
    {
      type: 'whatsapp',
      icon: `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>`,
      label: t.whatsapp,
      value: 'WhatsApp',
      action: t.chat,
      href: `https://wa.me/${personalData.contact.whatsapp}`
    },
    {
      type: 'linkedin',
      icon: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>`,
      label: t.linkedin,
      value: 'LinkedIn',
      action: t.connect,
      href: personalData.contact.linkedin
    }
  ];
  
  contactMethods.innerHTML = methods.map((method, index) => `
    <div class="contact-method-wrapper" style="animation-delay: ${index * 0.1}s">
      ${method.href ? `
        <a href="${method.href}" ${method.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="contact-method contact-${method.type}">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${method.icon}
            </svg>
          </div>
          <div class="contact-info">
            <div class="contact-label">${method.label}</div>
            <div class="contact-value">${method.value}</div>
          </div>
          <div class="contact-action">
            ${method.href.startsWith('http') ? `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            ` : ''}
            <span>${method.action}</span>
          </div>
        </a>
      ` : `
        <button onclick="${method.onclick}" class="contact-method contact-${method.type}">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${method.icon}
            </svg>
          </div>
          <div class="contact-info">
            <div class="contact-label">${method.label}</div>
            <div class="contact-value">${method.value}</div>
          </div>
          <div class="contact-action">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${copiedEmail && method.type === 'email' ? `
                <polyline points="20,6 9,17 4,12"/>
              ` : `
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              `}
            </svg>
            <span>${method.action}</span>
          </div>
        </button>
      `}
    </div>
  `).join('');
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  localStorage.setItem('language', currentLanguage);
  applyLanguage(currentLanguage);
}

function toggleCopyright() {
  const panel = document.getElementById('copyright-panel');
  const btn = document.getElementById('copyright-toggle-btn');
  const toggle = document.querySelector('.copyright-toggle');
  
  copyrightVisible = !copyrightVisible;
  
  if (copyrightVisible) {
    panel.classList.add('visible');
    btn.classList.add('expanded');
    toggle.classList.add('expanded');
    
    const panelHeight = panel.offsetHeight;
    document.documentElement.style.setProperty('--copyright-height', `${panelHeight}px`);
  } else {
    panel.classList.remove('visible');
    btn.classList.remove('expanded');
    toggle.classList.remove('expanded');
  }
}

function openModal() {
  const modal = document.getElementById('contact-modal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  updateContactMethods();
}

function closeModal() {
  const modal = document.getElementById('contact-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('hidden');
  
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    isLoading = false;
  }, 500);
}

function preventTextSelection() {
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
  });
  
  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
  });
  
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) {
      e.preventDefault();
      return false;
    }
    
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
      e.preventDefault();
      return false;
    }
    
    if (e.ctrlKey && (e.key === 'v' || e.key === 'V')) {
      e.preventDefault();
      return false;
    }
    
    if (e.ctrlKey && (e.key === 'x' || e.key === 'X')) {
      e.preventDefault();
      return false;
    }
    
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
      e.preventDefault();
      return false;
    }
    
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
      e.preventDefault();
      return false;
    }
    
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      return false;
    }
  });
  
  document.onselectstart = function() {
    return false;
  };
  
  document.onmousedown = function() {
    return false;
  };
  
  document.ondragstart = function() {
    return false;
  };
}

function initEventListeners() {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', (e) => {
    RippleEffect.create(themeToggle, e);
    toggleTheme();
  });
  
  const languageToggle = document.getElementById('language-toggle');
  languageToggle.addEventListener('click', (e) => {
    RippleEffect.create(languageToggle, e);
    toggleLanguage();
  });
  
  const downloadBtn = document.getElementById('download-vcard');
  downloadBtn.addEventListener('click', (e) => {
    RippleEffect.create(downloadBtn, e);
    downloadVCard();
  });
  
  const contactBtn = document.getElementById('contact-me');
  contactBtn.addEventListener('click', (e) => {
    RippleEffect.create(contactBtn, e);
    openModal();
  });
  
  document.getElementById('modal-close').addEventListener('click', closeModal);
  
  const copyrightToggle = document.getElementById('copyright-toggle-btn');
  copyrightToggle.addEventListener('click', (e) => {
    RippleEffect.create(copyrightToggle, e);
    toggleCopyright();
  });
  
  document.getElementById('contact-modal').addEventListener('click', (e) => {
    if (e.target.id === 'contact-modal' || e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('contact-modal').style.display === 'flex') {
        closeModal();
      } else if (copyrightVisible) {
        toggleCopyright();
      }
    }
  });
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);
  
  setTimeout(() => {
    document.querySelectorAll('.skill-card, .contact-method-wrapper').forEach(el => {
      observer.observe(el);
    });
  }, 1000);

  document.querySelectorAll('.btn, .card-control-btn, .skill-card, .contact-method').forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = element.style.transform || '';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = '';
    });
  });
}

function init() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'flex';
  
  applyTheme(currentTheme);
  applyLanguage(currentLanguage);
  
  window.particleSystem = new ParticleSystem();
  window.codeAnimation = new CodeAnimation();
  
  initEventListeners();
  
  preventTextSelection();
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  setTimeout(() => {
    hideLoadingScreen();
  }, 1000);
}

document.addEventListener('DOMContentLoaded', init);

if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        console.log(`Page loaded in ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
      }
    }, 0);
  });
}

window.addEventListener('beforeunload', () => {
  if (window.particleSystem) {
    window.particleSystem.particles.forEach(particle => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    });
  }
});

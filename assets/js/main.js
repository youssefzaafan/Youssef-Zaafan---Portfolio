// Theme toggle (light/dark) with icon
const root = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.querySelector('#theme-btn i'); // <i> icon inside button
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Check saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  root.classList.add('light');
  themeIcon.classList.replace('fa-moon', 'fa-sun'); // sun if light mode
}

// Toggle theme
themeBtn.addEventListener('click', () => {
  root.classList.toggle('light');
  const isLight = root.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  // Change icon
  if (isLight) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () =>
  navMenu.classList.toggle('open')
);

document.querySelectorAll('.nav-link').forEach(l =>
  l.addEventListener('click', () => navMenu.classList.remove('open'))
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form demo
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  statusEl.textContent = 'Your message was sent (demo form).';
  form.reset();
});


// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
document.querySelectorAll('[data-open]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-open');
    const img = document.querySelector(`[data-project="${id}"] img`);
    lbImg.src = img.getAttribute('src');
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});
document.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.removeAttribute('src');
  });
});

// Animate on scroll
if (window.AOS) {
  AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
}

// Function to set the theme
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
 }
 // Load stored theme on page load
 document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  // Toggle theme on button click
  const toggleButton = document.getElementById('themeToggle');
  toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
 });

// Blur BG & transition
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.hero-content').forEach(el => observer.observe(el));

   // Toggle theme and icon
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    });

const toggle = document.getElementById('theme-toggle');
const body = document.body;
const label = document.getElementById('theme-label');
const switcher = document.getElementById('theme-switcher');
const iconPath = document.getElementById('icon-path');
// Define SVG paths
const moonPath = "M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"; // Moon
const sunPath = "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z";          // Sun
// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
 body.classList.add('dark');
 body.classList.remove('light');
 toggle.checked = true;
 label.textContent = "Dark";
 iconPath.setAttribute("d", moonPath);
 switcher.title = "Switch to Light Mode";
} else {
 body.classList.add('light');
 body.classList.remove('dark');
 toggle.checked = false;
 label.textContent = "Light";
 iconPath.setAttribute("d", sunPath);
 switcher.title = "Switch to Dark Mode";
}

// Toggle theme
toggle.addEventListener('change', () => {
 const isDark = toggle.checked;
 if (isDark) {
   body.classList.add('dark');
   body.classList.remove('light');
   label.textContent = "Dark";
   iconPath.setAttribute("d", moonPath);
   switcher.title = "Switch to Light Mode";
   localStorage.setItem('theme', 'dark');
 } else {
   body.classList.add('light');
   body.classList.remove('dark');
   label.textContent = "Light";
   iconPath.setAttribute("d", sunPath);
   switcher.title = "Switch to Dark Mode";
   localStorage.setItem('theme', 'light');
 }
});

/* Skills */
 
document.getElementById('skills').addEventListener('mouseenter', animateProgressCircles);
document.getElementById('skills').addEventListener('touchstart', animateProgressCircles);
window.addEventListener('scroll', () => {
document.querySelectorAll('.bounce').forEach(section => {
const pos = section.getBoundingClientRect();
if (pos.top < window.innerHeight - 100) {
section.classList.add('visible');
}
});
});
  
  function animateSkills() {
    const progressCircles = document.querySelectorAll('.progress-circle');
    progressCircles.forEach(circle => {     
      const progress = circle.querySelector('.progress');      
      const percent = +circle.getAttribute('data-progress');     
      const offset = 283 - (283 * percent) / 100;     
      progress.style.strokeDashoffset = offset;      
    });      
   }
      
  function resetSkills() {
    const progressCircles = document.querySelectorAll('.progress-circle .progress');
      progressCircles.forEach(progress => {
        progress.style.strokeDashoffset = 283;
      });
    }
      
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
      );
    }
      
  let skillsAnimated = false;
    window.addEventListener('scroll', () => {
      const skillsSection = document.getElementById('skills');
        if (isInViewport(skillsSection)) {
          if (!skillsAnimated) {
            animateSkills();
            skillsAnimated = true;
          }
        } else {
              resetSkills();
              skillsAnimated = false;
        }
    });
    function animateProgressCircles() {
      document.querySelectorAll('.progress-circle').forEach(circle => {
      const fill = circle.querySelector('.fill');
      const percent = circle.getAttribute('data-progress');
      const offset = 283 - (283 * percent) / 100;
      fill.style.strokeDashoffset = offset;
      });
      }


      /* Project */

// Scroll buttons functionality
const projectsContainer = document.querySelector('.projects-container');
const scrollLeftBtn = document.querySelector('.scroll-btn.left');
const scrollRightBtn = document.querySelector('.scroll-btn.right');
scrollLeftBtn.addEventListener('click', () => {
  projectsContainer.scrollBy({ left: -320, behavior: 'smooth' }); // scroll left by card width + gap
});
scrollRightBtn.addEventListener('click', () => {
  projectsContainer.scrollBy({ left: 320, behavior: 'smooth' }); // scroll right by card width + gap
});
        
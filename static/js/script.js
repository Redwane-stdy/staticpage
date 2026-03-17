/**
 * Theme Management
 */
function changeTheme(theme) {
  const validThemes = ['blue', 'purple', 'amber'];
  if (!validThemes.includes(theme)) return;

  document.documentElement.classList.remove('theme-blue', 'theme-purple', 'theme-amber');
  document.documentElement.classList.add(`theme-${theme}`);

  try {
    localStorage.setItem('resumeTheme', theme);
  } catch (e) {
    // localStorage unavailable (e.g. private browsing with strict settings)
  }
}

/**
 * Dark Mode Toggle
 */
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');

  try {
    localStorage.setItem('resumeDarkMode', isDark);
  } catch (e) {
    // localStorage unavailable
  }
}

/**
 * Initialisation on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved theme
  try {
    const savedTheme = localStorage.getItem('resumeTheme') || 'blue';
    changeTheme(savedTheme);

    const savedDarkMode = localStorage.getItem('resumeDarkMode') === 'true';
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    changeTheme('blue');
  }

  // Animate skill bars when section scrolls into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.progress');
        bars.forEach((bar) => {
          const targetWidth = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 100);
        });
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.resume-section').forEach((section) => {
    observer.observe(section);
  });
});

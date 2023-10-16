const themeToggle = document.querySelector('.toggle');
const themeReset = document.querySelector('.toggle__reset');

function setColorMode(mode) {
    if (mode) {
      document.documentElement.setAttribute('data-force-color-mode', mode);

      window.localStorage.setItem('color-mode', mode);

      themeToggle.checked = (mode === 'dark');
    }
    
    else {
      document.documentElement.removeAttribute('data-force-color-mode');

      window.localStorage.removeItem('color-mode');
      
      themeToggle.checked = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}
  
themeToggle.addEventListener('click', (e) => {
    setColorMode(e.target.checked ? 'dark' : 'light');
});

themeReset.addEventListener('click', (e) => {
    e.preventDefault();
    setColorMode(false);
});
  
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', () => {
    if (document.documentElement.getAttribute('data-force-color-mode')) {
        return;
    }

    themeToggle.checked = mediaQuery.matches;
});
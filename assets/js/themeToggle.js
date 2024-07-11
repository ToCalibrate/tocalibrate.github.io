(function() {
    document.addEventListener('DOMContentLoaded', function() {
      const initialTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', initialTheme);
      if (typeof jtd !== 'undefined' && jtd.setTheme) {
        jtd.setTheme(initialTheme);
      }
  
      function getStoredTheme() {
        return localStorage.getItem('theme') || 'light';
      }
  
      function setStoredTheme(theme) {
        localStorage.setItem('theme', theme);
        if (typeof jtd !== 'undefined' && jtd.setTheme) {
          jtd.setTheme(theme); // Use the jtd.setTheme method to apply the theme
        } else {
          document.documentElement.setAttribute('data-theme', theme);
        }
      }
  
      function createToggleButton() {
        const button = document.createElement('button');
        button.className = 'theme-toggle btn';
        button.setAttribute('aria-label', 'Toggle theme');
        button.style.cssText = `
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          padding: 0;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background-color: var(--background-color);
          color: var(--body-text-color);
        `;
        return button;
      }
  
      function updateButtonIcon(button, isDark) {
        button.innerHTML = isDark 
          ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
          : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
      }
  
      function initThemeToggle() {
        const container = document.getElementById('theme-toggle-container');
        if (!container) {
          console.error('Theme toggle container not found');
          return;
        }
  
        const button = createToggleButton();
        container.appendChild(button);
  
        function updateToggleState() {
          const currentTheme = getStoredTheme();
          updateButtonIcon(button, currentTheme === 'dark');
        }
  
        updateToggleState(); // Initial state
  
        button.addEventListener('click', function() {
          const newTheme = getStoredTheme() === 'dark' ? 'light' : 'dark';
          setStoredTheme(newTheme);
          updateToggleState();
        });
  
        // Handle changes triggered by other sources
        window.addEventListener('colorschemechange', function(e) {
          setStoredTheme(e.detail.colorScheme);
          updateToggleState();
        });
      }
  
      initThemeToggle();
    });
  })();
  
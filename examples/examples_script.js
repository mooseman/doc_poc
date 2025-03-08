

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBar = document.getElementById('toggle-bar');
  const toggleSymbol = document.getElementById('toggle-symbol');
  const mainContent = document.getElementById('main');

  // Themes object with CSS variables as keys
  const themes = {
    serene_blues: {
      '--body-bg': '#f4f9ff',
      '--text-color': '#34495e',
      '--sidebar-bg': '#d6e4f0',
      '--button-bg': '#4a90e2',
      '--button-text-color': '#ffffff', 
      '--button-hover': '#3b7fca',
      '--button-current': '#2c6fb5',
    },
    muted_greens: {
      '--body-bg': '#f3f8f3',
      '--text-color': '#2e4e2e',
      '--sidebar-bg': '#d6ebd6',
      '--button-bg': '#5cb85c',
      '--button-text-color': '#ffffff', 
      '--button-hover': '#4cae4c',
      '--button-current': '#3e8e3e',
    },
    soft_earth_tones: {
      '--body-bg': '#fefcf3',
      '--text-color': '#5f4b32',
      '--sidebar-bg': '#eae1d5',
      '--button-bg': '#d4a373',
      '--button-text-color': '#ffffff', 
      '--button-hover': '#c49360',
      '--button-current': '#a87545',
    },
    modern_grayscale: {
      '--body-bg': '#f7f7f7',
      '--text-color': '#333333',
      '--sidebar-bg': '#e0e0e0',
      '--button-bg': '#737373',
      '--button-text-color': '#ffffff', 
      '--button-hover': '#5a5a5a',
      '--button-current': '#444444',
    },
    lemon_daydream: {
      '--body-bg': '#fff9e6',
      '--text-color': '#333333',
      '--sidebar-bg': '#fff4cc',
      '--button-bg': '#ffe680',
      '--button-text-color': '#000000', 
      '--button-hover': '#ffd633',
      '--button-current': '#ffc800',
    },
    lilac_mist: {
      '--body-bg': '#f9f5ff',
      '--text-color': '#333333',
      '--sidebar-bg': '#f0e6ff',
      '--button-bg': '#d9b3ff',
      '--button-text-color': '#000000', 
      '--button-hover': '#c299ff',
      '--button-current': '#aa80ff',
    },
    apricot_sunset: {
      '--body-bg': '#fff7f0',
      '--text-color': '#333333',
      '--sidebar-bg': '#ffe5d1',
      '--button-bg': '#ffc9a6',
      '--button-text-color': '#000000', 
      '--button-hover': '#ffb489',
      '--button-current': '#ff9966',
    },
    neon_noir: {
      '--body-bg': '#000000',
      '--text-color': '#00ff00',
      '--sidebar-bg': '#333333',
      '--button-bg': '#006600',
      '--button-text-color': '#ffffff', 
      '--button-hover': '#008000',
      '--button-current': '#009900',
    },
    police_mode: {}
  };


  // Handle theme switching
const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('change', (event) => {
const selectedValue = event.target.value;

  // First remove any existing .police-mode class
  document.body.classList.remove('police-mode');

  // If the chosen theme is not 'police_mode', set the CSS variables
  if (selectedValue !== 'police_mode') {
    const selectedTheme = themes[selectedValue];
    for (const [cssVar, cssValue] of Object.entries(selectedTheme)) {
      document.documentElement.style.setProperty(cssVar, cssValue);
    }
  } else {
    // If 'police_mode' is chosen, add the police-mode class to <body>
    document.body.classList.add('police-mode');
  }
});


  // Immediately set the default theme to "serene_blues"
  const defaultTheme = 'serene_blues';
  themeSwitcher.value = defaultTheme;
  const selectedTheme = themes[defaultTheme];
  for (const [cssVar, cssValue] of Object.entries(selectedTheme)) {
    document.documentElement.style.setProperty(cssVar, cssValue);
  }


  // Sidebar toggle logic
  toggleBar.addEventListener('click', () => {
    const isClosed = sidebar.classList.contains('closed');
    if (isClosed) {
      // OPEN the sidebar
      sidebar.classList.remove('closed');
      toggleBar.classList.remove('closed');
      mainContent.classList.remove('closed');
      toggleSymbol.textContent = '<';
    } else {
      // CLOSE the sidebar
      sidebar.classList.add('closed');
      toggleBar.classList.add('closed');
      mainContent.classList.add('closed');
      toggleSymbol.textContent = '>';
    }
  });
});




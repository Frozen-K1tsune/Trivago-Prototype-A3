// Function to open another HTML page
function openWindow(page) {
// Redirect the current window to the specified page
window.location.href = page;
}
// On page load, check the saved theme from localStorage
window.onload = function () {
  const theme = localStorage.getItem('theme');
  if (theme) {
      // Apply the saved theme globally
      document.body.classList.add(theme);
  } else {
      // If no theme is saved, default to dark theme
      document.body.classList.add('dark-theme');
  }
};

// Toggle the theme on the account page
function toggleTheme() {
  const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';

  // Remove the current theme and set the new theme
  document.body.classList.remove(currentTheme);
  const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
  document.body.classList.add(newTheme);

  // Save the new theme to localStorage so it's persistent across pages
  localStorage.setItem('theme', newTheme);
}

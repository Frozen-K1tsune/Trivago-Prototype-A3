// Check if the theme preference is saved in localStorage when the page loads
window.onload = function () {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.classList.add(theme); // Apply saved theme
    } else {
        document.body.classList.add('dark-theme'); // Default theme if no preference
    }
};

// Toggle the theme when the button is clicked (only on the account page)
function toggleTheme() {
    const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';

    // Remove the current theme and set the new theme
    document.body.classList.remove(currentTheme);
    const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    document.body.classList.add(newTheme);

    // Save the selected theme in localStorage
    localStorage.setItem('theme', newTheme);
}

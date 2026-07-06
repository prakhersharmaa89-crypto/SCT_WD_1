// Selecting the navbar element from the DOM
const navbar = document.querySelector('.navbar');

// Adding a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the user has scrolled down more than 50 pixels
    if (window.scrollY > 50) {
        
        navbar.classList.add('scrolled');
    } else {
        
        navbar.classList.remove('scrolled');
    }
});
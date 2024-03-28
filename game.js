const loginBtn = document.querySelector('#login');
const loginModal = document.querySelector('.login-modal');
// JavaScript to hide preloader when page is fully loaded
// JavaScript to hide preloader when page is fully loaded
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
    loginModal.classList.toggle('show');

});
// Smooth scrolling to target section
document.getElementById('register-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the target section (register) using its ID
    const registerSection = document.getElementById('register');

    // Scroll to the target section smoothly
    registerSection.scrollIntoView({ behavior: 'smooth' });
});



// script.js
document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
});

// Dark/Light Mode Toggle
const modeToggleBtn = document.getElementById('mode-toggle-btn');
const modeIcon = document.querySelector('.material-icons');

// Search functionality
function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value;
    
    // Implement the desired search functionality here
    // Example: Redirect to a search results page
    if (searchInput.trim()) {
        window.location.href = `/search?query=${encodeURIComponent(searchInput)}`;
    }
}

document.getElementById('search-form').addEventListener('submit', handleSearch);
document.getElementById('search-button').addEventListener('click', handleSearch);

// Function to handle the "About Us" link click
function handleAboutLink(event) {
    event.preventDefault();
    // Show the About Us modal
    var aboutModal = new bootstrap.Modal(document.getElementById('aboutModal'));
    aboutModal.show();
}

// Add event listener to the "About Us" link
document.getElementById('about-link').addEventListener('click', handleAboutLink);


// Function to handle the close button click
function handleCloseButtonClick() {
    var aboutModal = document.getElementById('aboutModal');
    var modalInstance = bootstrap.Modal.getInstance(aboutModal);
    modalInstance.hide();
}

// Add event listener to the close button
document.querySelectorAll('.btn-close').forEach(function(button) {
    button.addEventListener('click', handleCloseButtonClick);
});

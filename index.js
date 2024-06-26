// Selectors
const navButtons = document.querySelectorAll('.oval-button');
const searchInput = document.querySelector('.search-input');
const loginButton = document.querySelector('.login-button');

function login() {
    // TO DO: implement login logic here
    console.log("Login button clicked!");
}

// Search input functionality
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (e) => {
    const searchQuery = e.target.value.trim();
    console.log(`Searching for: ${searchQuery}`);
    // TO DO: implement search logic here
});
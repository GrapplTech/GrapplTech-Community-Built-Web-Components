document.addEventListener("DOMContentLoaded", () => {
  function typeText(element, text, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  const welcomeText = document.querySelector(".welcome-text");
  const textContent = "Welcome to IT Edge";
  welcomeText.innerHTML = "";
  typeText(welcomeText, textContent, 100);
});

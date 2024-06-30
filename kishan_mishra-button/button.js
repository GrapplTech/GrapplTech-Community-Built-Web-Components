// button.js
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".btn-primary");

    button.addEventListener("mouseenter", function() {
        showTooltip("Task done by Kshan Mishra");
    });

    button.addEventListener("mouseleave", function() {
        hideTooltip();
    });

    function showTooltip(message) {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = message;
        
        // Position the tooltip relative to the button
        const buttonRect = button.getBoundingClientRect();
        tooltip.style.top = `${buttonRect.top - tooltip.offsetHeight}px`;
        tooltip.style.left = `${buttonRect.left + button.offsetWidth / 2 - tooltip.offsetWidth / 2}px`;

        document.body.appendChild(tooltip);
    }

    function hideTooltip() {
        const tooltip = document.querySelector(".tooltip");
        if (tooltip) {
            tooltip.parentNode.removeChild(tooltip);
        }
    }
});

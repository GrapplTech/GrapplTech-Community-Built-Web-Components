var button = document.querySelector(".search");

button.addEventListener("click", function onclick(event) {
  Viewer.toggleThumbnails();
  event.preventDefault();
});

function changeColor(element){
    element.style.color = 'white';
}

const images = document.querySelectorAll('#image');
        images.forEach(image => {
            image.addEventListener('click', () => {
                // Remove the 'selected' class from all images
                images.forEach(img => img.classList.remove('selected'));
                
                // Add the 'selected' class to the clicked image
                image.classList.add('selected');
            });
        });
document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("#navbar a");

    // Smooth scrolling
    navbarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for fixed navbar height
                behavior: "smooth"
            });
        });
    });

    // Active link highlighting
    window.addEventListener("scroll", function() {
        let currentSection = "";

        document.querySelectorAll("section").forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (window.pageYOffset >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navbarLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});


function exploreCourses() {
    window.location.href = '#courses';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if(name && email && message) {
        alert('Thank you for your message, ' + name + '. We will get back to you soon.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});




// JavaScript to add animation class on scroll
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('#section2 .feature');
    
    function checkScroll() {
        features.forEach(feature => {
            if (isElementInViewport(feature)) {
                feature.classList.add('animated');
            }
        });
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Initial check when the page loads
    checkScroll();
    
    // Check again on scroll
    window.addEventListener('scroll', checkScroll);
});

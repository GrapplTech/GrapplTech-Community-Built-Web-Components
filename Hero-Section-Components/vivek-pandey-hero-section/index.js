


const menuBtn=document.getElementById("menu-btn");
const crossBtn=document.getElementById("cross-btn");
const navBar=document.querySelector(".nav-bar");
const contact=document.querySelector(".contact-btn");





menuBtn.addEventListener("click",()=>{
    menuBtn.classList.add("hidden");
    crossBtn.classList.remove("hidden");
    navBar.style.display="block"
    contact.style.display="block"
})

crossBtn.addEventListener("click",()=>{
    menuBtn.classList.remove("hidden");
    crossBtn.classList.add("hidden");
      navBar.style.display="none"
      contact.style.display="none"
})




const cross = document.getElementsByClassName("cross");
const humburger = document.getElementsByClassName("hamburger");
const line = document.getElementsByClassName("links");


cross[0].addEventListener("click",()=>{
    if(humburger[0].classList.contains("active")){
        humburger[0].classList.remove("active");
        cross[0].classList.remove("active");
       
    }else{
        humburger[0].classList.add("active");
        cross[0].classList.add("active");
        
    }
})

// Main Section JS

let img=document.getElementsByClassName("img");
const images = ['Images/ngo_bg.jpg', 'Images/ngo_1.jpg','Images/ngo_2.jpg'];
let ind=0;

function change(){
    ind++;
    ind = (ind) % images.length;
    img[0].src = images[ind];
}


window.onload = function () {
    setInterval(change, 5000);
};
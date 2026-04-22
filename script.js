window.addEventListener("scroll", function(){

const header = document.getElementById("header");

if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

});

const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click",()=>{
navbar.classList.toggle("active");
});
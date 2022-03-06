var elHeader = document.querySelector(".site-header");
var elBtn = document.querySelector(".hamburg-btn");
var elList = document.querySelector(".navbar__list")

elBtn.addEventListener("click", function(){

    elHeader.classList.toggle("site-header--active");
})
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrolly > 0);
});
menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};
// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};                            
 


const sliderImg = document.getElementById("sliderImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

function changeImage(index) {
  sliderImg.src = images[index];
}

prevBtn.addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeImage(currentIndex);
});

nextBtn.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length;
  changeImage(currentIndex);
});



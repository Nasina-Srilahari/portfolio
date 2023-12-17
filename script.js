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
// // Dark Mode / light mode
// let darkmode = document.querySelector("#darkmode");
// darkmode.onclick = () => {
//   if (darkmode.classList.contains("bx-moon")) {
//     darkmode.classList.replace("bx-moon", "bx-sun");
//     document.body.classList.add("active");
//   } else {
//     darkmode.classList.replace("bx-sun", "bx-moon");
//     document.body.classList.remove("active");
//   }
// };                            
 

document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode / light mode
  let darkmode = document.querySelector("#darkmode");

  // Function to toggle dark mode
  function toggleDarkMode() {
    if (darkmode.classList.contains("bx-moon")) {
      darkmode.classList.replace("bx-moon", "bx-sun");
      document.body.classList.add("active");
    } else {
      darkmode.classList.replace("bx-sun", "bx-moon");
      document.body.classList.remove("active");
    }
  }

  // Initially set the page to dark mode
  toggleDarkMode();

  // Event listener for dark mode toggle
  darkmode.onclick = toggleDarkMode;

  // Rest of your existing code...

  // ...
});



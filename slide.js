
//getting dom elements
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
hamburger.addEventListener("click", () => {
    //addclassto enablesmooth slide animationof mobilenav
  sidebar.classList.toggle("open");
});

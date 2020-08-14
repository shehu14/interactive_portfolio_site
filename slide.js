
//getting dom elements
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
hamburger.addEventListener("click", () => {
    //addclassto enablesmooth slide animationof mobilenav
  sidebar.classList.toggle("open");
});
//changing img onmousehover
const avatar = document.getElementById("avatar");
    avatar.addEventListener("mouseover", () => {
    
      avatar.style.backgroundImage = "url('images/IMG_5778.JPG')";
    });
    //resetting it back
    avatar.addEventListener("mouseout", () => {
      avatar.style.backgroundImage = "url('images/IMG_4980.JPG')";
    });
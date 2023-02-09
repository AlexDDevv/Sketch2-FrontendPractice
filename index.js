const help = document.querySelector(".help-button");
const bot = document.querySelector(".bot-container");
const minus = document.querySelector(".btn-bot");
const openbar = document.querySelector(".opennav-container");
const closebar = document.querySelector(".cross");
const leftpart = document.querySelector(".left-part");
const rightpart = document.querySelector(".right-part");
const hamburger = document.getElementById("bars");
const wrap = document.getElementById("wrapwrap");

help.addEventListener("click", () => {
  help.style.transform = "translateY(100px)";
  help.style.opacity = 0;

  bot.classList.add("appear");
});

minus.addEventListener("click", () => {
  bot.classList.remove("appear");

  help.style.transform = "translateY(0)";
  help.style.opacity = 1;
});

research.addEventListener("click", () => {
  if ((openbar.style.display = "none")) {
    leftpart.style.display = "none";
    rightpart.style.display = "none";
    navbar.style.background = "white";
    openbar.style.display = "flex";
  } else {
    leftpart.style.display = "flex";
    rightpart.style.display = "flex";
    navbar.style.background = "black";
    openbar.style.display = "none";
  }
});
closebar.addEventListener("click", () => {
  navbar.style.background = "black";
  openbar.style.display = "none";
  leftpart.style.display = "flex";
  rightpart.style.display = "flex";
});

hamburger.addEventListener("click", () => {
  wrap.classList.toggle("active");
});

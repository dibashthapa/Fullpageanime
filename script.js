var isPhoneDevice = "ontouchstart" in document.documentElement;
var myFullpage = new fullpage("#fullpage", {
  verticalCentered: false,
  menu: "#mainNav",
  css3: false,
  scrollOverflow: true,
  normalScrollingElements: "#section2",
  slideSelector: ".sjbdsbdhb",
});
console.log($(window).width());
if ($(window).width() < 767) {
  $("#section7").addClass("fp-auto-height fp-noscroll");
}

const locations = document.querySelectorAll(".mobile .location");
const dots = document.querySelectorAll(".mobile .dot");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let index = 0;

prevBtn.addEventListener("click", function () {
  locations[index - 1].style.display = "block";
  if (locations[index - 1].style.display === "block") {
    locations[index].style.display = "none";
  }

  if (index === -1) {
    return;
  }
  index -= 1;
});

nextBtn.addEventListener("click", function () {
  locations[index].style.display = "block";
  if (index >= 1) {
    if (locations[index].style.display === "block") {
      locations[index - 1].style.display = "none";
    }
  }

  if (index === 6) {
    return;
  }

  index += 1;
});

nextBtn.addEventListener("click", function () {});

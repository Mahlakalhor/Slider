import './style.css'
const slidesEl = document.querySelectorAll(".slide");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
btnNext.addEventListener("click", () => {
  const currentEl = document.querySelector(".current");
  currentEl.classList.remove("current");
  if (currentEl.nextElementSibling) {
    currentEl.nextElementSibling.classList.add("current");
  } else {
    slidesEl[0].classList.add("current");
  }
});
btnPrev.addEventListener("click", () => {
  const currentEl = document.querySelector(".current");
  currentEl.classList.remove("current");
  if (currentEl.previousElementSibling) {
    currentEl.previousElementSibling.classList.add("current");
  } else {
    slidesEl[slidesEl.length - 1].classList.add("current");
  }
});
setInterval(() => {
  const currentEl = document.querySelector(".current");
  currentEl.classList.remove("current");
  if (currentEl.nextElementSibling) {
    currentEl.nextElementSibling.classList.add("current");
  } else {
    slidesEl[0].classList.add("current");
  }
}, 5000);
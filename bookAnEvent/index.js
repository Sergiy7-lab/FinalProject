let bg = document.querySelector(".block-paralax__img");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  bg.style.transform = `translateY(${(value - 1218) / 2}px)`;
  console.log(value);
});

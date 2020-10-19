let bg = document.querySelector(".block-paralax__img");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  bg.style.transform = `translateY(${(value - 430) / 2}px)`;
 
});

if (window.matchMedia("(max-width: 1680px)").matches) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg.style.transform = `translateY(${(value - 642) / 2}px)`;
    
  });
}

if (window.matchMedia("(max-width: 1440px)").matches) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg.style.transform = `translateY(${(value - 830) / 2}px)`;
    
  });
}


if (window.matchMedia("(max-width: 1024px)").matches) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg.style.transform = `translateY(${(value - 650) / 2}px)`;
    
  });
}

if (window.matchMedia("(max-width: 425px)").matches) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg.style.transform = `translateY(${(value - 700) / 2}px)`;
    
  });
}

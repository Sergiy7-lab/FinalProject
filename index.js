let bg = document.querySelector(".block-enjoy__paralax__img");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  bg.style.transform = `translateY(${(value - 1849) / 2}px)`;
});

let bg2 = document.querySelector(".block-event__paralax__img");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  bg2.style.transform = `translateY(${(value - 4011) / 2}px)`;
});

let bg3 = document.querySelector(".scoop-of-ice__paralax__img");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  bg3.style.transform = `translateY(${(value - 6271) / 2}px)`;
});

// ======================== 1680px ========================================

if (window.matchMedia("(max-width: 1680px)").matches) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg.style.transform = `translateY(${(value - 1670) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg2.style.transform = `translateY(${(value - 3576) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;

    bg3.style.transform = `translateY(${(value - 5550) / 2}px)`;
  });
}

// ======================== 1440px  ========================================

if (window.matchMedia("(max-width: 1440px)").matches) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg.style.transform = `translateY(${(value - 1551) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg2.style.transform = `translateY(${(value - 3188) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;

    bg3.style.transform = `translateY(${(value - 4930) / 2}px)`;
  });
}

// ======================== 1280px  ========================================

if (window.matchMedia("(max-width: 1280px)").matches) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg.style.transform = `translateY(${(value - 1540) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg2.style.transform = `translateY(${(value - 3000) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;

    bg3.style.transform = `translateY(${(value - 4930) / 2}px)`;
  });
}

// ======================== 1024px  ========================================

if (window.matchMedia("(max-width: 1024px)").matches) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg.style.transform = `translateY(${(value - 1265) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg2.style.transform = `translateY(${(value - 2421) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;

    bg3.style.transform = `translateY(${(value - 3782) / 2}px)`;
  });
}

// ======================== 768px  ========================================

if (window.matchMedia("(max-width: 768px)").matches) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg.style.transform = `translateY(${(value - 1159) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg2.style.transform = `translateY(${(value - 2035) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;

    bg3.style.transform = `translateY(${(value - 3014) / 2}px)`;
  });
}

// ======================== 425px  ========================================

if (window.matchMedia("(max-width: 425px)").matches) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg.style.transform = `translateY(${(value - 700) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    bg2.style.transform = `translateY(${(value - 1268) / 2}px)`;
  });

  window.addEventListener("scroll", function () {
    let value = window.scrollY;

    bg3.style.transform = `translateY(${(value - 2218) / 2}px)`;
  });
}

// ====================== slider ===================================

let position = 0;
const slidesToShow = 4;
const slidesToScroll = 4;
const container = document.querySelector(".slider__container");
const track = document.querySelector(".slider__track");
const items = document.querySelectorAll(".slider__item");

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

btnNext.addEventListener("click", () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transition = `${2}s`;
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
// ==================================== 00000 =============================

let width = items[0].offsetWidth;

let start;
let change;

track.addEventListener("dragstart", (e) => {
  start = e.clientX;
});

track.addEventListener("dragover", (e) => {
  e.preventDefault();
  let touch = e.clientX;
  change = start - touch;
});

track.addEventListener("dragleave", slideShow);

function slideShow() {
  if (change > 0) {
    const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  } else {
    const itemsLeft = Math.abs(position) / itemWidth;
    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  }
}

// ======================================

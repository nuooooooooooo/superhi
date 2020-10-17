const outputTag = document.querySelector("h2");
const nextTag = document.querySelector(".next");
const prevTag = document.querySelector(".prev");
const randomTag = document.querySelector(".random");
const circleTag = document.querySelector(".circle");
const bodyTag = document.querySelector("body");
const pages = [
  {
    copy: "a Brussels-based singer / songwriter",
    background: "#edc7a9",
    circle: "#3e78ed",
  },
  {
    copy: "a fan of nature and travelling",
    background: "#a1fffe",
    circle: "#e34a47",
  },
  {
    copy: "looking for a long term job in Switzerland",
    background: "#d3c7f3",
    circle: "#f7fe00",
  },
  { copy: "my good friend", background: "#faffb8", circle: "#b472e6" },
  {
    copy:
      "sharing <a href='https://www.youtube.com/watch?v=6_CrNE6UMRI&ab_channel=Zo%C3%A9Viu'>her music</a> with you",
    background: "#a9edac",
    circle: "#ed8d3e",
  },
];
let pageNumber = 0;

const goToNext = function () {
  pageNumber++;
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

const goToPrev = function () {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
  updateSection();
};

const goToRand = function () {
  pageNumber = Math.floor(Math.random() * pages.length);
  updateSection();
};

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

nextTag.addEventListener("click", function () {
  goToNext();
});

prevTag.addEventListener("click", function () {
  goToPrev();
});

randomTag.addEventListener("click", function () {
  goToRand();
});

document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowRight") {
    goToNext();
  } else if (event.key === "ArrowLeft") {
    goToPrev();
  }
});

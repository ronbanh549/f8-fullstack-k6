const carousel = document.querySelector(".carousel");

const carouselInner = document.querySelector(".carousel-inner");

const carouselDots = document.querySelector(".carousel-dots");

const nextBtn = document.querySelector(".carousel-nav .next");
const prevBtn = document.querySelector(".carousel-nav .prev");

var renderDots = function (indexDot = 0) {
  var dotsHtml = "";
  carouselItems.forEach(function (item, _index) {
    dotsHtml += `<span data-index="${_index}" ${
      _index === +indexDot ? 'class="active"' : ""
    }></span>`;
  });
  carouselDots.innerHTML = dotsHtml;

  carouselDots.addEventListener("click", function (e) {
    if (e.target.nodeName === "SPAN") {
      var indexClicked = e.target.dataset.index;
      index = indexClicked;
      goSlide();
    }
  });
};

var goSlide = function () {
  position = 0 - index * itemWidth;
  carouselInner.style.translate = `${position}px`;

  renderDots(index);
};

var carouselItems = carouselInner.querySelectorAll(".item");

// tinh kich thuoc 1 item
var itemWidth = carouselInner.clientWidth;

// tinh tong chieu rong cua tat ca item
var totalWidth = itemWidth * carouselInner.children.length;

// render Dots
renderDots();

var position = 0;
var index = 0;
// lang nghe su kien khi bam vao nut next
nextBtn.addEventListener("click", function () {
  console.log(position);
  if (Math.abs(position) >= totalWidth - itemWidth) {
    return;
  }
  position -= itemWidth;
  index++;
  carouselInner.style.translate = `${position}px`;
  renderDots(index);
});
prevBtn.addEventListener("click", function () {
  console.log(position);
  if (Math.abs(position) <= 0) {
    return;
  }
  position += itemWidth;
  index--;
  carouselInner.style.translate = `${position}px`;
  renderDots(index);
});

// Vuot chuyen slide
var isDrag = false;
var initialOffsetX = 0;
var moveWidth;

carousel.addEventListener("mousedown", function (e) {
  e.preventDefault();
  carousel.classList.add("drag");
});
carousel.addEventListener("mouseup", function (e) {
  e.preventDefault();
  carousel.classList.remove("drag");
});

carouselInner.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDrag = true;
    initialOffsetX = e.offsetX;
  }
});

carouselInner.addEventListener("mouseup", function () {
  isDrag = false;
  carouselInner.style.transition = null;

  if (moveWidth < 0) {
    if (Math.abs(moveWidth) > 100 && index < carouselItems.length - 1) {
      index++;
    }
    goSlide(index);
  } else {
    if (Math.abs(moveWidth) > 100 && index > 0) {
      index--;
    }
    position = 0 - index * itemWidth;
    carouselInner.style.translate = `${position}px`;

    goSlide(index);
  }
});

carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    moveWidth = e.offsetX - initialOffsetX;
    carouselInner.style.transition = "none";
    carouselInner.style.translate = `${position + moveWidth}px`;
  }
});

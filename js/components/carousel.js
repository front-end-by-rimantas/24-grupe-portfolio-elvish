//image carousel

let myIndex = 0;
let timeout;
function carousel() {
  const images = document.querySelectorAll('.carousel-img');

  for (const list of images) {
    list.classList.remove('slide');
  }
  myIndex++;
  if (myIndex > images.length) {
    myIndex = 1
  } 
    images[myIndex-1].classList.add('slide');

 timeout = setTimeout(carousel, 5000);
}

function stopTimeout() {
    clearTimeout(timeout)
}


// image slide on click

let slideIndex = 1;
slideShow(slideIndex);

const prvButton = document.querySelector('.slider-prv');
const nxtButton = document.querySelector('.slider-nxt');

prvButton.addEventListener('click', () => {
  stopTimeout()
  slideShow(slideIndex += -1)});
nxtButton.addEventListener('click', () => {
  stopTimeout()
  slideShow(slideIndex += 1)
});

function slideShow(n) {
  const images = document.querySelectorAll('.carousel-img');
  if (n > images.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = images.length
  }
  for (const list of images) {
    list.classList.remove('slide');
  }
  images[slideIndex-1].classList.add('slide');
}

export {carousel}
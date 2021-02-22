//image carousel

let myIndex = 0;
let timeout;
function carousel() {
  const images = document.querySelectorAll('.carousel-img');

  for (const list of images) {
    list.classList.remove('slide-back')
    list.classList.remove('slide');
  }
  myIndex++;
  if (myIndex > images.length) {
    myIndex = 1;
  } 
    images[myIndex-1].classList.add('slide');

 timeout = setTimeout(carousel, 5000);

}


// image slide on click

let slideIndex = 1;
// slideBack(slideIndex);
// slideForward(slideIndex);

const prvButton = document.querySelector('.slider-prv');
const nxtButton = document.querySelector('.slider-nxt');

prvButton.addEventListener('click', () => {
  clearTimeout(timeout)
  slideBack(slideIndex += -1);
});

nxtButton.addEventListener('click', () => {
  clearTimeout(timeout)
  slideForward(slideIndex += 1)
});

function slideBack(n) {
  const images = document.querySelectorAll('.carousel-img');
  if (n > images.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = images.length
  }
  for (const list of images) {
    list.classList.remove('slide');
    list.classList.remove('slide-back');
  }
  images[slideIndex-1].classList.add('slide-back');
}

function slideForward(n) {
  const images = document.querySelectorAll('.carousel-img');
  if (n > images.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = images.length
  }
  for (const list of images) {
    list.classList.remove('slide-back')
    list.classList.remove('slide');
  }
  images[slideIndex-1].classList.add('slide');
}

export {carousel}
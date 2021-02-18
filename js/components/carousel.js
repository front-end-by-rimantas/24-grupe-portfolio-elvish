let myIndex = 0;

function carousel() {
  const images = document.getElementsByClassName("carousel-img");
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('slide');
  }
  myIndex++;
  if (myIndex > images.length) {
    myIndex = 1
  } 
    images[myIndex-1].classList.add('slide');

  setTimeout(carousel, 5000);
}

export {carousel}
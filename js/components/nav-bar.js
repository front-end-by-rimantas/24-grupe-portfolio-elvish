const navbar = document.querySelector('.nav-bar');
const whiteLogo = document.querySelector('.white-logo');
const blackLogo = document.querySelector('.black-logo');
let dropList = document.getElementsByClassName('drop-nav-link')
let dots = document.querySelectorAll('.drop-nav-link:hover::before')
const hamWhite = document.querySelector('.ham');
const hamWhiteOne = document.querySelector('.hamOne');
const hamWhiteTwo = document.querySelector('.hamTwo');
const navScroll = window.onscroll = () => {
    if (window.scrollY > 60) {
        navbar.classList.add('nav-active');
        hamWhite.classList.add('ham-active')
        hamWhiteOne.classList.add('ham-active')
        hamWhiteTwo.classList.add('ham-active')
        whiteLogo.style.display = "none"
        blackLogo.style.display = "block"
        for(let i=0; i<dropList.length; i++) {
    
            dropList[i].style.color = "var(--text-gray)"
        }
        hamWhite.style.display ="block"
        hamWhiteOne.style.display ="block"
        hamWhiteTwo.style.display ="block"

        
        
    } else {
        navbar.classList.remove('nav-active');
        hamWhite.classList.remove('ham-active')
        hamWhiteOne.classList.remove('ham-active')
        hamWhiteTwo.classList.remove('ham-active')
        whiteLogo.style.display = "block"
        blackLogo.style.display = "none"
        for(let i=0; i<dropList.length; i++) {
  
          dropList[i].style.color = "white"
      }
        hamWhite.style.display ="block"
        hamWhiteOne.style.display ="block"
        hamWhiteTwo.style.display ="block"
    }
    
};

export {navScroll}
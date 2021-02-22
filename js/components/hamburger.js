function ham() {
    const DOM = document.getElementsByClassName("hamburger")
    
    let i = '';
    
    for (i = 0; i<DOM.length; i++) {
        DOM[i].addEventListener('click', function () {
            this.classList.toggle('active');
            const DOMlink = document.querySelector(".drop-down-links")
            if(DOMlink.style.display === 'block') {
                DOMlink.style.display = 'none';
        
               } else {
                 DOMlink.style.display = 'block'
            }
        })
    }
 
}
export {ham};
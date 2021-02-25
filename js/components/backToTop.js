function backToTop(){
    const arrowButton = document.querySelector('.top-link');

    addEventListener('scroll', () => {
        if (scrollY < 50) {
        arrowButton.classList.add('hidden');
        }
        if (scrollY > 50)
        arrowButton.classList.remove('hidden');
    });
};

export {backToTop};
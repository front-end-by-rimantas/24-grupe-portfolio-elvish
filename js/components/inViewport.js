function inViewport(element) {
    const section = document.querySelector(element)
    const pozition = section.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const isInViewport = pozition.top >= 0 &&
        pozition.left >= 0 &&
        pozition.bottom <= viewportHeight &&
        pozition.right <= viewportWidth;
    console.log(isInViewport);
    if (isInViewport === true) {
        return true;
    }

}

export { inViewport }
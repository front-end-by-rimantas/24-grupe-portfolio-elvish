
function inViewport(element) {

    const section = document.querySelector(element)
    const top = section.offsetTop;
    const left = section.offsetLeft;
    const width = section.offsetWidth;
    const height = section.offsetHeight;

    while (element.offsetParent) {
        element = element.offsetParent;
        top += element.offsetTop;
        left += element.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );

}

export { inViewport }
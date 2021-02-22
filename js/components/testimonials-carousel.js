function owlKarouel() {
    $(".slider").owlCarousel({
        items: 1,
        loop: false,
        mouseDrag: true,
        rewind: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    })
}

export { owlKarouel }
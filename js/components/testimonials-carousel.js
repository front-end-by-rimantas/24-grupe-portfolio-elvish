function owlKarousel() {
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: true,
        rewind: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    })
}

export { owlKarousel }

import { testimonials } from '../data/testimonialsData.js';

const DOM = document.querySelector('.slider');
let HTML = '';

for (let i = 0; i < testimonials.length; i++) {
    const review = testimonials[i];

    HTML += `
            <div class="card">
                <div class="testimonial">
                    <i class="fa fa-user"></i>
                    <div class="content">
                        <h3 class="carousel-names">${review.name}</h3>
                        <p>${review.text}</p>
                    </div>
                </div>
            </div>
            `;

}

DOM.innerHTML = HTML;
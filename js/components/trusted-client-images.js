import { trustedImages } from '../data/trustedClientsData.js';

function renderImages() {
    const DOM = document.querySelector('.client-logos');
    let HTML = '';

    for (let i = 0; i < trustedImages.length; i++) {
        const picElement = trustedImages[i];

        HTML += `<img src="./img/Trusted-people/${picElement.href}.png" alt="${picElement.href}">`

    }
    DOM.innerHTML = HTML;
}

export { renderImages }
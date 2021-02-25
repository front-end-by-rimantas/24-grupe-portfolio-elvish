function services(data) {
    if (typeof data === Array.isArray(data) ||
        data === {}) {
        return 'netinkamas data objektas'
    }

    const keys = Object.keys(data);
    const DOM = document.querySelector(data.selector);
    let HTML = '';



    if (!Array.isArray(data.list)) {
        return false;
    }

    for (const list of data.list) {
        HTML += `<div class="service-col">
        <div class="service-content">
            <div class="service-icon">
                <i class="${list.icon}"></i>
            </div>
            <div class="service-texts">
                <h5 class="service-heading">${list.heading}</h5>
                <p class="service-text">${list.text}</p>
            </div>
        </div>
    </div>`


    }

    DOM.innerHTML = HTML;



}
export { services }
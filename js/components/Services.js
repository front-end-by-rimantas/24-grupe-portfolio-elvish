class Services {
    constructor(selector, data) {
        this.data = data;
        this.selector = selector;
        this.Dom = '';
        // this.heading = this.data.heading;
        // this.text = this.data.text;
        // this.icon = this.data.icon;
        this.init()
    }

    init() {
        this.renderServices()
    }

    generateServices(data) {

        return <div class="service-col">
            <div class="service-content">
                <div class="service-icon">
                    <i class="">icon</i>
                </div>
                <div class="service-texts">
                    <h5 class="">${data.heading}</h5>
                    <p class="service-text">${data.text}</p>
                </div>
            </div>
        </div>
    }

    renderServices() {
        let HTML = '';

        for (const content of this.data) {
            HTML += generateServices(content)
        }

        this.DOM = document.querySelector(this.selector)
        this.DOM.innerHTML += HTML;
    }
}

export { Services }
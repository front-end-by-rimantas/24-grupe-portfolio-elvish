import { inViewport } from './inViewport.js'
class ProgressBar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.Dom = null;
        this.init();
    }

    init() {
        if (!this.isValidSelector() || !this.isValidData) {
            return false;
        }

        this.render();
        this.addEvent();

    }

    isVisible() {
        const visableSection = document.querySelectorAll('[data-inviewport]');

        for (let i = 0; i < visableSection.length; i++) {
            visableSection[i].classList.add('loading');
        }
    }

    addEvent() {
        window.addEventListener('scroll', () => {
            if (inViewport('.progress-bars')) {
                this.isVisible();

            }
        })
    }




    isValidSelector() {
        if (typeof this.selector !== 'string' || typeof this.selector === '') {
            console.error('Error: netinkamo formato this.selector')
            return false
        }
        const DOM = document.querySelector(this.selector)

        if (!DOM) {
            console.error('Error: elementas duotu selektoriumi nerastas')
            return false
        }

        this.DOM = DOM;
        return true;
    }

    isValidData() {
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            console.error(`Error: netinkamo formato this.data`)
            return false;
        }
        return true;
    }

    isValidProgressBar(progressBar) {
        if (typeof progressBar !== 'object' ||
            Array.isArray(progressBar) ||
            progressBar === null ||
            !progressBar.label ||
            typeof progressBar.label !== 'string' ||
            progressBar.label.trim() === '' ||
            typeof progressBar.value !== 'number' ||
            !isFinite(progressBar.value) ||
            progressBar.value > 100 ||
            progressBar.value < 0) {
            console.warn('Warning: netinkamo formato objektas', progressBar)
            return false;
        }
        return true
    }

    formatNumber(number) {
        return Math.round(number);
    }

    generateProgressBar(progressBar) {
        return `<div class="progress-bar">
                    <div class="pTexts">
                        <div class="pLabel">${progressBar.label}</div>
                        <div class="pValue">${progressBar.value}%</div>
                    </div>
                    <div class="bar">
                        <div class="progress" style="width:${this.formatNumber(progressBar.value)}%; ">
                            <div data-inviewport="" class=""></div>
                        </div>
                    </div>
        
                </div>`
    }

    render() {
        let HTML = '';



        for (const progress of this.data) {
            if (!this.isValidProgressBar(progress)) {
                continue;
            }

            HTML += this.generateProgressBar(progress)

        }


        this.DOM.innerHTML += HTML;

    }


}

export { ProgressBar }



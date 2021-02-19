class SubForm {
    constructor(form) {
        this.form = form;
        this.subscribe();
    }

    subscribe() {

        const entry = form.querySelectorAll('#sub-email');
        const subButton = form.querySelector('.sub-form-btn');          // create button variable

        subButton.addEventListener('click', (event) => {          // create event for button
            event.preventDefault();

            for (const input of entry) {
                const rule = input.dataset.validationRule;
                const text = input.value;

                switch (rule) {
                    case 'name':
                        console.log(Validation.isValidName(text));
                        break;
                    case 'email':
                        console.log(Validation.isValidEmail(text));
                        break;
                    case 'text':
                        console.log(Validation.isValidText(text));
                        break;

                    default:
                        break;
                }
            }
        })
    }
}

export { SubForm }

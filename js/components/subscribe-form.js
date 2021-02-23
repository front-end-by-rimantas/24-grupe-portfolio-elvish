const form = document.querySelector('.sub-form');
const email = document.querySelector('#sub-email');


function forms() {
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        email.value.trim();
        email.value = '';
    })
}

export { forms }

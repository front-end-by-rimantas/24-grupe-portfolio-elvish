import { inViewport } from '../inViewport.js'

function countUp() {

    const counters = document.querySelectorAll('.count-num');
    let countNumber = null;

    window.addEventListener('scroll', function () {

        if (inViewport('.statistics') === true) {

            counters.forEach(counter => {

                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    countNumber = target;


                    if (count < target) {
                        counter.innerText = count + 5;
                        setTimeout(updateCount, 40)
                    }
                    else {
                        counter.innerText = target;
                    }

                }
                updateCount()



            })
        }
    })

}

export { countUp }
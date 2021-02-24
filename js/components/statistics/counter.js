function countUp() {

    const counters = document.querySelectorAll('.count-num');
    const speed = 200;
    counters.forEach(counter => {

        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;


            if (count < target) {
                counter.innerText = count + 5;
                setTimeout(updateCount, 1)
            }
            else {
                counter.innerText = target;
            }

        }

        updateCount();
    })
}

export { countUp }
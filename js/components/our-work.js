import {workData} from '../data/our-work-data.js'
//dabar
let displayContainer = document.querySelector('.display-container');
const filterBtns = document.querySelectorAll('.filter-btn');


function renderWorkSection(){
    //loads items
window.addEventListener('DOMContentLoaded', function(item){
renderItems(workData);
});
};


//filter items
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.id;
        const itemCategory = workData.filter(function(item){
            //loops through categories
            for (let i of item.categories)
            if (i === category){
                return item;
            }
        });
      
        if (category === 'all') {//if selected all, then renders all.
            renderItems(workData)
        } else{ //renders category that matches
            renderItems(itemCategory);
        }

    });
});

//renders items from data file
function renderItems(items){
    let display = items.map(function(item){
    return `<article style="background-image: url(${item.img});" class="display-item">
                    <div class="display-item-text">
                        <h4>${item.title}</h4>
                        <h5>${item.description}</h5>
                    </div>
                </article>`

});
display = display.join('');
displayContainer.innerHTML = display;
}


export {renderWorkSection};

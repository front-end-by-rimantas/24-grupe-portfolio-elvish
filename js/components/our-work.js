import {workData} from '../data/our-work-data.js';
//dabar
let displayContainer = document.querySelector('.display-container');
const btnContainer = document.querySelector('.btn-container');




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

//dynamycaly renders buttons with UNIQUE category names and filters accordingly
function displayMenuButtons(){
    const categories = workData.reduce(function(values, item){
        for (let i of item.categories){
            
                if(!values.includes(i)){
                    values.push(i);
                }
            }
            return values;
            
        },['all']);
        
        
        
        //renders btns from categories
        const categoryBtns = categories.map(function(category){
            return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
        }).join('')
        
        btnContainer.innerHTML = categoryBtns;
        
        const filterBtns = document.querySelectorAll('.filter-btn');

        //filters items
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
};

//function fo export:
function renderWorkSection(){
    //loads items 
    window.addEventListener('DOMContentLoaded', function(item){
        renderItems(workData);
        
        //dynamycaly makes array of UNIQUE categories and renders buttons
        displayMenuButtons();
});
};


export {renderWorkSection};

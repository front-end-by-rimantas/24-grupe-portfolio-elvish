import {workData} from '../data/our-work-data.js';
//dabar
let displayContainer = document.querySelector('.display-container');
const btnContainer = document.querySelector('.btn-container');

const modalOverlay = document.querySelector('.modal-overlay')






//capitalizes string
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}



//renders items from data file
function renderItems(items){
    let display = items.map(function(item){

        return `<article data-item-id='${item.id}' style="background-image: url(${item.img});" class="display-item">
        <div class="display-item-text">
        <h4>${toTitleCase(item.title)}</h4>
        <h5> ${item.description} </h5>
        </div>
        </article>`
        
    });
    display = display.join('');

    displayContainer.innerHTML = display;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // modal----------------------------------------------------------
    const imageView = document.querySelector('.image-view');
    const displayItems = document.querySelectorAll('.display-item')
    const imageBox = document.querySelector('.image-box');
    const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const allImages = document.querySelectorAll('.display-item');


    let currentImageIdx = 1;

    imageView.addEventListener('click', function(){
    this.style.display = 'none';
    imageBox.style.display = 'none';
    } )
    


    displayItems.forEach(function(item, index){
        item.addEventListener('click', function(){
        imageView.style.display = 'block';
        imageBox.style.display = 'block';
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);

    });
    });

    function currentImageDisplay(position){
    imageBox.style.background = `url(../img/work/${currentImageIdx}.jpg) center/cover no-repeat`;
    };

    prevBtn.addEventListener('click', function(){
    currentImageIdx--;
    if(currentImageIdx === 0){
        currentImageIdx = allImages.length;
    }
    currentImageDisplay(currentImageIdx);

})

nextBtn.addEventListener('click', function(){
    currentImageIdx++;
    if(currentImageIdx === allImages.length +1 ){
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);

})

imageBox.addEventListener('click', function(){
    currentImageIdx++;
    if(currentImageIdx === allImages.length +1 ){
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);

})

    










}








    


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
            
            return `<button class="filter-btn" type="button" data-id="${category}">${toTitleCase(category)}</button>`
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

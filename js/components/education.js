import {educationData} from '../data/education-data.js'


const rightColumn = document.querySelector('.right-column');
const leftColumn = document.querySelector('.left-column');



function renderEduItems(){

    //filters items for left column
    let leftItems = educationData.filter(function(item){
        if (item.place === 'left-column'){
            return item;
        }
    });
    
    //filters items for right column
    let rightItems = educationData.filter(function(item){
        if (item.place === 'right-column'){
            return item;
        }
    });
    
    //renders html 
function renderHtml(array){
let innerHtml = array.map(function(item){
        return `<div class="education-item">
                    <h4 class="dot-parent">${item.yearsFrom} - ${item.yearsTo} <span class='dot'></span></h4>
                    <h3>${item.achievement}</h3>
                    <p>${item.descriptionText}</p>
                </div>`
    }).join('');

    return innerHtml;
    };


leftColumn.innerHTML = renderHtml(leftItems);
rightColumn.innerHTML = renderHtml(rightItems);

};

function renderEducationSection(){
renderEduItems()

}

export {renderEducationSection}
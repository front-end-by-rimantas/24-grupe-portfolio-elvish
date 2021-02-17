import {workData} from '../data/our-work-data.js'

let displayContainer = document.querySelector('.display-container');

function renderWorkSection(){
window.addEventListener('DOMContentLoaded', function(item){
let display = workData.map(function(item){
    return `<article style="background-image: url(${item.img});" class="display-item">
                    <div class="display-item-text">
                        <h4>${item.title}</h4>
                        <h5>${item.description}</h5>
                    </div>
                </article>`

});

display = display.join('');
displayContainer.innerHTML = display;


});
}




export {renderWorkSection};

function renderBlog(data) {
    //input validation
    if (typeof data !== 'object' ||
        Array.isArray(data)) {
        return 'Invalid data format';
    }

    const allowedKeys = ['selector', 'items'];
    const keys = Object.keys(data);
    if (keys.length !== 2) {
        return 'Object keys missing';
    }

    for (const key of keys) {
        if (!allowedKeys.includes(key)) {
        return `Unknown key "${key}"`;
        }
    }
    //logic
    const validSelector = '#blog_section';
    const isValidSelector = data.selector === validSelector ? data.selector : false;
    const blogData = data.items;

    const DOM = document.querySelector(isValidSelector);
    let HTML = '';
    
    
    for (const dataItem of blogData){

        if ('video' in dataItem){
            HTML += ` <div class="box">
            <div class="box-img">
            <img src="${dataItem.image}" alt="blog image">
            <a class="blog-video" href="${dataItem.video}"><i class="fas fa-play"></i></a>
            </div>
            <div class="box-text">
            <h3 class="box-title"><a href="#">${dataItem.title}</a></h3>
            <p class="box-category"><a href="#">${dataItem.category}</a></p>
            <p class="box-date">${dataItem.date} <a href="#">${dataItem.author}</a></p>
            <p class="box-text">${dataItem.article}</p>
            <a class="read-more" href="#">Read more...</a>
            </div>
            </div>`  
            continue;
        }

        if (dataItem.image.length > 1) {
            HTML += ` <div class="box">
            <div class="box-img">
            ${dataItem.image.map(img => `<img class="carousel-img" src="${img}" alt="blog image">`).join('')}
            <a class="slider-prv"><span>&#10094;</span></a>
            <a class="slider-nxt"><span>&#10095;</span></a>
            </div>
            <div class="box-text">
            <h3 class="box-title"><a href="#">${dataItem.title}</a></h3>
            <p class="box-category"><a href="#">${dataItem.category}</a></p>
            <p class="box-date">${dataItem.date} <a href="#">${dataItem.author}</a></p>
            <p class="box-text">${dataItem.article}</p>
            <a class="read-more" href="#">Read more...</a>
            </div>
            </div>`
            continue;
        }
        
        else {
            HTML += ` <div class="box">
            <div class="box-img">
            <img src="${dataItem.image}" alt="blog image">
            </div>
            <div class="box-text">
            <h3 class="box-title"><a href="#">${dataItem.title}</a></h3>
            <p class="box-category"><a href="#">${dataItem.category}</a></p>
            <p class="box-date">${dataItem.date} <a href="#">${dataItem.author}</a></p>
            <p class="box-text">${dataItem.article}</p>
            <a class="read-more" href="#">Read more...</a>
            </div>
            </div>`
            }
    };
        
    //post validation
    if (HTML === ''){
        return 'No valid data was found.'
        }
    //return result
    DOM.innerHTML = HTML;
};  


export {renderBlog};

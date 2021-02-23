function renderBlog(data) {
    //input validation
    
    //logic
    let selector = '';
    const validSelector = '#blog_section';
    const isValidSelector = data.selector === validSelector ? selector = data.selector : false;
    const blogData = data.items;

    const DOM = document.querySelector(selector);
    let HTML = '';
    console.log(data);
    
    
    for (let i = 0; i < blogData.length; i++){
        const dataItem = blogData[i]
        
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
        }

        let img = ''
        if (Array.isArray(dataItem.image)) {
            for(let i = 0; i < dataItem.image.length; i++){
                img += `<img class="carousel-img" src="${dataItem.image[i]}" alt="blog image">`
            }
            HTML += ` <div class="box">
            <div class="box-img">
                ${img}     
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
    
    //return result
    DOM.innerHTML = HTML;
};  


export {renderBlog};

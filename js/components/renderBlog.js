function renderBlog(data) {
    //input validation
    
    //logic
    let selector = '';
    const validSelector = '#blog_section';
    const isValidSelector = data.selector === validSelector ? selector = data.selector : false;
    const blogData = data.items;

    const DOM = document.querySelector(selector);
    let HTML = '';
    
    
    for (let i = 0; i < blogData.length; i++){
        const dataItem = blogData[i]
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
    };
    
    
    
    //post validation
    
    //return result
    DOM.innerHTML = HTML;
};  


export {renderBlog};

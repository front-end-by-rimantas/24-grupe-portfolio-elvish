function contactValidation (selector) {

    if (typeof selector !== 'string' ||            
        selector === '') {                          
        console.error('ERROR: Invalid selector format');
        return false;
    }

    // find all given selectors (form)
    const form = document.querySelectorAll(selector)
    if(!form) {
        console.error ('ERROR: Cannot find given selector')
        return false
    }
    
    //save forms into array for iteration
    const forms = [...form];

    //find snackbar element
    const snackbar = document.getElementById('snackbar')
    
    // go through array on forms
    for (const items of forms) {
        
        // find fields needed (button, input, textarea)
        const button = items.querySelector('.btn');
        const inputs = items.querySelectorAll('input');
        const textareas = items.querySelectorAll('textarea');
        
        // save all data into array for iteration
        const allInputs = [...inputs, ...textareas];
        
        // set event listener to prevent button default action
        button.addEventListener('click', event => {
            event.preventDefault()
            // go through all inputs and textareas to find data- rules
            for (const input of allInputs) {
                // save data rules into variable
                const rule = input.dataset.validation;
                // save input data into variable
                const text = input.value;
                

                if (rule === 'name' && 
                isValidName(text) !== true){
                snackbar.className = "show"
                snackbar.innerHTML = isValidName(text)
                setTimeout(function(){snackbar.className = snackbar.className.replace("show", ""); }, 3000);
                return false
            } 
                
            if (rule === 'email' &&
                isValidEmail(text) !== true){
                snackbar.className = "show"
                snackbar.innerHTML = isValidEmail(text)
                setTimeout(function(){snackbar.className = snackbar.className.replace("show", ""); }, 3000);
                return false
            }

            if (rule === 'subject' &&
                isValidSubject(text) !== true){
                snackbar.className = "show"
                snackbar.innerHTML = isValidSubject(text)
                setTimeout(function(){snackbar.className = snackbar.className.replace("show", ""); }, 3000);
                return false;
            } 

            if (rule === 'text' &&
                isValidText(text) !== true){
                snackbar.className = "show"
                snackbar.innerHTML = isValidText(text)
                setTimeout(function(){snackbar.className = snackbar.className.replace("show", ""); }, 3000);
                return false;
                }  
                    
            
            if (isValidName() !== false &&
                isValidEmail() !== false &&
                isValidText() !== false){
                    snackbar.className = "success"
                    snackbar.innerHTML = 'Success!!!'
                    setTimeout(function(){snackbar.className = snackbar.className.replace("success", ""); }, 3000);
                }
            };
        });
    };
};

/*****************  Main data validation functions *****************/

function isValidName(name) {
    // check for empty text
    if (!isNonEmptyText(name)) {
        return 'Name field must not be empty';
        
    }

    // check for spaces around
    if (!noSpacesAround(name)) {
        return 'Should be no spaces in front of the name';
    }

    // check if more than one word
    if (!isSingleWord(name)) {
        return 'Name should be one word';
    }

    // check first letter is uppercase
    if (!isFirstLetterUppercase(name)) {
        return 'Name first letter must be uppercase';
    }

    // check remaining letters are lowercase
    if (!isLowercaseButFirst(name)) {
        return 'All remaining letters after first must be lowercase';
    }

    // check no numbers are present
    if (!onlyAlphabetLetters(name)) {
        return 'Name field must contain only letters';
    }

    return true;

}

function isValidEmail(email){
     // check for empty text
     if (!isNonEmptyText(email)) {
        return 'Email field must not be empty';
    }

    // check for spaces around
    if (!noSpacesAround(email)) {
        return 'Should be no spaces in front of the email';
    }

    // check for more than one @ symbol
    if (!textContainsLetter(email, '@')) {
        return 'Email field must contain one @ symbol.';
    }

    const emailParts = email.split('@');
    // check email local part is not empty
    if (!isNonEmptyText(emailParts[0])) {
        return 'Local part of email must not be empty';
    }

    // check email domain part is not empty
    if (!isNonEmptyText(emailParts[1])) {
        return 'Domain part of email must not be empty';
    }
    return true;

}

function isValidSubject(text){

    // check for empty text
    if (!isNonEmptyText(text)) {
        return 'Subject should not be empty.';
    }

    // check for spaces around
    if (!noSpacesAround(text)) {
        return 'Should be no spaces around text';
    }
    return true;
}

function isValidText(text){

    // check for empty text
    if (!isNonEmptyText(text)) {
        return 'Message text should not be empty.';
    }

    // check for spaces around
    if (!noSpacesAround(text)) {
        return 'Should be no spaces around text';
    }
    return true;

}


/***************** Functions helpers *****************/


function isNonEmptyText(text) {
    if (typeof text !== 'string' ||
        text === '') {
        return false;
    }
    return true;
}

function isSingleWord(text) {
    return !text.includes(' ');
}

function isFirstLetterUppercase(text) {
    return text[0] === text[0].toUpperCase();
}

function noSpacesAround(text) {
    return text === text.trim();
}

function isLowercaseButFirst(text) {
    const rest = text.slice(1);
    return rest === rest.toLowerCase();
}

function textContainsLetter(text, letter, count = 1) {
    let letterCount = 0;
    for (let symbol of text) {
        if (symbol === letter) {
            letterCount++;
        }
    }

    return letterCount === count;
}

function onlyAlphabetLetters(text) {
    const uppercase = text.toUpperCase();
    const lowercase = text.toLowerCase();
    const size = text.length;

    for (let i = 0; i < size; i++) {
        if (uppercase[i] === lowercase[i]) {
            return false;
        }
    }
    return true;
}

export {contactValidation}
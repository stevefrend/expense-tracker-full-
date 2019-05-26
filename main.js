
const allCategories = [];

// Variables and event listeners





const mainDiv = document.getElementById('categories');
const newCategoryForm = document.querySelector('#new-category-form');
const category = document.getElementById('category');
newCategoryForm.addEventListener('submit', addNewCategoryToPage);

function addNewCategoryToPage(e) {
    e.preventDefault();
    let categoryName = category.value.toLowerCase();    
    function createNewHTML (categoryName) {
        let newDiv = document.createElement('div');
        let newForm = document.createElement('form');
        let newLabel = document.createElement('label');
        let newInputNumber = document.createElement('input');
        let newInputComment = document.createElement('input');
        let newButtonEnter = document.createElement('button');

        newDiv.id = categoryName + '-div';
        newDiv.className = 'category-div'
        newForm.id = categoryName + '-form';

        newLabel.htmlFor = categoryName;
        newLabel.textContent = categoryName;

        newInputNumber.id = categoryName + '-number';
        newInputNumber.type = 'number';
        newInputNumber.required = true;
        newInputNumber.placeholder = 'amount';

        
        newInputComment.id = categoryName + '-comment';
        newInputComment.type = 'text';
        newInputComment.placeholder = 'comment';
        

        newButtonEnter.id = categoryName + '-enter'
        newButtonEnter.type = 'submit';
        newButtonEnter.textContent = 'Enter'
        
        newDiv.appendChild(newForm);
        newForm.appendChild(newLabel);
        newForm.appendChild(newInputNumber);
        newForm.appendChild(newInputComment);
        newForm.appendChild(newButtonEnter);
        
        mainDiv.appendChild(newDiv);
        newCategoryForm.reset();   
        
    }
    createNewHTML(categoryName);

    // CREATE EVENT LISTENER FOR NEW SUBMIT AND ADD TO ARRAY, ALSO PREVENT DEFAULT
    const form = document.getElementById(categoryName + '-form');
    const amountInput = document.getElementById(categoryName + '-number');
    const commentInput = document.getElementById(categoryName + '-comment');
    
    form.addEventListener('submit', addToArray);
    function addToArray (e) {
        e.preventDefault();
        let inputValue = Number(amountInput.value);
        let textValue = commentInput.value;
        allCategories.push({category: categoryName, amount: inputValue, comment: textValue, date: new Date().toDateString()});
        console.table(allCategories)
    }
    
    

}

 








//1. make a function to add a new catogory in html, then make a netural function for adding to a category. will need to pull ID from category somehow


// - make a functions that: adds the html elements to the page with appendChild

// 2. find out how to not enter a value if it's empty

// 3. learn JSON saving




const allExpenses = [];
const allCategories = [];



const newCategory = document.getElementById('category');

const newCategoryForm = document.querySelector('#new-category-form');
const newExpenseForm = document.querySelector('#new-expense-form');
const amountInput = document.getElementById('amount-input');
const commentInput = document.getElementById('comment-input');


newCategoryForm.addEventListener('submit', addNewCategoryToPage);
newExpenseForm.addEventListener('submit', addExpense);

function addNewCategoryToPage(e) {
    e.preventDefault();
    let categoryName = newCategory.value.toLowerCase(); 
    
       
    
    function createNewHTML (categoryName) {
        let newCategoryRadio = document.createElement('input');
        let newCategoryLabel = document.createElement('label');
        
        newCategoryRadio.id = categoryName + '-radio';
        newCategoryRadio.type = 'radio';
        newCategoryRadio.value = categoryName;
        newCategoryRadio.name = 'CategoryName'
        newCategoryRadio.className = 'categories-class';
        newCategoryRadio.required = true;

        newCategoryLabel.for = categoryName;
        newCategoryLabel.textContent = categoryName;
        
        newExpenseForm.appendChild(newCategoryRadio);
        newExpenseForm.appendChild(newCategoryLabel);
        
        newCategoryForm.reset();   
        
    }
    createNewHTML(categoryName);
    allCategories.push(categoryName);  
      
}

function addExpense (e) {
    e.preventDefault();
    let categoryName = newCategory.value.toLowerCase(); 
    let inputValue = Number(amountInput.value);
    let textValue = commentInput.value;

    // make variable with loop that returns the name of the selected radio

    allExpenses.push({category: , amount: inputValue, comment: textValue, date: new Date().toDateString()});
    console.log(allExpenses);

}


// // CREATE EVENT LISTENER FOR NEW SUBMIT AND ADD TO ARRAY, ALSO PREVENT DEFAULT
// const form = document.getElementById(categoryName + '-form');
// const amountInput = document.getElementById(categoryName + '-number');
// const commentInput = document.getElementById(categoryName + '-comment');

// form.addEventListener('submit', addToArray);

// function addToArray (e) {
//     e.preventDefault();
//     let inputValue = Number(amountInput.value);
//     let textValue = commentInput.value;
//     allExpenses.push({category: categoryName, amount: inputValue, comment: textValue, date: new Date().toDateString()});
//     console.table(allExpenses)
// }











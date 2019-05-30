
const allExpenses = [];
const allCategories = [];



const newCategory = document.getElementById('category');

const newCategoryForm = document.querySelector('#new-category-form');
const newExpenseForm = document.querySelector('#new-expense-form');

const amountInput = document.getElementById('amount-input');
const commentInput = document.getElementById('comment-input');
const categoryDropdown = document.getElementById('dropdown');


newCategoryForm.addEventListener('submit', addNewCategoryToPage);
newExpenseForm.addEventListener('submit', addExpense);

function addNewCategoryToPage(e) {
    e.preventDefault();
    let categoryName = newCategory.value.toUpperCase(); 
    const newCategoryOption = document.createElement('option');

    newCategoryOption.id = categoryName;
    newCategoryOption.value = categoryName;
    newCategoryOption.className = 'categories-class';
    newCategoryOption.text = categoryName;
    
    categoryDropdown.appendChild(newCategoryOption);

    newCategoryForm.reset();   
    $('#categoryModal').modal('hide')
    allCategories.push(categoryName);  
      
}

function addExpense (e) {
    e.preventDefault();
    let inputValue = Number(amountInput.value);
    let textValue = commentInput.value;
    let selectedCategory = categoryDropdown.value;

    allExpenses.push({category: selectedCategory, amount: inputValue, comment: textValue, date: new Date().toDateString()});

    newExpenseForm.reset(); 
    $('#myModal').modal('hide')
    console.log(allExpenses);

}











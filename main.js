
const allExpenses = [];
const allCategories = [];


// STORING DATES IN VARIABLES
let today = moment();
let thisWeek = moment().startOf('week').add(1, 'days');
let thisMonth = moment().startOf('month');
let lastMonth = moment().startOf('month').subtract(1, 'months');
let firstDayOfYear = moment().startOf('year');




// DOM MANIPULATION
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
    let newItem = allCategories.indexOf(categoryName);
    
    if (newItem === -1) {
        
        const newCategoryOption = document.createElement('option');
        
        newCategoryOption.id = categoryName;
        newCategoryOption.value = categoryName;
        newCategoryOption.className = 'categories-class';
        newCategoryOption.text = categoryName;
        
        categoryDropdown.appendChild(newCategoryOption);
        
        allCategories.push(categoryName); 
        $('#categoryModal').modal('hide')
        
    } else {
        alert('You already have a category with that name!')
    }
    newCategoryForm.reset();   
                
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
    console.log(allCategories);

}



function totalAllCategories () {
    
    let totalObject = [];
    
    allCategories.forEach(function(currentCategory){
        let weekTotal = 0;
        let thisMonthTotal = 0;
        let lastMonthTotal = 0;
        let thisYearTotal = 0;
        
        allExpenses.forEach(function(currentEntry) {
            if (currentEntry.category === currentCategory) {
                if (currentEntry.date > thisWeek) {
                    weekTotal += currentEntry.amount;   
                }
                if (currentEntry.date > thisMonth) {
                    thisMonthTotal += currentEntry.amount;   
                }
                if (currentEntry.date > lastMonth && currentEntry.date < thisMonth) {
                    lastMonthTotal += currentEntry.amount;   
                }
                if (currentEntry.date > firstDayOfYear) {
                    thisYearTotal += currentEntry.amount;   
                }                            
            }
        })    
        totalObject.push(
            {category: currentCategory, 
                totals: {
                    thisWeek: weekTotal, 
                    thisMonth: thisMonthTotal, 
                    lastMonth: lastMonthTotal, 
                    thisYear: thisYearTotal}
            }
        )        
    });
}







let allExpenses = [];
let allCategories = [];

const init = function () {

  today = moment().format();
  thisWeek = moment().startOf('isoWeek').format();
  thisMonth = moment().startOf('month').format();
  firstDayOfYear = moment().startOf('year').format();

  newCategoryForm = document.querySelector('#new-category-form');

  newExpenseBtn = document.querySelector('#new-expense-btn');
  newExpenseForm = document.querySelector('#new-expense-form');
  amountInput = document.getElementById('amount-input');
  commentInput = document.getElementById('comment-input');
  categoryDropdown = document.getElementById('dropdown');
  
  manageExpensesBtn = document.querySelector('#manage-expenses-btn')
  manageExpensesBody = document.querySelector('#manage-expenses-body')
  manageExpensesClose = document.querySelector('#close-manage-expenses')

  summaryWeek = document.querySelector('#week-row');
  summaryMonth = document.querySelector('#month-row');
  summaryYear = document.querySelector('#year-row');
  summaryTable = document.querySelector('#table-body');
  
  

}

const getLSinfo = function () {
  if (localStorage.length === 0) {
    localStorage.setItem('allCategories', JSON.stringify(['GROCERIES', 'RESTAURANTS']));
    localStorage.setItem('allExpenses', JSON.stringify([]));
    allCategories.push('GROCERIES', 'RESTAURANTS'); // PRESET CATEGORIES
  } else if (localStorage.length > 0) {
    let parsedCategories = JSON.parse(localStorage.getItem('allCategories'));
    let parsedExpenses = JSON.parse(localStorage.getItem('allExpenses'));
    allCategories = parsedCategories;
    allExpenses = parsedExpenses;
  }
}


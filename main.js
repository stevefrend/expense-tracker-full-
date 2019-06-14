
let allExpenses = [];
let allCategories = [];

const init = function () {
  if (localStorage.length === 0) {
    localStorage.setItem('allCategories', JSON.stringify(['GROCERIES', 'RESTAURANTS']));
    localStorage.setItem('allExpenses', JSON.stringify([]));
    allCategories.push('GROCERIES', 'RESTAURANTS'); // this is just a preset
  } else if (localStorage.length > 0) {
    let parsedCategories = JSON.parse(localStorage.getItem('allCategories'));
    let parsedExpenses = JSON.parse(localStorage.getItem('allExpenses'));
    allCategories = parsedCategories;
    allExpenses = parsedExpenses;
  }


  // DATES IN VARIABLES
  today = moment().format();
  thisWeek = moment().startOf('isoWeek').format();
  thisMonth = moment().startOf('month').format();
  firstDayOfYear = moment().startOf('year').format();


  // NEW CATEGORY
  newCategoryInput = document.getElementById('category');
  newCategoryForm = document.querySelector('#new-category-form');

  // NEW EXPENSE
  newExpenseForm = document.querySelector('#new-expense-form');
  amountInput = document.getElementById('amount-input');
  commentInput = document.getElementById('comment-input');
  categoryDropdown = document.getElementById('dropdown');
  newExpenseBtn = document.querySelector('#new-expense-btn');
  manageExpensesBtn = document.querySelector('#manage-expenses-btn')
  manageExpensesBody = document.querySelector('#manage-expenses-body')
  manageExpensesClose = document.querySelector('#close-manage-expenses')

  summaryWeek = document.querySelector('#week-row');
  summaryMonth = document.querySelector('#month-row');
  summaryYear = document.querySelector('#year-row');

  theadRow = document.querySelector('#t-head');

}
init();

// ADD EVENT LISTENERS

newCategoryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const categoryName = newCategoryInput.value.toUpperCase();
  allCategories.push(categoryName);
  localStorage.setItem('allCategories', JSON.stringify(allCategories));
  $('#categoryModal').modal('hide')
  newCategoryForm.reset();
});


newExpenseBtn.addEventListener('click', function () {
  categoryDropdown.innerHTML = '';
  allCategories.forEach(function (category) {
    let newCategoryOption = document.createElement('option');
    newCategoryOption.id = category;
    newCategoryOption.value = category;
    newCategoryOption.text = category;
    generateSummary();
    categoryDropdown.appendChild(newCategoryOption);
  })
})

newExpenseForm.addEventListener('submit', function (e) {
  e.preventDefault();
  allExpenses.push({ category: categoryDropdown.value, amount: Number(amountInput.value), comment: commentInput.value, date: moment().format() })
  localStorage.setItem('allExpenses', JSON.stringify(allExpenses));
  $('#myModal').modal('hide')
  generateSummary();
  newExpenseForm.reset();

});


// CREATE EDIT FUNCITONALITY

// 2. find a way to add edit button to each entry, with change amount, category, and delete options

manageExpensesBtn.addEventListener('click', function () {
  const lastFiveExpenses = allExpenses.slice(-5);
  lastFiveExpenses.reverse();
  manageExpensesBody.innerHTML = '';

  lastFiveExpenses.forEach(function (entry, index) {
    let newRow = document.createElement('tr')
    newRow.id = entry.category + '-id'
    let newIndex = document.createElement('td');
    newIndex.textContent = index + 1;
    let newAmount = document.createElement('td');
    newAmount.textContent = '$' + entry.amount;
    let newCategory = document.createElement('td');
    newCategory.textContent = entry.category;
    let newDate = document.createElement('td');
    newDate.textContent = moment(entry.date).format("MMM Do YYYY");

    manageExpensesBody.appendChild(newRow);
    newRow.appendChild(newIndex);
    newRow.appendChild(newCategory);
    newRow.appendChild(newAmount);
    newRow.appendChild(newDate);
  });

});

// GENERATE SUMMARY
const generateSummary = function () {

  totalObject = [];
  theadRow.innerHTML = ''
  summaryWeek.innerHTML = ''
  summaryMonth.innerHTML = ''
  summaryYear.innerHTML = ''
  
  
  
  let initCurrent = document.createElement('th');
  initCurrent.textContent = 'Current';
  theadRow.appendChild(initCurrent);
  let initWeek = document.createElement('th');
  initWeek.textContent = 'Week';
  summaryWeek.appendChild(initWeek);
  let initMonth = document.createElement('th');
  initMonth.textContent = 'Month';
  summaryMonth.appendChild(initMonth);
  let initYear = document.createElement('th');
  initYear.textContent = 'Year';
  summaryYear.appendChild(initYear);

  allCategories.forEach(function (currentCategory) {

    let weekTotal = 0;
    let thisMonthTotal = 0;
    let thisYearTotal = 0;
    

    allExpenses.forEach(function (currentEntry) {
      if (currentEntry.category === currentCategory) {
        if (currentEntry.date > thisWeek) {
          weekTotal += currentEntry.amount;

        }
        if (currentEntry.date > thisMonth) {
          thisMonthTotal += currentEntry.amount;
        }
        if (currentEntry.date > firstDayOfYear) {
          thisYearTotal += currentEntry.amount;
        }
      }
    })

    totalObject.push(
      {
        category: currentCategory,
        totals: {
          thisWeek: weekTotal,
          thisMonth: thisMonthTotal,
          thisYear: thisYearTotal,
        }
      }
    )

  });

  totalObject.forEach(function (categorySummary) {
    let weekCategory = document.createElement('th');
    weekCategory.textContent = categorySummary.category;
    theadRow.appendChild(weekCategory);
    
    let weekAmount = document.createElement('td');
    weekAmount.textContent = categorySummary.totals.thisWeek;
    summaryWeek.appendChild(weekAmount);
    
    let monthAmount = document.createElement('td');
    monthAmount.textContent = categorySummary.totals.thisMonth;
    summaryMonth.appendChild(monthAmount);
    
    let yearAmount = document.createElement('td');
    yearAmount.textContent = categorySummary.totals.thisYear;
    summaryYear.appendChild(yearAmount);
  })
}



generateSummary();

// USE THIS CODE, BUT AFTER TOTALOBJECT HAS BEEN UPDATED

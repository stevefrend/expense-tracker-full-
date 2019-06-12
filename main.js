
let allExpenses = [];
let allCategories = [];

const init = function () {
  if (localStorage.length === 0) {
    localStorage.setItem('allCategories', JSON.stringify(['GROCERIES', 'RESTAURANTS']));
    localStorage.setItem('allExpenses', JSON.stringify([]));
    allCategories.push('GROCERIES', 'RESTAURANTS'); // this is just a preset
  } else if (localStorage.length > 0) {
    let parsedCategories = JSON.parse(localStorage.getItem('allCategories'));
    allCategories = parsedCategories;
  }


  // DATES IN VARIABLES
  today = moment().format();
  thisWeek = moment().startOf('isoWeek').format();
  thisMonth = moment().startOf('month').format();
  firstDayOfYear = moment().startOf('year').format();

  // SUMMARY
  thisWeekDOM = document.querySelector('#this-week');
  thisMonthDOM = document.querySelector('#this-month');
  thisYearDOM = document.querySelector('#this-year');

  // NEW CATEGORY
  newCategoryInput = document.getElementById('category');
  newCategoryForm = document.querySelector('#new-category-form');

  // NEW EXPENSE
  newExpenseForm = document.querySelector('#new-expense-form');
  amountInput = document.getElementById('amount-input');
  commentInput = document.getElementById('comment-input');
  categoryDropdown = document.getElementById('dropdown');
  newExpenseBtn = document.querySelector('#new-expense-btn');

}
init();

// ADD EVENT LISTENERS

newCategoryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const categoryName = newCategoryInput.value.toUpperCase();

  allCategories.push(categoryName);
  let stringifyCategories = JSON.stringify(allCategories);
  localStorage.setItem('allCategories', stringifyCategories);

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
    categoryDropdown.appendChild(newCategoryOption);
  })
})

newExpenseForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let inputValue = Number(amountInput.value);
  let textValue = commentInput.value;
  let selectedCategory = categoryDropdown.value;

  const entryObject = ({ category: selectedCategory, amount: inputValue, comment: textValue, date: moment().format() });

  allExpenses.push(entryObject)

  const allExpensesStringified = JSON.stringify(allExpenses);
  localStorage.setItem('expenses', allExpensesStringified);

  newExpenseForm.reset();
  $('#myModal').modal('hide')

});






// // ADD LOCALSTORAGE INFO 
// function addAllCategories(localCategories) {
//   localCategories.forEach(function (category) {
//     let newCategoryOption = document.createElement('option');

//     newCategoryOption.id = category;
//     newCategoryOption.value = category;
//     newCategoryOption.className = 'categories-class';
//     newCategoryOption.text = category;

//     categoryDropdown.appendChild(newCategoryOption);
//   })
// }
// addAllCategories(localCategories);


// // ADD EXPENSE



// GENERATE SUMMARY
// const generateSummary = function () {

//   let totalObject = [];

//   if (localExpenses !== null) {
//     localCategories.forEach(function (currentCategory) {

//       let weekTotal = 0;
//       let thisMonthTotal = 0;
//       let thisYearTotal = 0;

//       localExpenses.forEach(function (currentEntry) {
//         if (currentEntry.category === currentCategory) {
//           if (currentEntry.date > thisWeek) {
//             weekTotal += currentEntry.amount;
//           }
//           if (currentEntry.date > thisMonth) {
//             thisMonthTotal += currentEntry.amount;
//           }
//           if (currentEntry.date > firstDayOfYear) {
//             thisYearTotal += currentEntry.amount;
//           }
//         }
//       })


//       totalObject.push(
//         {
//           category: currentCategory,
//           totals: {
//             thisWeek: weekTotal,
//             thisMonth: thisMonthTotal,
//             thisYear: thisYearTotal,
//           }
//         }
//       )

//     });

//     // take the html elements and add them to the category addition function instead

//     totalObject.forEach(function (entry) {

//       //WEEK
//       let newRowWeek = document.createElement('tr');
//       let newItemWeek = document.createElement('td');
//       let newItemWeek2 = document.createElement('td');


//       newRowWeek.id = entry.category + '-row-week'
//       newItemWeek.textContent = entry.category;
//       newItemWeek2.textContent = '$' + entry.totals.thisWeek;


//       thisWeekDOM.appendChild(newRowWeek);
//       newRowWeek.appendChild(newItemWeek);
//       newRowWeek.appendChild(newItemWeek2);


//       //MONTH
//       let newRowMonth = document.createElement('tr');
//       let newItemMonth = document.createElement('td');
//       let newItemMonth2 = document.createElement('td');


//       newRowMonth.id = entry.category + '-row-month'
//       newItemMonth.textContent = entry.category;
//       newItemMonth2.textContent = '$' + entry.totals.thisMonth;


//       thisMonthDOM.appendChild(newRowMonth);
//       newRowMonth.appendChild(newItemMonth);
//       newRowMonth.appendChild(newItemMonth2);


//       //THIS YEAR
//       let newRowYear = document.createElement('tr');
//       let newItemYear = document.createElement('td');
//       let newItemYear2 = document.createElement('td');


//       newRowYear.id = entry.category + '-row-year'
//       newItemYear.textContent = entry.category;
//       newItemYear2.textContent = '$' + entry.totals.thisYear;


//       thisYearDOM.appendChild(newRowYear);
//       newRowYear.appendChild(newItemYear);
//       newRowYear.appendChild(newItemYear2);


//     })

//   }
// }


// generateSummary();



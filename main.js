
let allExpenses = [];
let allCategories = [];


// PARSE LOCALSTORAGE
let localCategories = JSON.parse(localStorage.getItem('categories'));
let localExpenses = JSON.parse(localStorage.getItem('expenses'));
let initializeCategories = JSON.stringify(localCategories);
localStorage.setItem('categories', initializeCategories);



// DATES IN VARIABLES
const today = moment().format();
const thisWeek = moment().startOf('isoWeek').format();
const thisMonth = moment().startOf('month').format();
const firstDayOfYear = moment().startOf('year').format();


// SUMMARY
const thisWeekDOM = document.querySelector('#this-week');
const thisMonthDOM = document.querySelector('#this-month');
const thisYearDOM = document.querySelector('#this-year');

// NEW CATEGORY
const newCategoryInput = document.getElementById('category');
const newCategoryForm = document.querySelector('#new-category-form');

// NEW EXPENSE
const newExpenseForm = document.querySelector('#new-expense-form');
const amountInput = document.getElementById('amount-input');
const commentInput = document.getElementById('comment-input');
const categoryDropdown = document.getElementById('dropdown');

// ADD EVENT LISTENERS

newCategoryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const categoryName = newCategoryInput.value.toUpperCase();

  if (allCategories.indexOf(categoryName) === -1) {

    allCategories.push(categoryName);
    let categoriesStringify = JSON.stringify(allCategories);
    localStorage.setItem('categories', categoriesStringify);


    const newCategoryOption = document.createElement('option');

    newCategoryOption.id = categoryName;
    newCategoryOption.value = categoryName;
    newCategoryOption.text = categoryName;

    categoryDropdown.appendChild(newCategoryOption);

    $('#categoryModal').modal('hide')

  } else {
    alert('You already have a category with that name!')
  }
  newCategoryForm.reset();
});


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













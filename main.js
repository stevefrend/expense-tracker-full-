

init();
getLSinfo();


// ADD EVENT LISTENERS

newCategoryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const categoryName = document.getElementById('category').value.toUpperCase();
  allCategories.push(categoryName);
  localStorage.setItem('allCategories', JSON.stringify(allCategories));
  $('#categoryModal').modal('hide')
  document.querySelector('#new-category-form').reset();
});


newExpenseBtn.addEventListener('click', function () {
  dateInput.value = moment().format('YYYY-MM-DD')
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
  
  allExpenses.push({ 
    category: categoryDropdown.value, 
    amount: Number(amountInput.value), 
    comment: commentInput.value, 
    date: moment(dateInput.value), 
    id: uuidv4() })
  
  localStorage.setItem('allExpenses', JSON.stringify(allExpenses));
  $('#myModal').modal('hide')
  newExpenseForm.reset();

});



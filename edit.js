init();
getLSinfo();

const createLastFive = function () {
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

}

createLastFive();
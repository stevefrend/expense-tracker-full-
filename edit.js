
init();
getLSinfo();


const editAmount = document.getElementById('edit-amount');
const editComment = document.getElementById('edit-comment');
const editDate = document.getElementById('edit-date');
const deleteEntry = document.getElementById('delete-entry');
const table = document.getElementById('table')



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
    newAmount.type = 'number';
    let newCategory = document.createElement('td');
    newCategory.textContent = entry.category;
    let newDate = document.createElement('td');
    newDate.textContent = moment(entry.date).format("MMM Do YYYY");
    let editCell = document.createElement('td');
    let editButton = document.createElement('button');
    editButton.textContent = 'o'
    editButton.id = entry.id;
    editButton.classList = 'edit-button'
    

    editCell.appendChild(editButton); 

    manageExpensesBody.appendChild(newRow);
    newRow.appendChild(newIndex);
    newRow.appendChild(newCategory);
    newRow.appendChild(newAmount);
    newRow.appendChild(newDate);
    newRow.appendChild(editCell);
  });

}

createLastFive();




table.addEventListener('click', function (e) {
  if (e.target.classList.contains('edit-button'))  {
    $('#editModal').modal('show')

    let entry = allExpenses.find(function (logged) {
      return logged.id === e.target.id;
    })

    let entryIndex = allExpenses.findIndex(allEntries => allEntries === entry)
    

    console.log(entry)
    document.querySelector('#edit-entry-form').addEventListener('submit', function (e) {
      if (editAmount.value.length !== 0) {
        entry.amount = Number(editAmount.value);
      }
      if (editComment.value.length !== 0) {
        entry.comment = editComment.value;
      }
      if (editDate.value.length !== 0) {
        entry.date = moment(editDate.value).format();
      }
      
      // e.preventDefault();
      localStorage.setItem('allExpenses', JSON.stringify(allExpenses));
      $('#myModal').modal('hide')
    })
    deleteEntry.addEventListener('click', function () {
      if (window.confirm('Are you sure?')) {
        allExpenses.splice(entryIndex, 1)
        localStorage.setItem('allExpenses', JSON.stringify(allExpenses));
      }

    })
  }
})





// this is just for logging
// const buttons = document.getElementsByClassName('edit-button');
// for (button of (buttons)) {
//   console.log(button)
// }
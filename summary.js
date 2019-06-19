init();
getLSinfo();


const generateSummary = function () {

  totalObject = [];

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

  totalObject.forEach(function (category) {
    let newRow = document.createElement('tr');
    summaryTable.appendChild(newRow);
    
    let categoryName = document.createElement('td');
    categoryName.textContent = category.category;
    newRow.appendChild(categoryName);

    let weekAmount = document.createElement('td');
    weekAmount.textContent = category.totals.thisWeek;
    newRow.appendChild(weekAmount);
    
    let monthAmount = document.createElement('td');
    monthAmount.textContent = category.totals.thisMonth;
    newRow.appendChild(monthAmount);
    
    let yearAmount = document.createElement('td');
    yearAmount.textContent = category.totals.thisYear;
    newRow.appendChild(yearAmount);

  })
}



generateSummary();
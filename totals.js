function totalAllCategories () {
    
    let totalObject = [];
    
    const thisWeekDOM = document.querySelector('#this-week');
    const thisMonthDOM = document.querySelector('#this-month');
    const lastMonthDOM = document.querySelector('#last-month');
    const thisYearDOM = document.querySelector('#this-year');


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
    // write html additions here
    totalObject.forEach(function (entry) {

        //WEEK
        let newRowWeek = document.createElement('tr');
        let newItemWeek = document.createElement('td');
        let newItemWeek2 = document.createElement('td');
        
        newRowWeek.id = entry.category + '-row-week'
        newItemWeek.textContent = entry.category; 
        newItemWeek2.textContent = entry.totals.thisWeek;
        
        thisWeekDOM.appendChild(newRowWeek);
        newRowWeek.appendChild(newItemWeek);
        newRowWeek.appendChild(newItemWeek2);
        
        //MONTH
        let newRowMonth = document.createElement('tr');
        let newItemMonth = document.createElement('td');
        let newItemMonth2 = document.createElement('td');
        
        newRowMonth.id = entry.category + '-row-month'
        newItemMonth.textContent = entry.category; 
        newItemMonth2.textContent = entry.totals.thisMonth;
        
        thisMonthDOM.appendChild(newRowMonth);
        newRowMonth.appendChild(newItemMonth);
        newRowMonth.appendChild(newItemMonth2);
        
        //LAST MONTH
        let newRowLast = document.createElement('tr');
        let newItemLast = document.createElement('td');
        let newItemLast2 = document.createElement('td');
        
        newRowLast.id = entry.category + '-row-last-month'
        newItemLast.textContent = entry.category; 
        newItemLast2.textContent = entry.totals.lastMonth;
        
        lastMonthDOM.appendChild(newRowLast);
        newRowLast.appendChild(newItemLast);
        newRowLast.appendChild(newItemLast2);
        
        //THIS YEAR
        let newRowYear = document.createElement('tr');
        let newItemYear = document.createElement('td');
        let newItemYear2 = document.createElement('td');
        
        newRowYear.id = entry.category + '-row-year'
        newItemYear.textContent = entry.category; 
        newItemYear2.textContent = entry.totals.thisYear;
        
        thisYearDOM.appendChild(newRowYear);
        newRowYear.appendChild(newItemYear);
        newRowYear.appendChild(newItemYear2);

    })
    
    console.log(totalObject)
}
totalAllCategories();
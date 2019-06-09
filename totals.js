
let getCategories = JSON.parse(localStorage.getItem('categories')); 
let getExpenses = JSON.parse(localStorage.getItem('expenses')); 

let today = moment().format();
let thisWeek = moment().startOf('week').add(1, 'days').format();
let thisMonth = moment().startOf('month').format();
let lastMonth = moment().startOf('month').subtract(1, 'months').format();
let sixMonth = moment().startOf('month').subtract(6, 'months').format();
let firstDayOfYear = moment().startOf('year').format();

let totalObject = [];



(function () {
          
    const thisWeekDOM = document.querySelector('#this-week');
    const thisMonthDOM = document.querySelector('#this-month');
    const lastMonthDOM = document.querySelector('#last-month');
    const thisYearDOM = document.querySelector('#this-year');


    getCategories.forEach(function(currentCategory){
        let weekTotal = 0;        
        let thisMonthTotal = 0;        
        let lastMonthTotal = 0;        
        let thisYearTotal = 0;
        let sixMonthTotal = 0;
        
        
        
        getExpenses.forEach(function(currentEntry) {
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
                if (currentEntry.date > sixMonth && currentEntry.date < thisMonth) {
                    sixMonthTotal += currentEntry.amount;   
                    
                }
                if (currentEntry.date > firstDayOfYear) {
                    thisYearTotal += currentEntry.amount;
                    
                }                            
            }
        })
           
        let sixMonthAverage = Math.round(sixMonthTotal / 6);
        let weeklyAverage = Math.round(sixMonthAverage / 26);
        let monthlyAverage = Math.round(sixMonthAverage / 6);
        let yearlyAverage = Math.round(sixMonthAverage * 2);
        
        totalObject.push(
            {category: currentCategory, 
                totals: {
                    thisWeek: weekTotal, 
                    thisMonth: thisMonthTotal, 
                    lastMonth: lastMonthTotal, 
                    thisYear: thisYearTotal,
                    sixMonthAverage: sixMonthAverage,
                    weeklyAverage: weeklyAverage,
                    monthlyAverage: monthlyAverage,
                    yearlyAverage: yearlyAverage

                }
            }            
        )   
    
    });
    
    // CREATE HTML - this whole thing can use a for loop, or forEach, to go through and add multiple times instead
    totalObject.forEach(function (entry) {

        //WEEK
        let newRowWeek = document.createElement('tr');
        let newItemWeek = document.createElement('td');
        let newItemWeek2 = document.createElement('td');
        let newItemWeek3 = document.createElement('td');
        
        newRowWeek.id = entry.category + '-row-week'
        newItemWeek.textContent = entry.category; 
        newItemWeek2.textContent = '$' + entry.totals.thisWeek;
        newItemWeek3.textContent = '$' + entry.totals.weeklyAverage;
        
        thisWeekDOM.appendChild(newRowWeek);
        newRowWeek.appendChild(newItemWeek);
        newRowWeek.appendChild(newItemWeek2);
        newRowWeek.appendChild(newItemWeek3);
        
        //MONTH
        let newRowMonth = document.createElement('tr');
        let newItemMonth = document.createElement('td');
        let newItemMonth2 = document.createElement('td');
        let newItemMonth3 = document.createElement('td');
        
        newRowMonth.id = entry.category + '-row-month'
        newItemMonth.textContent = entry.category; 
        newItemMonth2.textContent = '$' + entry.totals.thisMonth;
        newItemMonth3.textContent = '$' + entry.totals.monthlyAverage;
        
        thisMonthDOM.appendChild(newRowMonth);
        newRowMonth.appendChild(newItemMonth);
        newRowMonth.appendChild(newItemMonth2);
        newRowMonth.appendChild(newItemMonth3);
        
        //LAST MONTH
        let newRowLast = document.createElement('tr');
        let newItemLast = document.createElement('td');
        let newItemLast2 = document.createElement('td');
        
        newRowLast.id = entry.category + '-row-last-month'
        newItemLast.textContent = entry.category; 
        newItemLast2.textContent = '$' + entry.totals.lastMonth;
        
        lastMonthDOM.appendChild(newRowLast);
        newRowLast.appendChild(newItemLast);
        newRowLast.appendChild(newItemLast2);
        
        //THIS YEAR
        let newRowYear = document.createElement('tr');
        let newItemYear = document.createElement('td');
        let newItemYear2 = document.createElement('td');
        let newItemYear3 = document.createElement('td');
        
        newRowYear.id = entry.category + '-row-year'
        newItemYear.textContent = entry.category; 
        newItemYear2.textContent = '$' + entry.totals.thisYear;
        newItemYear3.textContent = '$' + entry.totals.yearlyAverage;
        
        thisYearDOM.appendChild(newRowYear);
        newRowYear.appendChild(newItemYear);
        newRowYear.appendChild(newItemYear2);
        newRowYear.appendChild(newItemYear3);

    })
})();


// totalAllCategories();

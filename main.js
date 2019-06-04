
const allExpenses = [
    {category: 'GAS', amount: 14, comment: '', date: moment().subtract(1, 'months')},
    {category: 'MISC', amount: 4, comment: '', date: moment()},
    {category: 'MISC', amount: 8, comment: '', date: moment()},
    {category: 'GAS', amount: 8, comment: '', date: moment().subtract(2, 'days')},
    {category: 'MISC', amount: 124, comment: '', date: moment().subtract(5, 'days')},
    {category: 'MISC', amount: 123, comment: '', date: moment().subtract(5, 'days')},
    {category: 'GAS', amount: 50, comment: '', date: moment().subtract(5, 'months')}
];

const allCategories = ['GAS', 'MISC'];


// STORING DATES IN VARIABLES
let today = moment();
let thisWeek = moment().startOf('week').add(1, 'days');
let thisMonth = moment().startOf('month');
let lastMonth = moment().startOf('month').subtract(1, 'months');
let firstDayOfYear = moment().startOf('year');














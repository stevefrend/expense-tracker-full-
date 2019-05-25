
const allCategories = {
    groceries: [],
    gas: []
};

var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("modalBtn")
var closeBtn = document.getElementById("closeBtn");

modalBtn.addEventListener('click', openModal);
function openModal() {
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = 'none';
}


// Variables and event listeners

function groceriesFunction () {
    let groceriesSpent;

    const form = document.querySelector('#groceries');
    const amountInput = document.getElementById('groceries-amount');
    const commentInput = document.getElementById('groceries-comment');
    
    form.addEventListener('submit', runEvent);
    
    function runEvent(e) {
        e.preventDefault();
        let inputValue = Number(amountInput.value);
        addItem(inputValue, commentInput.value);
        console.table(allCategories.groceries);
        getTotal();
        console.log(`Total spent: ${groceriesSpent}`);
        document.getElementById("groceries").reset();
        alert(`$${inputValue} added to Groceries`)
        modal.style.display = 'none';
        
    }
    const addItem = (newAmount, newComment) => allCategories.groceries.push({amount: newAmount, comment:newComment, date: new Date().toDateString()});


    const getTotal = function () {
        groceriesSpent = allCategories.groceries.reduce(function (total, entry) {
            return total + entry.amount;
        }, 0);
        
    }
    
    
}


groceriesFunction();












// - make a functions that: adds the html elements to the page with appendChild

// 2. find out how to not enter a value if it's empty

// 3. learn JSON saving



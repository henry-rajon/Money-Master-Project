
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmoutString = inputField.value;
    const inputAmout = parseFloat(inputAmoutString);
    inputField.value = '';
    return inputAmout;
}

function getAndSetElementValue(elementId, setValue) {
    const inputElement = document.getElementById(elementId);
    inputElement.innerText = setValue;
}

function calculateAmount() {
    const incomeAmount = getInputValue('income-input');
    const foodAmount = getInputValue('food-input');
    const rentAmount = getInputValue('rent-input');
    const clothesAmount = getInputValue('clothes-input');
    
    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    const balanceAmonut = incomeAmount - totalExpenses;
    
    getAndSetElementValue('total-expenses', totalExpenses);
    getAndSetElementValue('balance', balanceAmonut);
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateAmount();
})
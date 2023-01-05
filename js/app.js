function incomeInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmoutString = inputField.value;
    const inputAmout = parseFloat(inputAmoutString);
    // inputField.value = '';
    return inputAmout;
}
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmoutString = inputField.value;
    const inputAmout = parseFloat(inputAmoutString);
    // inputField.value = '';
    return inputAmout;
}

function getAndSetElementValue(elementId, setValue) {
    const inputElement = document.getElementById(elementId);
    inputElement.innerText = setValue;
}

function calculateAmount() {
    const incomeAmount = incomeInput('income-input');
    const foodAmount = getInputValue('food-input');
    const rentAmount = getInputValue('rent-input');
    const clothesAmount = getInputValue('clothes-input');

    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    const balanceAmonut = incomeAmount - totalExpenses;

    getAndSetElementValue('total-expenses', totalExpenses);
    getAndSetElementValue('balance', balanceAmonut);

    return balanceAmonut;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateAmount();
})


document.getElementById('save-btn').addEventListener('click', function () {
    const incomeAmount = incomeInput('income-input');
    const saveParsentInput = getInputValue('save-parsent');
    const saveParsent = incomeAmount * (saveParsentInput / 100);
    console.log(saveParsent)
    const balanceAmonut = calculateAmount();
    const remainingBalance = balanceAmonut - saveParsent;
    console.log(remainingBalance)
    getAndSetElementValue('saveing-amonut', saveParsent);
    getAndSetElementValue('remaining-balance', remainingBalance);
})

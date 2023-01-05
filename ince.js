function incomeInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmoutString = inputField.value;
    const inputAmout = parseFloat(inputAmoutString);
    // inputField.value = '';
    return inputAmout;
}
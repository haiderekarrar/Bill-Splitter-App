// app.js

document.getElementById('calculateButton').addEventListener('click', calculateTip);

function calculateTip() {
    // Get input values
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const peopleCount = parseInt(document.getElementById('peopleCount').value);

    // Validate inputs
    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount');
        return;
    }
    if (isNaN(peopleCount) || peopleCount <= 0) {
        alert('Please enter a valid number of people');
        return;
    }

    // Calculate the tip and total amounts
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / peopleCount;

    // Update the UI with results
    document.getElementById('tipAmount').innerText = `Tip: PKR ${tipAmount.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `Total Amount (with Tip): PKR ${totalAmount.toFixed(2)}`;
    document.getElementById('amountPerPerson').innerText = `Amount per Person: PKR ${amountPerPerson.toFixed(2)}`;
}

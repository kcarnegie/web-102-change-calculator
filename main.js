var currency = [
    ["twenties-output", 20, 0],
    ["tens-output", 10, 0],
    ["fives-output", 5, 0],
    ["twos-output", 2, 0],    
    ["dollars-output", 1, 0],
    ["quarters-output", 0.25, 0],
    ["dimes-output", 0.10, 0],
    ["nickels-output", 0.05, 0],
    ["pennies-output", 0.01, 0]
]

function handleClickEvent(e) {
    const amountDue = parseFloat(document.getElementById("amount-due").value);
    const amountReceived = parseFloat(document.getElementById("amount-received").value);
    
    let change = amountReceived - amountDue;
    for (let i = 0; i < currency.length; i++) {
        currency[i][2] = Math.floor(change/currency[i][1]);
        change = (change % currency[i][1]).toFixed(2);
        document.getElementById(`${currency[i][0]}`).innerHTML = currency[i][2];
         document.getElementById("change-output").innerHTML = `Your change is $${(amountReceived - amountDue).toFixed(2)}`
    }}


const inputNumber = document.getElementById('gallon');
const dateInput = document.getElementById('date');
const calculateButton = document.getElementById('calculate-button');
const submitButton = document.getElementById('submit-button');
const resultDiv = document.getElementById('result');

function suggested(state, gallons, history){
    var margin = 0.1;
    if(state === 'TX'){
        margin += 0.02;
    }
    else{
        margin += 0.04;
    }

    if(gallons >= 1000){
        margin += 0.02;
    }
    else{
        margin += 0.03
    }

    if(history === "true"){
        margin -= 0.01
    }
    
    return (1.5 + (margin*1.5)).toFixed(2);
}

function totalprice(factor, gallons) {
    return (factor*gallons).toFixed(2);
}

calculateButton.addEventListener('click', () => {
    event.preventDefault();
    //getting the gallons and date
    const number = parseFloat(inputNumber.value);
    const date = dateInput.value;
    //check if number  or date is blank and if so display error else calculate price, set value, and make submission available 
    if (isNaN(number) || date === '') {
        submitButton.disabled = true;
        resultDiv.textContent = ``;
        alert('Please enter valid gallons and/or date');
    } else {
        const stateCode = address.split(',')[2].trim().split(' ')[0];
        console.log(stateCode);
        console.log(history);
        const suggestedPrice = suggested(stateCode,number,history);
        const totalPrice = totalprice(suggestedPrice, number);
        resultDiv.innerHTML = `The Suggested Price is: <span style="color:red;"><b>$${suggestedPrice}</b></span> <br/> Total Price is:<span style="color:red;"><b>$${totalPrice}</b></span>`;
        document.getElementById('priceholder').value = suggestedPrice;
        document.getElementById('totalholder').value = totalPrice;
        submitButton.disabled = false;
    }
});
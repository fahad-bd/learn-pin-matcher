function getPin()
{
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('get lessthen 3 digit pin and call again. ', pin);
        return getPin();
    }
}

function generateaPin()
{
    // console.log('Pin');
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener('click', function(even){
    // console.log(even.target.innerText); //this is even bubble
    const calInput = document.getElementById('typed-numbers');
    const number = even.target.innerText;
    if(isNaN(number)){ // is not a number
        if(number == 'C'){
            calInput.value = '';
        }
    }
    else
    {
        const previousNumber = calInput.value;
        const newNumber = previousNumber + number;
        calInput.value = newNumber;
    }
});
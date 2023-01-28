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
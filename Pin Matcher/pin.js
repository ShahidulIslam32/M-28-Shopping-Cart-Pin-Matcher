function getPin(){
    let pin = Math.round(Math.random()*10000)
    let stringPin = pin + '';
    if(stringPin.length == 4){
        return pin
    }
    else{
        alert('We Find A 3 Digit Pin !! Please Generate A New pin Again !!')
        return getPin()
    }
}

function generatePin(){ 
    const pin = getPin() 
    let displayValue = document.getElementById('display-pin')
    if (displayValue < 4){
        alert('Write A 4 Digit Pin Only !!')
    }
    displayValue.value = pin
    displayValue.style.textAlign = 'center'
    displayValue.style.fontSize = '1.8em'
    displayValue.style.letterSpacing = '10px'
    displayValue.style.color = 'crimson'

}

function getPin(getPIn){
    let pin = Math.round(Math.random() * 10000)
    let stringPin = pin + '';
    if(stringPin.length == 4){
        return pin
    }
    else{
        alert('We Find A 3 Digit Pin !! Please Generate A New pin Again !!')
        return getPin()
    }
}
function shortCode(){
    let pin = getPin()
    let showPin = document.getElementById('showPin')
    showPin.value = pin
    showPin.style.textAlign = 'center'
    showPin.style.fontSize = '1.8em'
    showPin.style.letterSpacing = '10px'
    showPin.style.color = 'gold'
}
document.getElementById('generatePin').addEventListener('click',function(){
    shortCode()
})
document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    let calc = document.getElementById('typed-number')
    if(isNaN(number)){
        if(number == 'C'){
            calc.value = ''
        }
    }
    else{
        let prevCalcVal = calc.value
        let newCalcVal = prevCalcVal + number
        calc.value = newCalcVal
    }
    //DOM styles
    calc.style.textAlign = 'center'
    calc.style.fontSize = '1.8em'
    calc.style.letterSpacing = '10px'
    calc.style.color = 'gold'
})


function verifyPin(){
    let showPin = document.getElementById('showPin').value
    let typednumber = document.getElementById('typed-number').value
    let success = document.getElementById('success')
    let fail = document.getElementById('fail')
    if(showPin == typednumber){
        success.style.display = 'block'
        fail.style.display = 'none'
    }
    else{
        success.style.display = 'none'
        fail.style.display = 'block'
    }
}
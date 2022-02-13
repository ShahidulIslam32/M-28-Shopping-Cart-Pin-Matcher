
// code handling using common function //

// Case Function // 

function updateProductNumber(product, price, isIncreasing) {
    let ProductInput = document.getElementById(product +'-number')
    let ProductNumber = ProductInput.value;
    if (isIncreasing == true) {
        ProductNumber = parseInt(ProductNumber) + 1;
    }
    else if (ProductNumber > 0) {
        ProductNumber = parseInt(ProductNumber) - 1;
    }
    // update case total 
    ProductInput.value = ProductNumber
    let ProductTotal = document.getElementById(product+ '-total')
    ProductTotal.innerText = ProductNumber * price
    // calculate function call 
    calculateTotal()
}

// calculate total price 

function getInputValue(product){
    let ProductInput = document.getElementById(product + '-number')
    let ProductNumber = parseInt(ProductInput.value)
    return ProductNumber;
}

function calculateTotal(){
    let phoneTotal = getInputValue('phone') * 1219
    let caseTotal = getInputValue('case') * 50
    let SubTotal = phoneTotal + caseTotal
    let tax  = SubTotal / 10
    let totalPrice = SubTotal + tax 
    document.getElementById('sub-total').innerText  = SubTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = totalPrice

}


// Phone Quantity Increase Decrease  

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone',1219,true)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})


// Casing Increase Decrease 

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case',59,true)
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case',59,false)
})


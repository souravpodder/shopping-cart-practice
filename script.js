

function updateProductNumber(product, isIncreasing, productPrice){
  const productNumberField = document.getElementById(product + '-amount');
  let productNumber = parseInt(productNumberField.value);
  if(isIncreasing){
    productNumber = productNumber + 1;
  }else if(productNumber > 0){
    productNumber = productNumber - 1;
    
  }
  productNumberField.value = productNumber;

  const productPriceTotal = productPrice * productNumber;
  // show each product price total 
  document.getElementById(product + '-price').innerText = productPriceTotal;

  calculateTotal();
}

function calculateTotal(){
  // get pricetotal of each product 
  const phonePriceTotalText = document.getElementById('phone-price').innerText;
  const casePriceTotalText = document.getElementById('case-price').innerText;

  const subTotal = parseInt(phonePriceTotalText) + parseInt(casePriceTotalText);
  const tax = subTotal * 0.1;
  const total = subTotal + tax;

  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax').innerText = tax.toFixed(2);
  document.getElementById('total-amount').innerText = total;

}
// handle case events 
document.getElementById('case-plus').addEventListener('click',function(){

  updateProductNumber('case', true, 59);
  
});

document.getElementById('case-minus').addEventListener('click', function(){

  updateProductNumber('case',false, 59);
});

// handle phone events 
document.getElementById('phone-plus').addEventListener('click', function(){
  updateProductNumber('phone', true, 1219);
});

document.getElementById('phone-minus').addEventListener('click', function(){
  updateProductNumber('phone', false, 1219);
});

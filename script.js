

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

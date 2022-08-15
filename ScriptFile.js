//like Btn
var likes = document.getElementsByClassName("like");
for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", function () {
    if (likes[i].style.filter == "grayscale(0)") {
      likes[i].style.filter = "grayscale(1)";
    } else {
      likes[i].style.filter = "grayscale(0)";
    }
  });
}
//Plus Btn
var plusQuantity = document.getElementsByClassName("plus");
for (let i = 0; i < plusQuantity.length; i++) {
  plusQuantity[i].addEventListener("click", function () {
    plusQuantity[i].previousElementSibling.value++;
    totalPrice();
  });
}
//Minus Btn
var minQuantity = document.getElementsByClassName("minus");
for (let i = 0; i < plusQuantity.length; i++) {
  minQuantity[i].addEventListener("click", function () {
    if (minQuantity[i].nextElementSibling.value > 1) {
      minQuantity[i].nextElementSibling.value--;

      totalPrice();
    }
   
  });
}
//delete Button
var remove = document.getElementsByClassName("cancel");
for (let i = 0; i < remove.length; i++) {
  var btn = remove[i];
  btn.addEventListener("click", function () {
    var btnClick = event.target;
    var cont = document.getElementsByClassName("cont");
    btnClick.parentElement.remove(cont);
    totalPrice();
  });
}

//Total price

function totalPrice() {
  var total = document.querySelector(".tot");
  var prices = document.querySelectorAll(".price");
  var quantity = document.querySelectorAll(".qnt");
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum = sum + (parseInt(prices[i].innerHTML) * parseInt(quantity[i].value));
}
return (total.value = sum);
}
//price
function price(){
  var prices = document.querySelectorAll(".price");
  console.log(prices)
  var quantity = document.querySelectorAll(".qnt");
  for (let i = 0; i < prices.length; i++) {
    prod = parseInt(prices[i].innerHTML) * parseInt(quantity[i].value);
    
}
console.log(prices.values =prod);
}
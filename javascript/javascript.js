// Get all the buttons and phone names
var buttons = document.querySelectorAll('.btn-primary');
var phoneListInput = document.getElementById('phoneList');
var showPriceBtn = document.getElementById('showPriceBtn');
var totalPriceInput = document.getElementById('totalPrice');
var resetButton = document.getElementById('resetButton');

var phonePrices = {};
var phonesSelected = [];

// Function to handle the button click for each card
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var cardTitle = this.parentNode.querySelector('.card-title').innerText;

    if (!phonesSelected.includes(cardTitle)) {
      phonesSelected.push(cardTitle);
      phoneListInput.value = phonesSelected.join(' '); // Display all selected phones

      showPriceBtn.style.display = 'block';

      if (phonePrices[cardTitle]) {
        phonePrices[cardTitle] *= 2; // Multiply the price by 2
      } else {
        var price = parseFloat(this.parentNode.querySelector('.card-title').getAttribute('price').replace('$', ''));
        phonePrices[cardTitle] = price;
      }

      showTotalPrice();
    }
  });
}

// Function to calculate the total price
function showTotalPrice() {
  var totalPrice = Object.values(phonePrices).reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  totalPriceInput.value = 'Total Price: $' + totalPrice;
}

// Function to handle the 'Reset Phone List' button click
resetButton.addEventListener('click', function() {
  phoneListInput.value = '';
  phonesSelected = [];
  phonePrices = {};
  totalPriceInput.value = '';
  showPriceBtn.style.display = 'none'
});

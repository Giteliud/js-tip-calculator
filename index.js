//console.log('Eliud Githuku');
//fruit = prompt('What is your fav fruit?')
food = Number(prompt('How much was the food?'));
tipPercentage = Number(prompt('tip %')) / 100;
tipAmount = food * tipPercentage;
total = food + tipAmount;
alert('Your total is: '+ total + ' and the tip was: ' + tipAmount)
console.log('tipAmount', tipAmount);
console.log('total', total);
console.log("hello");

function codingBoss() {
	alert("Hello World");
} 
//The alert hasnt popped up because the function has not been called

codingBoss(); //Function has been called, now the alert pops up

document.querySelector('body').style.backgroundColor = "hotpink"; 
//Here we are calling the body and targeting the background color

document.querySelector('h1').style.color = "yellow";

document.querySelector('.button').style.backgroundColor = "orange";
//can target a class. Remember to use camelCase syntax when targetting stuff - backgroundColor

console.log(2 + 5);
console.log(2 * 5);
console.log(2 - 5);
console.log(2 / 5);
console.log ("Code" + " Like a Girl");
console.log(codingBoss);
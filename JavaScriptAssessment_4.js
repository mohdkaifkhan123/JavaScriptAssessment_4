/* Question 3:Write printAnimals() in such a way that it prints all animals in the object below.
   const animals = [ { species: 'Lion', name: 'King' }, 
   { species: 'Whale', name: 'Queen' } ]; 
   function printAnimals(i) { 
   this.print = function() { 
   console.log('#' + i + ' ' + this.species + ': ' + this.name); 
   } 
   this.print(); 
   }*/

// Implementation:

 const animals = [ 
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' } 
 ]; //An array animals is defined, containing two animal objects, each with species and name properties.

  //The printAnimals function is defined, which takes a parameter i. Inside the function, a new property print is added to the context (this) using this.print = function() { ... }.
  function printAnimals(i) { 
  //Within the printAnimals function, the print function (added to the context using this.print = function() { ... }) is immediately called after it is defined.
  this.print = function() { 
  console.log('#' + i + ' ' + this.species + ': ' + this.name);/*It will basically print the expected output : #0 Lion: King
                                                                                                             : #1 Whale: Queen*/
  } 
  this.print(); 
  }
  for(let i in animals){
    printAnimals.call(animals[i],i)//For each iteration, the printAnimals function is called using the call method. The call method is used to set the value of this explicitly inside the printAnimals function. In this case, this is set to the animals[i] object (the current animal object) for each iteration. The value of i (the current index) is also passed as an argument to the printAnimals function.
  }



// Question 8:Create an object `calculator` with three methods: - `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively. - `sum()` returns the sum of saved values. - `mul()` multiplies saved values and returns the result.
   
// Implementation:

const calculator = {
    input:function() {
    a = prompt("Enter the first number:");
    b = prompt("Enter the second number:");
  },//In this we declared a function in which there are two variables with the help of prompt we can take any two input from the user during run time
  add: function() {
    return +a + + b;//Here we are taking  + operator before a and b for to convert them into value and perform the addition
  },
  mul: function() {
    return a*b;// Here we will get the multiplication of two numbers
  }
};
calculator.input();//We are invoking our input function for to perform the calculator operation

const Addition = calculator.add();
console.log("Sum is:", Addition);//Print the addition of two numbers 

const Multiplication = calculator.mul();
console.log("Multiplication:", Multiplication);//Print the multiplication of two numbers




//Question 11:Write a JavaScript program to create a clock.

//Implementation:
//HTML Code
<div id = "clock" onload="currentTime()"></div>
//JavaScript Code
function currentTime() {//We start the code by defining a function, currentTime(). Inside the function, we store the current time in a variable called date.
    let date = new Date();//By using the new Date() constructor, this constructor returns the browser’s date along with the time zone.
    //These methods return the respective values when a date is passed, we store them in different variables.
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    //The date.getHours method returns values between 0-23, and given we are programming a 12 hours clock we use the following if statement to reset 12 to 0.
    if(hh === 0){
        hh = 12;
    }
    //And, we use another if to subtract hours greater than 12 and to assign the value of the session variable to “PM”.
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
     /*Firstly, the getHours(), getMinutes() and getSeconds() methods return values between 0 to 23, 59, 59 respectively. 
     The key point here is that single digit values are returned as (eg: 7), however, in our clock, these values need to be displayed as(eg: 07).
     And to achieve this we use ternary operators. This operator returns a value if the condition is true and another value if it is false. I’ve added the syntax below.*/
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
     //Next, we create a variable time to store the time in the desired format.
     let time = hh + ":" + mm + ":" + ss + " " + session;
    //To display the time we use the following code.
    document.getElementById("clock").innerText = time; 
    //We use this method to update the code every second, to keep our clock running.
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
currentTime();//For to invoke the particular function



/*Question 12:Make the following code work
              [1, 2, 3, 4, 5, 6].shuffle();*/

//Implementation
Array.prototype.shuffle = function() {
  /*The shuffle method generates a random index j from 0 to i, where i is the current index of the loop. 
    It then swaps the elements at indices i and j. This process is repeated for each element in the array, effectively shuffling the elements randomly*/
 for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};
//Finally, we call the shuffle method on the array [1, 2, 3, 4, 5, 6], and it shuffles the elements in-place. The shuffled array is then logged to the console.
const array = [1, 2, 3, 4, 5, 6];
array.shuffle();
console.log(array);


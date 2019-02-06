//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Horse(name, breed, color, age) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
    
}        

Horse.prototype.discipline = "Dressage";

var myHorse = new Horse("Elanda", "Danish-Warmblood", "Brown", 10);
console.log("My horse " + myHorse.name + " is best at " + myHorse.discipline + "!");






//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
    
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sliceFive = numbers.slice(4);

console.log(sliceFive);
console.log(sliceFive.length);






//3. Delete the last number in the array that you created above.

numbers.splice (9,1);
console.log(numbers);






//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

//Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

function swapify(fruit) {
    if (typeof fruit !== 'string') return "Not strawberry or banana";
    
    fruit = fruit.replace(/strawberry/, "banana");
    fruit = fruit.replace(/strawberries/, "bananas")
    fruit = fruit.replace(/Strawberry/, "Banana");
    fruit = fruit.replace(/Strawberries/, "Bananas")
    return fruit;
}

var assignmentText = swapify ('Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.');






//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var footballTeams = ["Liverpool", "Barcelona", "Brann", "PSG"];

changeArray.addEventListener(
    'click',function(){
        footballTeams.splice (0,4);
        footballTeams.push ("Fiat", " Mercedes", " Citroen", " BMW");
        document.getElementById("result").innerHTML = footballTeams;
        console.log(footballTeams);
    }
);






//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var persons = [

    {
    name : 'Jack',
    age : 33
    },
    
    {
    name : 'Louis',
    age : 23
    },
    
    {
    name : 'Emma',
    age : 18
    }
];

var personNames = persons.map(function (persons) {
 
    return persons.name; 
 
});
        
console.log(personNames);






//7. Create a simple function that logs the date.

        
var todaysDate = new Date();
console.log(todaysDate);  






// Arrary literal

const fruits = ["Mango", "Jackfruits", "Apple", "Banana"];
let bestFruit = fruits[1]; //Accessing the index 1 element
    console.log(bestFruit); 

let frt = fruits[fruits.length - 1]; // accesing last element of the arrary
    console.log(frt);

// Changing array element

    fruits[1] = 'Orange';   // Replaced #1 index with "Orange"
    
        console.log(fruits);
    fruits.push("lemon");       //added new element
        console.log(fruits);
// Loop through an array
let frtLen = fruits.length;
    for (let i = 0; i < frtLen; i++){   //the loop will stop when array length will be same as i.
        console.log(fruits[i]);     // output
    }

    function myFunction(){
        fruits[fruits.length] = "lemon";
        document.getElementById("Lemon").innerHTML = fruits;
    }
const num = [40, 100, 1, 5, 25, 10];

// sort alphabetically
    function myFunction1() {
        num.sort();
        document.getElementById("sorting").innerHTML = num;
    }
// sort numerically
    function myFunction2(){
        num.sort(function(a , b) {return (a-b)});
        document.getElementById("sorting").innerHTML = num;
    }
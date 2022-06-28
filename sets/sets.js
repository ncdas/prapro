// Js sets

// new Set() method

const letters = new Set(["a", "b", "c"]);   // created and pass an arry to a set method.
    letters.add("d");       // add new element in the arry
    console.log(letters.size);

// Add variables to a set
const banglaLetters = new Set();
let allElement = " ";
const k = "ka";
const kh = "kha";
const g = "gha";

    banglaLetters.add(k);
    banglaLetters.add(kh);
    banglaLetters.add(g);

    console.log(banglaLetters.size);

    banglaLetters.forEach(function(value){      // forEach function to display varibale data set
    
        allElement = allElement + value + "</br>";; 

        })

    console.log(allElement);

// forEach() method



// JS map

// Create a map and use 

const tollFair = new Map ([

    ["Bus", 2000],
    ["Honda", 100], 
    ["Truck", 2500], 
    ["Private Car", 850] 

]); 

let text = "";

tollFair.forEach(function(value, key){

    text = text + key + ' = ' + value + "<br>";
});

console.log(text);
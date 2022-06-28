// JS Loops

// For loop

const cars = ["BMW", "VOLVO", "SAAB"];
let i, len, text;
for (i = 0, len = cars.length; i < len; i++) {
    text += cars[i];
}
    console.log(text);

const person = {fname: "NC", lname: "Das", age: 25};
let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}
    console.log(txt);

const bigRivers = ["Padma", "Meghna", "Jamuna", "Dhanshiri"];
for (let i =0, bestRiver = ""; i < bigRivers.length; i++ ) {
    bestRiver = bigRivers.length -1;
    console.log(bestRiver);
}
const forOfLoop = ["Padma", "Meghna", "Jamuna", "Dhanshiri"];
let z = " ";
for (const x of forOfLoop) {
    z += x + "<br>";
    console.log(z);
}

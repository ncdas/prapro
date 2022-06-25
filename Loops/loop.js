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
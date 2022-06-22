// Global JS method - convert variables to number

// Number()
console.log(Number(true));
console.log(Number(false));
console.log(Number("1"));
console.log(Number("10.1"));
console.log(Number("10,1"));
console.log(Number("10 1"));
console.log(Number("ncdas"));
console.log(Number(true));

let x = new Date("06/23/2022");     // Number() method on Dates
console.log(Number(x));

// parseInt()

console.log(parseInt("100"));
console.log(parseInt("-100"));
console.log(parseInt("-10.11"));
console.log(parseInt("10 20 30"));
console.log(parseInt("100 years"));
console.log(parseInt("years 100"));

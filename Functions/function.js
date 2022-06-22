// Use function within variable as a Variable value
function toCelsius( fahrenheit){
    return (5/9) * (fahrenheit -32);
}

console.log(toCelsius(77));

let text = "The temperature is" + toCelsius(77) + "celsius";
console.log(text);
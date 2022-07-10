//Hottest day of the week

var weather_data = {
    sunday: {
        temp: 16,
        rain: 20,
    },
    monday: {
        temp: 15,
        rain: 76,
    },
    tuesday: {
        temp: 70,
        rain: 45,
    },
    wednesday: {
        temp: 18,
        rain: 60,
    },
    thrusday: {
        temp: 70,
        rain: 81,
    },
    friday: {
        temp: 70,
        rain: 48,
    },
};

let hottestDay;
let highestTemp = 0;

for (let x in weather_data) {
   if (weather_data[x].temp >= highestTemp) {
        highestTemp = weather_data[x].temp;
        hottestDay = x;
   }

}
   
console.log(hottestDay);
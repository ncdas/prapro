// Coolest Days

var weather_data = {
    sunday: {
        temp: 15,
        rain: 20,
    },
    monday: {
        temp: 15,
        rain: 76,
    },
    tuesday: {
        temp: 16,
        rain: 45,
    },
    wednesday: {
        temp: 18,
        rain: 60,
    },
    thrusday: {
        temp: 10,
        rain: 81,
    },
    friday: {
        temp: 10,
        rain: 48,
    },
};

let coolest_temp = 100;
let coolest_days = [];
for (let x in weather_data) {
    if (weather_data[x].temp < coolest_temp) {
        coolest_temp = weather_data[x].temp; 
        coolest_days.length = 0; 
        coolest_days.push(x);
    } else if (weather_data[x].temp == coolest_temp) {
        coolest_days.push(x);
    } else {
        null;
    }
}
console.log(coolest_days);
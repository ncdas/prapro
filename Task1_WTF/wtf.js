
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
        temp: 18,
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

let total_Rainy_Days = 0;
let coolest_temp = 100;
let coolest_days = [];
let hottest_temp = 0;
let hottest_Days = [];

// Rain Possibilities
for (let x in weather_data) {
    if (weather_data[x].rain > 50){
        total_Rainy_Days += 1;  
    }
    // Hotttest Days
    if (weather_data[x].temp > hottest_temp) {
        hottest_temp = weather_data[x].temp; 
        hottest_Days.length = 0;
        hottest_Days.push(x); 
    }   else if (weather_data[x].temp == hottest_temp) {
            hottest_Days.push(x);
    }   else  {
       null;
    }
    // Coolest Days
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
console.log(total_Rainy_Days);
console.log(hottest_Days);
console.log(coolest_days);
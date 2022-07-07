// Weather Temperature Forecast
var weather_data = {
    sunday: {
        temp: 13,
        rain: 20,
    },
    monday: {
        temp: 16,
        rain: 76,
    },
    tuesday: {
        temp: 11,
        rain: 45,
    },
    wednesday: {
        temp: 18,
        rain: 60,
    },
    thrusday: {
        temp: 17,
        rain: 81,
    },
    friday: {
        temp: 14,
        rain: 48,
    },
};

//Total days of rain possibility more than 50%

let all_Rainy_Days = 0;
let total_dayOf_rain = 0;
for (let x in weather_data) {
    if (weather_data[x].rain > 50){
        all_Rainy_Days += 1; 
    }
}
total_dayOf_rain += all_Rainy_Days;
console.log(total_dayOf_rain);

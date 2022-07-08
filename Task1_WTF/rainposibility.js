// Weather Temperature Forecast
var weather_data = {
    sunday: {
        temp: 13,
        rain: 2,
    },
    monday: {
        temp: 16,
        rain: 71,
    },
    tuesday: {
        temp: 11,
        rain: 45,
    },
    wednesday: {
        temp: 18,
        rain: 17,
    },
    thrusday: {
        temp: 17,
        rain: 69,
    },
    friday: {
        temp: 14,
        rain: 48,
    },
};

//Total days of rain possibility more than 50%

let total_Rainy_Days = 0;
//let total_dayOf_rain = 0;
for (let x in weather_data) {
    if (weather_data[x].rain > 50){
        total_Rainy_Days += 1;  
    }
}
console.log(total_Rainy_Days);

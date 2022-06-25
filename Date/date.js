// JS Date

const d = new Date();
    console.log(d);

const dd = new Date(2022, 04, 15, 18, 35, 59, 9); // Js count months from 0
    console.log(dd);
    dd.setDate(35);
    console.log(dd);
// Compare January 2020 with January 2022

let compareOutput;
const date1 = new Date();
    date1.setFullYear(2020, 01, 01);
const date2 = new Date();
    date2.setFullYear(2017, 01, 01);

if (date1 > date2) {
    compareOutput = `${date2} comes before ${date1}`;
}
else {
    compareOutput =  `${date1} comes before ${date2}`;
}

    console.log(compareOutput);
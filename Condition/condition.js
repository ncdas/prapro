// Conditional Statements

//If else

function myFunction(){
    let votable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        votable = "Input is not a number, You are not eligable";
    } 
    else {
        votable = (age >= 18)? "You are Eligible": "You are not eligable";
    }
     
    document.getElementById("output").innerHTML = votable + " to vote";
}

// Swtich statement

let day;

    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3: 
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday"
            break;
        case 6: 
            day = "Saturday";
    }

    console.log(day);
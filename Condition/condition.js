// Conditional Statements



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
// examines input. If the value is wrong, an exception (err) is thrown.

function myFunction() {

    let inpt = document.getElementById("inNumber").value;
    const msg = document.getElementById("message"); 
        msg.innerHTML = " ";
    try {
        if (inpt == " ") throw "empty";
        if (isNaN(inpt)) throw " not a number";
        inpt = Number(inpt);
        if (inpt <= 10) throw "too low";
        if (inpt >= 20) throw " too high";
    }
    catch(err) {
        msg.innerHTML = "Input is " + err;
    }
}


// Accessing Object Methods

let text = " ";
const totalMarks = { 
    bangla: 50, 
    english: 60, 
    math: 70,
    otherSubject : function() {
        return this.bangla;
    }
};
text = totalMarks["bangla"] + " " + "is marks for bangla";
console.log(text);

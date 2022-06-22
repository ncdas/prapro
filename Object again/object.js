// JS Object 

const totalMarks = { 
    bangla: 50, 
    english: 60, 
    math: 70,
    otherSubject : function() {
        return this.bangla;
    }
};
console.log(totalMarks.otherSubject());

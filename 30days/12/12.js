'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }

    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName
            + "\nID: " + this.idNumber
        );
    }
}

class Student extends Person {
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification);
        this.testScores = scores;
    }

    calculate() {
        var grade_tot = 0;
        for (var i = 0; i < this.testScores.length; i++) {
            grade_tot += this.testScores[i];
        }

        var result = grade_tot / this.testScores.length;

        if (result >= 90) {
            return "O";
        } else if (result >= 80) {
            return "E";
        } else if (result >= 70) {
            return "A";
        } else if (result >= 55) {
            return "P";
        } else if (result >= 40) {
            return "D";
        } else {
            return "T";
        }
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)

    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}

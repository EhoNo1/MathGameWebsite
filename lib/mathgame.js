let addition = require('./questions/addition.js');
let subtraction = require('./questions/subtraction.js');
let multiplication = require('./questions/multiplication.js');
let division = require('./questions/division.js');

let math = require('./math.js');

let mathgame = {


    getQuestion: function() {
        switch(math.getRandomInt(0,4)) {
            case 0:
                return addition.getAdditionQuestion();
            case 1:
                return subtraction.getSubtractionQuestion();
            case 2:
                return multiplication.getMultiplicationQuestion();
            case 3:
                return division.getdivisionQuestion();
        }
    },



    validateAnswer: function(answer, userAnswer) {
        return (answer == userAnswer);
    }
}

module.exports = mathgame;





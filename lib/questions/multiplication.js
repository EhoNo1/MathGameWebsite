let math = require('../math.js');

let multiplication = {
    getMultiplicationQuestion: function() {
        let n1 = math.getRandomInt(0,20)
        let n2 = math.getRandomInt(0,20)
        let a = n1 * n2

        return {
            number1: n1,
            number2: n2,
            question: n1 + " x " + n2,
            answer: a
        };
    },
}

module.exports = multiplication;
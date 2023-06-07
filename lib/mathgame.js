let math = require('./math.js');


let mathgame = {
    getAdditionQuestion: function() {
        let n1 = math.getRandomInt(0,20)
        let n2 = math.getRandomInt(0,20)

        return {
            number1: n1,
            number2: n2,
            text: n1 + " + " + n2,
            answer: n1 + n2
        };
    }
}

module.exports = mathgame;





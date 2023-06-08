let math = require('../math.js');

let division = {
    getdivisionQuestion: function() {
        let n1 = math.getRandomInt(1,20)
        let n2 = math.getRandomInt(1,20)
        let numerator = n1 * n2

        return {
            question: numerator + " / " + n2,
            answer: n1
        };
    },
}

module.exports = division;
let addition = require('./questions/addition');

let mathgame = {


    getQuestion: function() {
        
        return addition.getAdditionQuestion();
    },



    validateAnswer: function(answer, userAnswer) {
        return (answer == userAnswer);
    }
}

module.exports = mathgame;





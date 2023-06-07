const express = require('express')
const mathgame = require('./lib/mathgame.js')


let app = express()


let handlebars = require('express-handlebars')
    .create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));




app.get('/', function(req,res) {
    let q = mathgame.getAdditionQuestion()

    res.render('home', {question: q.text});
});


app.listen(app.get('port'), function() {
    console.log('Listening');
});

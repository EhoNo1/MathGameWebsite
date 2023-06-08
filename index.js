const express = require('express')
const mathgame = require('./lib/mathgame.js')


let app = express()


let handlebars = require('express-handlebars')
    .create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());




app.get('/', function(req,res) {
    res.render('home', mathgame.getQuestion());
});



app.post('/', function(req,res) {
    let response = (req.body.answer == req.body.userAnswer);

    let q = mathgame.getQuestion();
    q.response = response;
    console.log(q);

    res.render('home', q);
});


app.listen(app.get('port'), function() {
    console.log('Listening');
});

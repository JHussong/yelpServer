    
let express = require('express');
let app = express(); 

let yelp = require('./controllers/appcontroller');

app.use(require('./middleware/headers'));

let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/yelp',yelp)

app.listen(3000, function(){
    console.log('App is listening on 3000.')
});
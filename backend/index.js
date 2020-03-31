const express = require('express');

//const cors = require('cors');

const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(express.static(__dirname + '../frontend'));
//app.use(cors);
app.use('/api', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

const port = 3331;

app.listen(port,() => {
    console.log('server running on http://localhost:',port);
})

app.get('/',(request, response) =>{
    response.send('Funcionando');
})
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const pirates = require('./routes/pirates');



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.use('/api/pirates', pirates);

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
require ('dotenv').config ();
const express = require('express');
const path = require('path');
const app = express();
const formRoute = require ('./routes/form.route');
const ccavRequestHandler = require ('./routes/ccavRequestHandler.route');
const ccavResponseHandler = require ('./routes/ccavResponseHandler.route');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use ('/', formRoute);
app.use ('/ccavRequestHandler', ccavRequestHandler);
app.use ('/ccavResponseHandler', ccavResponseHandler);

app.listen(5000, () => console.log('Listening on port 5000'));
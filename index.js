const express = require('express');
const app = express();
const port = 9000;
const expressHandlebars = require('express-handlebars');

// directing app to assets folder for static files
app.use(express.static('./assets'));

// configuring handlebar as our template engine
app.engine('hbs', expressHandlebars({
    defaultLayout: 'main',
    extname : '.hbs'
}));

app.set('view engine', 'hbs');

//loading router
app.use('/', require("./routes"));


// listening to the server at port
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting server : ${err}`);
    }

    console.log(`Server started at port : ${port}`);
});

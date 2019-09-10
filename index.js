const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path=require('path'); 

const PORT=process.env.PORT||5000;

//set middlebar referance

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 const otherstuff="Welcome to karikalan magishow"
app.get('/', function (req, res) {
    res.render('home',{stuff:otherstuff});
});

//set up static floder
app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT,()=>console.log('Server liserning '+PORT));
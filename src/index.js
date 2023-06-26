const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(morgan('combined'));
app.set('views', path.join(__dirname, '/resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

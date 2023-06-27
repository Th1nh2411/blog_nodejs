const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('combined'));
app.set('views', path.join(__dirname, '/resources/views'));

// app Route
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

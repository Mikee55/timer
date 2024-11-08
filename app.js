const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res) => {
    console.log('Home page');
    res.render('timer')
});

const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}`));


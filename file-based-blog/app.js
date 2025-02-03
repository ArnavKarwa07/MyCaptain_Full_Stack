const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', require('./routes/home'));
app.use('/new', require('./routes/new'));
app.use('/create', require('./routes/create'));
app.use('/read', require('./routes/read'));
app.use('/edit', require('./routes/edit'));
app.use('/update', require('./routes/update'));
app.use('/delete', require('./routes/delete'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

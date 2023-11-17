const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=> {
  res.status(200).send('Welcome to MySql2');
});

require('./app/router/website/category.routes')(app);
require('./app/router/website/form.routes')(app);

app.listen(5000);

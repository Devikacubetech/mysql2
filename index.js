const cors = require('cors');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const appconfig = require('./app/config/app.config');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async(req, res) => {
  // const transporter = nodemailer.createTransport({
  //   host: appconfig.email_host,
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: appconfig.email_user,
  //     pass: appconfig.email_password,
  //   },
  // });

  // const info = await transporter.sendMail({
  //   from: `"sender name" <${appconfig.email_user}>`, 
  //   to: "abc@gmail.com",  // list of receivers
  //   subject: "Hello ✔", // Subject line
  //   text: "Hello world?", //plain text body
  //   html: "<b>Hello world?</b>", // html body
  // });
  
  res.status(200).send('Welcome to MySql2');
});

require('./app/router/website/category.routes')(app);
require('./app/router/website/form.routes')(app);
require('./app/router/website/image.routes')(app);

app.listen(5000);

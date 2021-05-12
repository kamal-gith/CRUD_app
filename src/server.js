const express = require('express');
const app = express();
require('dotenv').config();

const { PORT } = process.env;
const port = process.env.PORT || 9005;

const db = require('./db/db_setup');
db();

const _models = require('./models/models');

const approutes = require('./routes/app_routes');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(approutes);
app.get('/', (req, res) => {
    res.status(200).json({ message: '****You are most welcome on board....****' });
});

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const mongoose = require('mongoose');
const app = require('./index')
const Sorrowscope = require("./models/sorrowscopeModel");
const {insertToDB} = require("./misc/parser");
const {parseText} = require("./misc/parser");
const { addSorrowscope } = require('./controllers/sorrowscopeController');

const PORT = process.env.PORT || 5000;


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then((connection) => console.log('DB connection established'));


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));


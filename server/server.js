const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { response } = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const Router = require('./router/route')

const ConectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

dotenv.config();
// mongoose.connect(process.env.MONGO_DB, ConectionParams
// ).then(() => {
//     console.log("db parameter");
// }).catch((err) => { console.log("error: ", err); })

mongoose.connect(process.env.DB_CONNECT, ConectionParams
).then(() => {
    console.log("db parameter");

}).catch((err) => { console.log("error:", err); })


// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // For legacy browser support
// }
// app.use(cors(corsOptions));

app.use(cors());

app.use(bodyParser.json())
// app.use(bodyParser.json())
app.use('/', Router)

app.listen(8080, () => {
    console.log('listening')
})

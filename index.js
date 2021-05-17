const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send("yes it worked")
})

// const certifcateRoute = require('./routes/pdfGenerator');
const apiRoute = require('./routes/api');

// require('dotenv/config');
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(express.static('dist'));
app.use('/api',apiRoute);

// mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("successfully connected to db");
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
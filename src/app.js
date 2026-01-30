const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db')
require('dotenv').config();
const PORT = process.env.PORT || 5000;


connectDB();
app.use(express.json());
app.use(helmet());
app.use(cors());


app.use('/api/products', require('./routes/productRoute'));
app.use('/api/auth',require('./routes/authRoute'))

app.listen(PORT, () => {
    console.log('server is started ' + PORT)
})
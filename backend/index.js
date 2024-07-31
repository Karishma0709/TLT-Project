const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const router = require("./routes");
 // Import the registration routes
 const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
// Routes
app.use('/api', router);

const PORT = process.env.PORT || 5050; // or any other available port

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Connected to DB');
      console.log(`Server is running on port.... ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB', err);
  });

 
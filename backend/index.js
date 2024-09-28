const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const router = require('./routes');
const ADMIN_URL = process.env.ADMIN_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();

// Middleware
app.use(
  cors({
    origin: [`${FRONTEND_URL}`, `${ADMIN_URL}`], // Update with your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/notifiesfiles', express.static('notifiesfiles'));
app.use('/files', express.static('files'));
app.use('/SyllabusUploadFiles', express.static('SyllabusUploadFiles'));
app.use('/prevYearPDFuploadUpload', express.static('prevYearPDFuploadUpload'));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Routes
app.use('/api', router);

const PORT = process.env.PORT || 8080; // Changed port number

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Connected to DB');
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB', err);
  });

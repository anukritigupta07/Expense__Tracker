const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const userRoute = require('./routes/users/usersRoute');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const app = express();
//env

dotenv.config();

dbConnect();




app.use(express.json());

app.use('/api/users',userRoute);
app.use(notFound);
app.use(errorHandler);


module.exports = app;

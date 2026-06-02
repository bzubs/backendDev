const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {courseRouter} = require('./routes/course')
const {userRouter} = require('./routes/user')

const app = express();


app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

app.listen(3000);


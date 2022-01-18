const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const userRotuer = require("./routes/user");
const authRouter = require("./routes/auth");


app = express();

dotenv.config();

const PORT = process.env.PORT
const MONGODB_URI = process.env.DB

mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, ()=> {
    console.log("Connected to mongo")
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRotuer)
app.use("/api/auth", authRouter)

app.listen(PORT, ()=>{
    console.log("Server running")
});
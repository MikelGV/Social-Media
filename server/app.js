const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const multer = require('multer');
const path = require("path")
const userRotuer = require("./routes/user");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");

app = express();

dotenv.config();

const PORT = process.env.PORT
const MONGODB_URI = process.env.DB

mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, ()=> {
    console.log("Connected to mongo")
});

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req,res) => {
    try {
        return res.status(200).json("File uploaded successfully.");
    } catch (err) {
        console.log(err)
    }
})

app.use("/api/users", userRotuer);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.listen(PORT, ()=>{
    console.log("Server running")
});
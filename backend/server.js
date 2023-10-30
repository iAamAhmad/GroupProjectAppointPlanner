const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("./config/db");

//dotenv config
dotenv.config();

//mongodb connection
// mongoose();
let PORT = 4000;

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));

//listen port
app.listen(PORT, 'localhost', (req, res)=>{
   console.log(`Server starting at ${PORT}`);
})

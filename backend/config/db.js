
const mongoose = require("mongoose");
const url = "mongodb+srv://appointment:Appointment(99)@cluster0.ayljpxr.mongodb.net/"
mongoose.connect(url, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
   console.log("Connected");
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed"));

module.exports = mongoose;
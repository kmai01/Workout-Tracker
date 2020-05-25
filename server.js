const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose");


const app = express();

app.use(logger("dev"));

const PORT = process.env.PORT || 8080;



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true,
useUnifiedTopology: true ,
useFindAndModify: false
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});
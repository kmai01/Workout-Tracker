const express = require("express");

const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
})

require("./public/apiRoute.js")(app);
require("./routes/htmlRoute.js")(app);

app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});
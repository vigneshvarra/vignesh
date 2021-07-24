const mongoose =require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/summerschool",
{userNewUrlParsar: true, useUnifiedTopology: true}
).then(() => {console.log("Database connected")})
.catch((e) => {console.log("database connection error: "+ e)})
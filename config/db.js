const mongoose = require("mongoose");
const url =
"mongodb+srv://teesha2201:gupta@cluster0.dbbzgnj.mongodb.net/interview?retryWrites=true&w=majority";


mongoose.get("strictQuery", true);

const Connection = async () => {
  try {
    mongoose.connect(url);
    console.log("database connected");
  } catch (err) {
    console.log(err, "erro from database");
  }
};
module.exports = Connection;

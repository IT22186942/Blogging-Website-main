const mongoose = require("mongoose");
require("dotenv").config();
async function main() {
  const uri = process.env.MONGODB_URI;
  await mongoose.connect(uri, { useNewUrlParser: true });
  console.log("post connected");
}
main()
const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
    thumbnail:String,
    date:Number,
    like:Number,
    likedby:[String]
    });
  
    

const PosT = mongoose.model("post", postSchema);
module.exports = PosT
const mongoose = require("mongoose");
require("dotenv").config();
async function main() {
  const uri = process.env.MONGODB_URI;
  await mongoose.connect(uri, { useNewUrlParser: true });
  console.log("profile connected");
}
main();
const profileSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  password:String,
  type:String,
  googleId: String,
  dp: String,
  bio: String,
  weblink:String,
  facebook:String,
  whatsapp:String,
  twitter:String,
  instagram:String,
  phoneno:String
});

const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;

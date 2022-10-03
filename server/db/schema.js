require("dotenv").config();
const mongoose = require("mongoose");
const u = process.env.REACT_APP_MONGODB_USERNAME;
const p = process.env.REACT_APP_MONGODB_PASSWORD;
const uri = `mongodb+srv://${u}:${p}@cluster0.jx9wj4g.mongodb.net/Books?retryWrites=true&w=majority`; // Enter username and passwords

mongoose.connect(uri);

let userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  profilePhoto: { type: String },
  phoneNumber: { type: String },
  lat: { type: String },
  long: { type: String },
  books: [{ type: String }],
  ratingTotal: { type: Number },
  ratingsCount: { type: Number },
  sub: { type: String },
  trades: [
    {
      transactionID: mongoose.ObjectId,
      ratingNumber: { type: String },
      tradedToUser: { type: Number },
      status: { type: String },
      isbn: { type: String },
      dateTime: { type: Date },
    },
  ],
  chats: [
    {
      conversationID: { type: Number },
      dateTime: { type: Date },
      members: [{ type: Number }],
      messages: [
        {
          sender: { type: Number },
          message: { type: String },
          timeStamp: { type: Date },
        },
      ],
    },
  ],
});

let User = mongoose.model("users", userSchema);

let getData = () => {
  return User.find({}).limit(10);
};

<<<<<<< HEAD
let getISBNs = () => {
  return User.find();
};

module.exports = {
  getData,
  getISBNs,
};
=======
module.exports = User;
>>>>>>> ed7598398eed627b50cd2d847404531adabbc6d0

const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", NoteSchema);


// const mongoose = require('mongoose');
// const CustomerSchema = mongoose.Schema ({
//    name: String,
//    feedback:String,
//    email:String, 
//    telephone:String
// });

// module.exports = mongoose.model('Customer', CustomerSchema);
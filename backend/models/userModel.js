// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name : String,
//   email : {
//     type : String,
//     unique :true,
//     required : true
//     },
//     password : String
//    },
//    {
//     timestamps : true
//    }) 

//    const userModel =mongoose.model("userRegister", userSchema)

//    module.exports = userModel ;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Added required validation for consistency
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true, // Optional: Converts email to lowercase
    trim: true // Optional: Trims whitespace from email
  },
  password: {
    type: String,
    required: true // Added required validation for password
  }
}, {
  timestamps: true
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

// const bcrypt = require('bcryptjs');
// const UserModel = require('../models/userModel');


// async function userSignUpController(req, res) {
//   try {
//     const { email, password, name } = req.body;
//      console.log("req.body" , req.body)
//     // Check if email, password, and name are provided
//     if (!email) {
//       throw new Error("Please provide an email");
//     }

//     if (!password) {
//       throw new Error("Please provide a password");
//     }

//     if (!name) {
//       throw new Error("Please provide a name");
//     }

//     // Check if user already exists
//     const user = await userModel.findOne({ email });
//     if (user) {
//       throw new Error("User already exists");
//     }

//     // Hash the password
//     const salt = bcrypt.genSaltSync(10);
//     const hashPassword = bcrypt.hashSync(password, salt);

//     if (!hashPassword) {
//       throw new Error("Something went wrong with password hashing");
//     }

//     // Prepare payload
//     const payload = {
//       ...req.body,
//       role: "GENERAL",
//       password: hashPassword,
//     };

//     // Create a new user
//     const newUser = new userModel(payload);
//     const saveUser = await newUser.save();

//     // Respond with success message
//     res.status(201).json({
//       data: saveUser,
//       success: true,
//       error: false,
//       message: "User created successfully",
//     });

//   } catch (err) {
//     res.status(500).json({
//       message: err.message || err,
//       error: true,
//       success: false,
//     });
//   }
// }

// module.exports = userSignUpController;

const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel'); // Ensure the path is correct

async function userSignUpController(req, res) {
  try {
    const {name, email, password, } = req.body;
    console.log("req.body", req.body);

    // Check if email, password, and name are provided
    if (!name) {
      return res.status(400).json({ message: "Please provide a name", error: true, success: false });
    }
    if (!email) {
      return res.status(400).json({ message: "Please provide an email", error: true, success: false });
    }

    if (!password) {
      return res.status(400).json({ message: "Please provide a password", error: true, success: false });
    }

   // Check if user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists", error: true, success: false });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      return res.status(500).json({ message: "Something went wrong with password hashing", error: true, success: false });
    }

    // Prepare payload
    const payload = {
      name,
      email,
      password: hashPassword,
      role: "GENERAL"
    };

    // Create a new user
    const newUser = new UserModel(payload);
    const saveUser = await newUser.save();

    // Respond with success message
    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created successfully",
    });

  } catch (err) {
    console.error("Error in userSignUpController:", err); // Log the error for debugging
    res.status(500).json({
      message: err.message || "An error occurred",
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;

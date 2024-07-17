// import User from "../models/user.model.js";
// import extend from "lodash/extend.js";
// import errorHandler from "./error.controller.js";
// const create = async (req, res) => {
//   console.log(req.body);
//   const user = new User(req.body);
//   try {
//     await user.save();
//     return res.status(200).json({
//       message: "Successfully signed up!",
//     });
//   } catch (err) {
//     return res.status(400).json({
//       error: errorHandler.getErrorMessage(err),
//     });
//   }
// };
// const list = async (req, res) => {
//   try {
//     let users = await User.find().select("name email 	updated created");
//     res.json(users);
//   } catch (err) {
//     return res.status(400).json({
//       error: errorHandler.getErrorMessage(err),
//     });
//   }
// };
// const userByID = async (req, res, next, id) => {
//   try {
//     let user = await User.findById(id);
//     if (!user)
//       return res.status("400").json({
//         error: "User not found",
//       });
//     req.profile = user;
//     next();
//   } catch (err) {
//     return res.status("400").json({
//       error: "Could not retrieve user",
//     });
//   }
// };
// const read = (req, res) => {
//   req.profile.hashed_password = undefined;
//   req.profile.salt = undefined;
//   return res.json(req.profile);
// };

// const update = async (req, res) => {
//   try {
//     let user = req.profile;
//     user = extend(user, req.body);
//     user.updated = Date.now();
//     await user.save();
//     user.hashed_password = undefined;
//     user.salt = undefined;
//     res.json(user);
//   } catch (err) {
//     return res.status(400).json({
//       error: errorHandler.getErrorMessage(err),
//     });
//   }
// };
// const remove = async (req, res) => {
//   try {
//     let user = req.profile;
//     let deletedUser = await user.deleteOne();
//     deletedUser.hashed_password = undefined;
//     deletedUser.salt = undefined;
//     res.json(deletedUser);
//   } catch (err) {
//     return res.status(400).json({
//       error: errorHandler.getErrorMessage(err),
//     });
//   }
// };
// export default { create, userByID, read, list, remove, update };


import User from '../models/user.model.js';

// Create a new user
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Sign in a user
export const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'User signed in successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Sign out a user
export const signOutUser = (req, res) => {
  res.status(200).json({ message: 'User signed out successfully' });
};

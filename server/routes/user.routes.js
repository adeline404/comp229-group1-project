import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";
const router = express.Router();
router.route("/api/users").get(userCtrl.list).post(userCtrl.create);
router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);
router.param("userId", userCtrl.userByID);
router.route("/api/users").post(userCtrl.create);
router.route("/api/users").get(userCtrl.list);
router.param("userId", userCtrl.userByID);
router.route("/api/users/:userId").get(userCtrl.read);
router.route("/api/users/:userId").put(userCtrl.update);
router.route("/api/users/:userId").delete(userCtrl.remove);

export default router;


// import express from 'express';
// import {
//   createUser,
//   getAllUsers,
//   getUserById,
//   updateUser,
//   deleteUser,
//   signInUser,
//   signOutUser,
// } from '../controllers/user.controller.js';

// const router = express.Router();

// router.post('/users', createUser);
// router.get('/users', getAllUsers);
// router.get('/users/:userId', getUserById);
// router.put('/users/:userId', updateUser);
// router.delete('/users/:userId', deleteUser);
// router.post('/auth/signin', signInUser);
// router.get('/auth/signout', signOutUser);

// export default router;

const {
  login,
  register,
  getAllUsers,
  logOut,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.get("/allusers/:id", getAllUsers);
router.post("/register", register);
router.get("/logout/:id", logOut);

module.exports = router;
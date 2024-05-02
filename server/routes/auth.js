const {
  login,
  register,
  getAllUsers,
  logOut,
  updateStatus
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.get("/allusers/:id", getAllUsers);
router.post("/register", register);
router.get("/logout/:id", logOut);
router.patch("/status/:id",updateStatus)

module.exports = router;
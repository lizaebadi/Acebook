const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/", UsersController.Index);
router.post("/", UsersController.Create);
router.get("/profile", UsersController.Info);
router.put("/update", UsersController.Update);


module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const PostsController = require("../controllers/posts");

// set up multer storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploaded_photos"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// create multer instance
const upload = multer({ storage: storage });

router.get("/", PostsController.Index);
router.post("/", upload.single("image"), PostsController.Create);

module.exports = router;

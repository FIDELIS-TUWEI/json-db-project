const express = require("express");
const { protectRoute } = require("../middleware/protectRoute");
const { createPost } = require("../controllers/post.controller");
const router = express.Router();

router.post("/create", protectRoute, createPost);

module.exports = router;
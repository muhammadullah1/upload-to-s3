const express = require("express");
const router = express.Router();
const uploadRouter = require("./upload");

router.use("/uploads", uploadRouter);

module.exports = router;

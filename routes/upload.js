const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/upload");
const validate = require("../middlewares/validate");
const { signedUrl } = require("../validations/upload");

router.get("/", controller.createSignedUrl);
router.post("/", validate(signedUrl), controller.updateUpload);
router.put("/", controller.getAll);

module.exports = router;

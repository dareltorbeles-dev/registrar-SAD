const express = require("express");
const router = express.Router();

const {getEnrollmentDetail} = require("../controllers/enrollmentDetailController");
const {postEnrollmentDetail} = require("../controllers/enrollmentDetailController");

router.get("/", getEnrollmentDetail);
router.post("/", postEnrollmentDetail);

module.exports = router;
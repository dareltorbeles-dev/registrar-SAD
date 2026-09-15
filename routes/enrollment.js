const express = require("express");
const router = express.Router();


const {getEnrollments} = require ("../controllers/enrollmentController");
const {postEnrollments} = require ("../controllers/enrollmentController");
const {updateEnrollments} = require("../controllers/enrollmentController");
const {deleteEnrollments} = require ("../controllers/enrollmentController")


router.get("/", getEnrollments);
router.post("/", postEnrollments)
router.put("/:id", updateEnrollments);
router.delete("/:id", deleteEnrollments)


module.exports = router;

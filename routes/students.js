
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require ("express");
const router = express.Router ();


const {getStudents} = require ("../controllers/studentsController");
const {postStudents} = require ("../controllers/studentsController");
const {updateStudents} = require ("../controllers/studentsController");
const {deleteStudents} = require ("../controllers/studentsController");



router.get("/", getStudents);
router.post("/", postStudents);
router.put("/:id", updateStudents);
router.delete("/:id", deleteStudents);

module.exports = router;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

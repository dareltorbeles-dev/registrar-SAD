const express = require("express");
const router = express.Router();

const {getSubject} = require ("../controllers/subjectController");
const {postSubject} = require("../controllers/subjectController")

router.get("/", getSubject);
router.post("/", postSubject);

module.exports = router


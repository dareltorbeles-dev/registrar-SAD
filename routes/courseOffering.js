const express = require("express");
const route = express.Router();

const {getCourseOffering} = require ("../controllers/courseOfferingController");
const {postCourseOffering} = require ("../controllers/courseOfferingController")

route.get("/", getCourseOffering);
route.post("/", postCourseOffering)

module.exports = route
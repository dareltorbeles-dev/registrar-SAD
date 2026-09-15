const db = require("../db");
const { post } = require("../routes/enrollmentDetail");

const getCourseOffering = (callback) => {
    const sql = `SELECT * FROM course_offering`

    db.query(sql, callback) 
}

const postCourseOffering = (student, callback) => {
    const sql = `INSERT INTO course_offering (subject_id, instructor_id, section_id, semester_id)
    VALUES (?, ?, ?, ?)
    `;

    db.query (
        sql,
        [
            student.subject_id,
            student.instructor_id,
            student.section_id,
            student.semester_id
        ],
        callback
    )
}

module.exports = {
    getCourseOffering,
    postCourseOffering
}
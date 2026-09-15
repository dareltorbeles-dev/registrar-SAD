const db = require ("../db");

const getEnrollmentDetail = (callback) => {
    const sql = `SELECT * FROM enrollment_detail`;

    db.query (sql, callback)
}

const postEnrollmentDetail = (student, callback) => {
    const sql = `INSERT INTO enrollment_detail (enrollment_id, course_offering_id)
    VALUES (?, ?)
    `;

    db.query(
        sql,
        [
            student.enrollment_id,
            student.course_offering_id
        ],

        callback
    )
}


module.exports = {
    getEnrollmentDetail,
    postEnrollmentDetail
}
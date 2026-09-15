//ENROLLMENT SERIVCE 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const db = require("../db");

const getEnrollments = (callback) => {
    
    const sql = `SELECT * FROM enrollment`;

    db.query(sql, callback);

};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postEnrollments = (student, callback) =>{
    const sql = `INSERT INTO enrollment (student_id, semester_id)
    VALUES (?, ?)
    `;

    db.query(
        sql, [
            student.student_id,
            student.semester_id
        ],
        callback 
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateEnrollments = (id, enrollment, callback) => {


    const sql = `UPDATE enrollment


    SET student_id = ?,
            semester_id = ?
         WHERE id = ?
    `;


    db.query(
        sql,
        [
            enrollment.student_id,
            enrollment.semester_id,
            id
        ],
        callback
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteEnrollments = (id, callback) => {

    const sql = `DELETE FROM enrollment WHERE id = ?`;

    db.query(
        sql,
        [id],
        callback
    )
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    getEnrollments,
    postEnrollments,
    updateEnrollments,
    deleteEnrollments
}
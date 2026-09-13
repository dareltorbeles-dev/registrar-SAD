
const db = require("../db");

const getStudents = (callback) => {
    const sql = `SELECT * FROM students`;

    db.query(sql, callback);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postStudents = (student, callback) => {

    const sql = `INSERT INTO students (student_number, first_name, last_name, course, year_level)
    VALUES (?, ?, ?, ?, ?)`;


    db.query(
        sql,
        [
            student.student_number,
            student.first_name,
            student.last_name,
            student.course,
            student.year_level,
        ],
            callback
    );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateStudents = (id, student, callback) => {

    const sql = `UPDATE students

    SET student_number = ?,
    first_name = ?,
    last_name = ?,
    course = ?,
    year_level = ?
    WHERE id = ?
    `;

    db.query (
        sql, [
            student.student_number,
            student.first_name, 
            student.last_name,
            student.course,
            student.year_level,
            id
        ],

    callback
    );
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteStudents= (id, callback) => {
    const sql = `DELETE FROM students WHERE id = ?`;

      db.query(
        sql,
        [id],
        callback
    );
};

module.exports = {
    getStudents,
    postStudents,
    updateStudents,
    deleteStudents

}
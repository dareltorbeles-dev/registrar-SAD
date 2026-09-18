const db = require("../db");

const getSubject = (callback) => {
    const sql = `SELECT * FROM subject`;

    db.query (sql, callback)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postSubject = (subject, callback) => {

    const sql = `INSERT INTO subject (subject_code, subject_name, program_id) 
    VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [
            subject.subject_code,
            subject.subject_name,
            subject.program_id
        ],

        callback
    )
}


module.exports = {
    getSubject,
    postSubject

}
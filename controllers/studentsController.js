const studentsServices = require ("../services/studentsService");


const getStudents = (req, res) =>{

    const sql = `SELECT * FROM students`;

    studentsServices.getStudents((err,result) =>{

        if (err) {
            console.error (err);
            return res.status(500).json({
                message: "Failed to get students"
            })
        }

        res.json (result);
    })
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postStudents = (req, res) => {
    const student = req.body;

    const sql = `INSERT INTO students (student_number, first_name, last_name, course, year_level)
    VALUES (?, ?, ?, ?, ?)
    `;
        studentsServices.postStudents(student, (err, result) => {
            if(err) {
                console.error (err);
                return res.status(500).json({
                    message: "Failed to register"
                });
            }

            res.json({
                message: "Successfully registered",
                id: result.insertId
            })
        }
    )
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateStudents = (req, res) => {
    const id = req.params.id;
    const student = req.body;

       studentsServices.updateStudents(id, student, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "Failed to update student"
                });
            }

            res.json({
                message: "Successfully updated",
                id: id
            })
        }
    )
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteStudents = (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM students WHERE id = ?`;

        studentsServices.deleteStudents(id, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "Failed to delete"
                })
            }

            res.json({
                message: "Successfully deleted",
                id: id
            })
     }
    );
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    module.exports = {
        getStudents,
        postStudents,
        updateStudents,
        deleteStudents
    }
const studentsServices = require ("../services/studentsService");


const getStudents = (req, res) =>{


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

const enrollmentServices = require ("../services/enrollmentService");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getEnrollments = (req, res) => {
    enrollmentServices.getEnrollments((err, result) =>{


    if (err) {
        console.error(err);
        return res.status(500).json({
            message: "Failed to get enrollment"
        })
    }

    res.json (result)
 })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postEnrollments = (req, res) => {

    const enrollmentStudent = req.body;

    enrollmentServices.postEnrollments(enrollmentStudent, (err, result) =>{


    if(err){
        console.error(err);
        return res.status(500).json({
            message: "Failed to register"
        })
    }

    res.json({
        message: "Successfully registered",
        id: result.insertId
    })

     })
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateEnrollments = (req, res) => {

    const id = req.params.id; 
    const enrollment = req.body;

    enrollmentServices.updateEnrollments(id, enrollment, (err, result) => {

        if(err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to update"
            })
        }

        res.json({
            message: "Successfully updated",
            id: id
        })
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteEnrollments = (req, res) => {

    const id = req.params.id;


    enrollmentServices.deleteEnrollments(id, (err, result) =>{

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
    })
}


module.exports = {
    getEnrollments,
    postEnrollments,
    updateEnrollments,
    deleteEnrollments
}
const departmentService = require("../services/departmentService");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getDepartment = (req, res) =>{

    departmentService.getDepartment((err, result) => {
        if(err){
            console.error(err);
            return res.status(500).json({
                message: "Failed to get"
            })
        }

        res.json(result)
    })
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postDepartment = (req, res) => {

    const department = req.body;

    departmentService.postDepartment(department, (err, result) =>{
        if(err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to registered to the department"
            })
        }

        res.json({
            message: "Successfully registered to the department",
            id: result.insertId
        })
    })
}

module.exports = {
    getDepartment,
    postDepartment
}
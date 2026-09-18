
const courseOfferingServices = require("../services/courseOfferingService");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getCourseOffering = (req, res) =>{

    courseOfferingServices.getCourseOffering((err, result) =>{
        
        if(err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to get course offering"
            })
        }

       res.json(result);
    })
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postCourseOffering = (req, res) =>{

    const courseOffering = req.body;

    courseOfferingServices.postCourseOffering(courseOffering, (err, result) =>{
        if(err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to register"
            })
        }

        res.json({
            message: "Successfully registered",
            id: result.inserId
        })
    })  

}



module.exports = {
    getCourseOffering,
    postCourseOffering
}
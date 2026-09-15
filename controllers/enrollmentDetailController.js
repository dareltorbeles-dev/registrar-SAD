
const { post } = require("../routes/enrollmentDetail");
const enrollmentDetailService = require("../services/enrollmentDetailService");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const getEnrollmentDetail = (req, res) => {
    enrollmentDetailService.getEnrollmentDetail((err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to get enrollment detail"
            })
        }

        res.json(result)
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postEnrollmentDetail = (req, res) => {

    const enrollmentDetail = req.body;

    enrollmentDetailService.postEnrollmentDetail(enrollmentDetail, (err, result) => {

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

module.exports = {
    getEnrollmentDetail,
    postEnrollmentDetail
}
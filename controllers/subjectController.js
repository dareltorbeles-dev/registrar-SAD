const subjectService = require("../services/subjectService");


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const getSubject = (req, res) => {

    subjectService.getSubject((err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json ({
                message: "Failed to get subject"
            })
        }

        res.json(result)
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postSubject = (req, res) => {
    const subject = req.body;

    subjectService.postSubject( subject, (err, result) =>{
        
        if(err) {
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
    getSubject,
    postSubject
}
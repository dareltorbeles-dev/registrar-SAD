const programService = require ("../services/programService");
const programValidators = require("../validators/subjectValidator");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//GET PROGRAM ////

const getProgram = (req, res) => {


    programService.getProgram((err, result)=> {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to get subject"
            });
        }

            res.json(result)

    })
}

//POST PROGRAM///////////////////////////////////////////////////////////////

const postProgram = (req, res) => {
    const program = req.body;

    programService.postProgram( program, (err, result) =>{
        if (err) {
            console.error(err);
            return res.status (500).json({
                message: "Failed to register program"
            })
        }

        res.json({
            message: "Successfully registered",
            id: result.insertId
        })
    })
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



module.exports = {
    getProgram,
    postProgram
}
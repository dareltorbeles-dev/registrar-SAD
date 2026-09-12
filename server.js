const express = require("express");
const app = express();
const db = require("./db");

const PORT = 3000;

app.use(express.json());

//CRUD//////////

//FIRST ROUTE
app.get ("/api/registrar/", (req, res) => {
    
    const sql = "SELECT * FROM students";

    db.query(sql, (err, results) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to get students"
            });
        }

        res.json(results)
    });

});


//2ND ROUTE //INSERT
app.post ("/api/registrar/", (req, res) =>{

    const student = req.body;

    const sql =  `INSERT INTO students (student_number, first_name, last_name, course, year_level)
    VALUES (?, ?, ?, ?, ?)`;

    db.query (
        sql, [
            student.student_number,
            student.first_name,
            student.last_name,
            student.course,
            student.level_year
        ],

        (err, result ) => {
            if(err) {
                console.error(err);
                return res.status(500).json ({
                    message: "Failed to register"
                });
            }

            res.json({
                message: "successfully registered",
                id: result.insertId
            });
        }
    )
})

//3RD ROUTE //UPDATE
app.put("/api/registrar/:id", (req, res) => {

    const id = req.params.id;
    const student = req.body

    const sql = `UPDATE students 
        SET  student_number = ?,
        first_name = ?,
        last_name = ?,
        course = ?,
        year_level = ?
        WHERE id = ?

    `;
        
        db.query (
          sql,  [
                student.student_number,
                student.first_name,
                student.last_name,
                student.course,
                student.year_level,  
                id             
            ],


            (err, result) => {
                if (err) {
                    console.error(err);
                        return res.status(500).json ({
                            message: "Failed to update student"        
                        });                 
                }

                res.json ({
                    message: "Successfully updated",
                    id: id
                })
            }
        );
})

//4TH ROUTE
app.delete("/api/registrar/:id", (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM students WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Failed to delete"
            })
        }

        res.json ({
            message: "Student successfully deleted"
        })

    })
})

app.listen(PORT, () => {
    console.log(`The server is running now on PORT ${PORT}`)
});


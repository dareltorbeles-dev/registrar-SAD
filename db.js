const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "D@relpogi17",
    database: "registrar_db"
});

db.connect((err)=>{
    if (err) {
        console.error("Database connection failed", err);
        return
    }

    console.log("Database successfully connected")
});

module.exports = db;
const express = require("express");
const app = express();
const db = require("./db");

const studentRoutes = require ("./routes/students");


const PORT = 3000;

app.use(express.json());

app.use("/api/registrar", studentRoutes)

app.listen(PORT, () => {
    console.log(`The server is running now on PORT ${PORT}`)
});


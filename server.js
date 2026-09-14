const express = require("express");
const app = express();

const studentRoutes = require ("./routes/students");
const enrollmentRoutes = require ("./routes/enrollment");

const PORT = 3000;



app.use(express.json());

app.use("/api/registrar", studentRoutes)
app.use("/api/enrollment", enrollmentRoutes)

app.listen(PORT, () => {
    console.log(`The server is running now on PORT ${PORT}`)
});


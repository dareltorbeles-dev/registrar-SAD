const express = require("express");
const app = express();

const studentRoutes = require ("./routes/students");
const enrollmentRoutes = require ("./routes/enrollment");
const enrollmentDetailRoutes = require ("./routes/enrollmentDetail");
const courseOfferingRoutes = require ("./routes/courseOffering");
const subjectRoutes = require("./routes/subject");
const programRoutes = require ("./routes/program");
const departmentRoutes = require ("./routes/department");

const PORT = 3000;


app.use(express.json());

app.use("/api/registrar", studentRoutes);
app.use("/api/enrollment", enrollmentRoutes);
app.use("/api/enrollmentDetail", enrollmentDetailRoutes);
app.use("/api/courseOffering", courseOfferingRoutes);
app.use("/api/subject", subjectRoutes);
app.use("/api/program", programRoutes);
app.use("/api/department", departmentRoutes)

app.listen(PORT, () => {
    console.log(`The server is running now on PORT ${PORT}`)
});


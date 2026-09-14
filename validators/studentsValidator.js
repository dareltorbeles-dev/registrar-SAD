const validateStudents = (student) => {

    if (
        !student.student_number ||
        !student.first_name ||
        !student.last_name ||
        !student.course ||
        !student.year_level

    ) {
        return false;
    }

    return true
};

module.exports = validateStudents
const Student = require("../models/models");

exports.createNewStudent = (req, res) => {
    Student.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, newStudent) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            return res.status(200).json({ message: "New student has been created succesfully...", newStudent});
        }
    });
};

// TO GET ALL STUDENTS...
exports.fetchStudents = (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            return res.status(200).json({ message: students });
        }
    });
};

//TO GET JUST A SINGLE STUDENT...
exports.fetchStudent = (req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!student) {
            return res.status(404).json({ message: "No student with that detail here, please try again.." });
        } else {
            return res.status(200).json({ student });
        }
    });
};

// TO UPDATE A STUDENT'S DETAILS
exports.updateStudent = (req, res) => {
    Student.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, (err, student) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!student) {
            return res.status(404).json(
              { message: "Student with this detail is not found in our database, check your info and try again.... "});
        } else {
            student.save((err, updatedStudent) => {
                if (err) {
                    return res.status(500).json({ message: err });
                } else {
                    return res.status(200).json(
                      { 
                      message: "Student's details updated successfully...." 
                    });
                }
            });
        }
    });
};

exports.deleteStudent = (req, res) => {
    Student.findByIdAndDelete(req.params.id, (err, student) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!student) {
            return res.status(404).json({ message: "There is no student with these details in our database..." });
        } else {
            return res.status(200).json({ message: "Student's record has suucessfully been deleted from our database..." });
        }
    });
};
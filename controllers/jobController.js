const Job = require("../models"); // Destructure the object to get the Job model.

const job_signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const newJob = new Job({ firstName, lastName, email, password, role });
    await newJob.save();

    res
      .status(201)
      .json({ code: 201, message: "Job Recruiter registered successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { job_signup };

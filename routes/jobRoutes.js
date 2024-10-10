const express = require("express");
const router = express.Router();

// Controllers
const { jobController } = require("../controllers");

router.post("/job_signup", jobController.job_signup);

module.exports = router;

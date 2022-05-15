const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.post('/', (req, res) => {
   console.log(req.body);
   const course = Course(req.body);
   course.save();
   res.send(req.body);
})

module.exports = router;
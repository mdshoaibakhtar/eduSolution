const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Course = require('../models/Course');
const { body, validationResult } = require('express-validator');

//ROUTER 1 :adding the cousre using post: "/api/course/insertdata/" : login req
router.post('/insertdata', fetchuser, [
   body('title', "Please Enter title").isLength({ min: 5 }),
   body('tag', "Please Enter valid name")
], async (req, res) => {

   const { title, tag } = req.body;
   const errors = validationResult(req);
   if (!(errors.isEmpty())) {
      return res.status(400).json({ errors: errors.array() });
   }

   try {
      const course = new Course({
         title, tag, user: req.user.id
      })
      const savedCourse = await course.save();
      res.json(savedCourse);
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Something went wrong")
   }


})


//ROUTER 2 :  get all the course using get : login req
router.get('/fetchallcourse', fetchuser, async (req, res) => {
   const course = await Course.find({ user: req.user.id });
   res.json(course);
})

//ROUTER 3 : delete the course : login req
router.delete('/deletecourse/:id', fetchuser, async (req, res) => {
   try {
      let course = await Course.findById(req.params.id);
      if (!course) {
         return res.status(401).send("Not allowed");
      }
      course = await Course.findOneAndDelete(req.params.id);
      res.json({ "Success": "Deleted" })
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Something went wrong")
   }
})

module.exports = router;
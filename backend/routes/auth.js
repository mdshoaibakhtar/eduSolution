const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_DECRET = "mdshoaibakhtar 1234$";

//Create a user, using : POST "/api/auth/createuser". Doesn't require Auth
router.post('/createuser', [
   body('name', "Please Enter valid name").isLength({ min: 3 }),
   body('email', "Please Enter valid name").isEmail(),
   body('password').isLength({ min: 5 }),
], async (req, res) => {

   // const user = User(req.body);
   // user.save();
   // console.log(req.body);
   // res.send(req.body);

   //checking the error, if error is avail.. then we don't need to move forward
   const errors = validationResult(req);
   if (!(errors.isEmpty())) {
      return res.status(400).json({ errors: errors.array() });
   }


   try {
      //checking the typed email, it is unique or not
      let user = await User.findOne({ email: req.body.email });
      if (user) {
         return res.status(400).json({ error: "Try again with unique Email" })
      }

      //bcrypting 
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //creating the user
      user = await User.create({
         name: req.body.name,
         email: req.body.email,
         password: secPass,
      })

      //using .then
      // .then(user => res.json(user)).catch(err => res.status(400).json({ error: 'sahi dalo yrr' }))

      //need  understanding
      const data = {
         user: {
            id: user.id
         }
      }
      const authtoken = jwt.sign(data, JWT_DECRET);
      // res.json({ authtoken });
   } catch (error) {
      console.error(error.message);
      res.status(500).send("kuchh To Baat hai")
   }
})

//Authenticate a user using :/api/auth/login
router.post('/login', [
   body('email', "Please Enter valid name").isEmail(),
   body('password', "Please Enter valid password").exists()
], async (req, res) => {
   const errors = validationResult(req);
   if (!(errors.isEmpty())) {
      return res.status(400).json({ errors: errors.array() });
   }

   //using destructure,  to getting the email and password
   const { email, password } = req.body;

   try {
      let user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ error: "Email Incorrect" });
      }

      //to check the database after checking the email, we have to check db for password
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
         return res.status(400).json({ error: "Inormation Incorrect" });
      }
      const data = {
         user: {
            id: user.id
         }
      }

      const authtoken = jwt.sign(data, JWT_DECRET);
      res.json({ authtoken });
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Something went wrong")
   }
})

module.exports = router;
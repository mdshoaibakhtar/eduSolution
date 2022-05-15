const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = 5000;
connectToMongo();
app.use(express.json())//middleware

//Direct
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get('/about',(req,res)=>{
    res.send('Hello World from about page');
})
app.get('/contact',(req,res)=>{
    res.send('Hello World from contact page');
})

//We will use Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/course',require('./routes/course'));

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})
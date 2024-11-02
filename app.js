require('dotenv').config(); 

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoRoutes = require('./routes/todoroutes')




const app = express()


app.use(cors())
app.use(express.json())
app.use('/api/todos', todoRoutes);

const mongoURI = process.env.MONGO_URI;

app.get('/', (req, res) => {
    res.send('Welcome to the Todo API server!');
});


mongoose.connect(mongoURI, {  })
    .then(() => {
        console.log('MongoDB connected successfully!');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
   console.log(`SERVER IS LISTING ON PORT ${PORT}`)
})

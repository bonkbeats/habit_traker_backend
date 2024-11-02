const express = require('express')
const router = express.Router();
const Todo = require('../models/todo')



router.get('/:date', async(req,res)=>{
   const {date} = req.params;
   try {
      const todos = await Todo.find({ date: new Date(date)});
      res.json(todos);
      
   } catch (error) {
      
   }
})


// Add a new todo

router.post('/', async (req, res) => {
   const { title, date,color } = req.body;
   try {
     const newTodo = new Todo({
       title,
       date: new Date(date),
       color,
       
     });
     await newTodo.save();
     res.status(201).json(newTodo);
   } catch (error) {
     res.status(500).json({ error: 'Failed to add todo' });
   }
 });
 

 // Update a todo (mark as done/undone)

 router.put('/:id', async (req, res) => {
   const { id } = req.params;
   const { isDone } = req.body;
   try {
     const todo = await Todo.findByIdAndUpdate(id, { isDone }, { new: true });
     res.json(todo);
   } catch (error) {
     res.status(500).json({ error: 'Failed to update todo' });
   }
 });
 


 // Delete a todo

 router.delete('/:id', async (req, res) => {
   const { id } = req.params;
   try {
     await Todo.findByIdAndDelete(id);
     res.status(204).json({ message: 'Todo deleted' });
   } catch (error) {
     res.status(500).json({ error: 'Failed to delete todo' });
   }
 },

 router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();  // Fetch all todos
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos', error });
  }

})

);
 module.exports = router;




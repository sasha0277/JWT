const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc Get Goals
// @route GET/api/goals
// @access Private

const getGoals = asyncHandler(async (req,res)=>{
  const  goals  = await Goal.find({user: req.user.id});


  res.status(200).json(goals);
})



// @desc Set Goal
// @route POST/api/goals
// @access Private

const setGoal = asyncHandler( async (req,res)=>{
    if(!req.body.text){
      res.status(400);
       throw new Error("please add a name");

    }

    const goal = await Goal.create({
      text: req.body.text,
      user: req.user.id,
    })


  res.status(200).json(goal);
})



// @desc Update Goal
// @route PUT/api/goals/:id
// @access Private

const updateGoal = asyncHandler( async (req,res)=>{

  const goal = await Goal.findById(req.params.id);

  if(!goal){
    res.status(400);
  throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  if(!user){
    res.status(401);
    throw new Error('user not found')
  }

  // same logged user matches for update or not
  if(goal.user.toString()!== user.id){
    res.status(401);
    throw new Error('User not authorizatied');
  }

  const updatedgoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
    new:true,
  })



  res.status(200).json(updatedgoal);
})




// @desc DElete Goal
// @route GET/api/goals/:id
// @access Private

const deleteGoal =  asyncHandler (async (req,res)=>{
const goal = await Goal.findById(req.params.id);

if(!goal){
  res.status(400);
  throw new Error("Goal not found");
}


const user = await User.findById(req.user.id);

if(!user){
  res.status(401);
  throw new Error('user not found')
}

// same logged user matches for delete or not
if(goal.user.toString()!== user.id){
  res.status(401);
  throw new Error('User not authorizatied');
}


//  await Goal.findByIdAndDelete(req.params.id);
 await goal.remove();

  res.status(200).json({id:req.params.id});
})




module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
};
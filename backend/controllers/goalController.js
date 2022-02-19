const asyncHandler = require('express-async-handler');


// @desc Get Goals
// @route GET/api/goals
// @access Private

const getGoals = asyncHandler(async (req,res)=>{


  res.status(200).json({message:"get Goals"});
})



// @desc Set Goal
// @route POST/api/goals
// @access Private

const setGoal = asyncHandler( async (req,res)=>{
    if(!req.body.name){
      res.status(400);
       throw new Error("please add a name");

    }


  res.status(200).json({message:"set Goal"});
})



// @desc Update Goal
// @route PUT/api/goals/:id
// @access Private

const updateGoal = asyncHandler( async (req,res)=>{
  res.status(200).json({message: `update goals ${req.params.id}`});
})




// @desc DElete Goal
// @route GET/api/goals/:id
// @access Private

const deleteGoal =  asyncHandler (async (req,res)=>{
  res.status(200).json({message: `delete goals ${req.params.id}`});
})




module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
};
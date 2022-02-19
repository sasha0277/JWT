const express = require('express');
const router = express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController'); 


// router.get('/',getGoals);

// router.post('/', setGoal);

// can also write in this way

router.route('/').get(getGoals).post(setGoal);

router.route('/:id').put(updateGoal).delete(deleteGoal);

// router.put('/:id',updateGoal)

// router.delete('/:id',deleteGoal)



module.exports = router;
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware')


const app = express();

// line nr.9,10 are middleware 
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler);

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
});

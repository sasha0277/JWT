import React, { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';


const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const { email, password} = formData;

  const onChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }))
    
  }
  
  const onSubmit = (e)=>{
    e.preventDefault();
    
  }



  return (
    <>
      <section className="heading">
       <h4>
         <FaSignInAlt/> Login
       </h4>
       <p>Please Login to access your account.</p>
      </section>

    <section className="form">
      <form onSubmit={onSubmit}>
       
        <div className="form-group">
          <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email"  value={email} onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password"  value={password} onChange={onChange}/>
        </div>
        
       <div className="form-group">
         <button className="btn btn-block" type="submit">Submit</button>
       </div>
      </form>
    </section>

    </>
  )
}

export default Login
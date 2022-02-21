import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';


const Register = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const {name, email, password, confirmPassword} = formData;

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
         <FaUser/> Register
       </h4>
       <p>Please Create an Account</p>
      </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name"  value={name} onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email"  value={email} onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password"  value={password} onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="Confirm password"  value={confirmPassword} onChange={onChange}/>
        </div>
       <div className="form-group">
         <button className="btn btn-block" type="submit">Submit</button>
       </div>
      </form>
    </section>

    </>
  )
}

export default Register
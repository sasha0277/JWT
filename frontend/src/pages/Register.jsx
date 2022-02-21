import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { register, reset } from '../features/auth/authSlice';



const Register = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const {name, email, password, confirmPassword} = formData;


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const{user,isLoading,isError,isSuccess,message} = useSelector((state)=>state.auth);

  useEffect(() => {
    if(isError) {
      toast.error(message);
    }

    if(isSuccess || user) {
        navigate('/');
    }

    dispatch(reset());
    
  }, [user,isError,isSuccess,message,navigate,dispatch]);

  const onChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }))
    
  }
  
  const onSubmit = (e)=>{
    e.preventDefault();
    
    if(password!==confirmPassword){
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      }
      dispatch(register(userData));
    }

    
  }

  // if(isLoading){
  //   return <Spinner/>
  // }

  

  return (
    <>
    {
      isLoading ? <Spinner/> : (
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
 
    </>
  )
}

export default Register
import React, { useEffect, useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { login, reset } from '../features/auth/authSlice';



const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const { email, password} = formData;

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

    const userData = {
      email,
      password,
    }
    dispatch(login(userData));

  }

   if(isLoading){
    return <Spinner/>
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
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Login.css'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const [
        signInWithEmailAndPassword,
        user,
        
        error
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleEmailBlur=event=>{
        setEmail(event.target.value);
       
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value);
       
    }
    
    const handleUserSignIn=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
       
    }
    if(user){
      navigate(from,{replace:true})
    }
  
    
    return (
        <div className='form-container'>
            <div >
            <h2 className='form-title'>please login!</h2>
             <form onSubmit={handleUserSignIn}>
             <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="1" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="2" required />
            </div>
            <input className='form-submit' type="submit" value="Login" />
             </form>
             <p style={{color:'red'}}>{error?.message}</p>
             <div className="form-text">
             <p>
                 New to ema-john?<Link className='form-link' to='/signup'>Plesae click here</Link>
             </p>
             </div>
             <div className='horijontal-line'>
                 <div><hr /></div>
                 
                 <p>or</p>
                 <div><hr /></div>
                 
             </div>
            
            
            </div>
        </div>
    );
};

export default Login;
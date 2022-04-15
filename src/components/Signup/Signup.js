import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Signup = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const navigate = useNavigate()
    
    
    const [ createUserWithEmailAndPassword , user] = useCreateUserWithEmailAndPassword(auth)
    
    const handleEmailBlur=event=>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value)
    }
    const handleConfirmPassword=event=>{
        setConfirmPassword(event.target.value)
    }
    const handleCreateUser=event=>{
            event.preventDefault();
            if(password!==confirmPassword){
                setError('Your password didnt match!')
                return
            }
            if(password.length <6){
                setError('Password must be 6 character long or more')
                return
            }
            createUserWithEmailAndPassword(email,password)
    }
    if(user){
        navigate('/home')
    }
    return (
        <div className='form-container'>
        <div >
        <h2 className='form-title'>please signup</h2>
         <form onSubmit={handleCreateUser}>
         <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="" id="" required/>
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={ handlePasswordBlur} type="password" name="" id="" required/>
        </div>
        <div className="input-group">
            <label htmlFor="password">Confirm-Password</label>
            <input onBlur={handleConfirmPassword} type="password" name="" id="" required />
        </div>
        <p style={{color:'red'}}>{error}</p>
        <input className='form-submit' type="submit" value="Sign up" />
         </form>
         <div className="form-text">
         <p>
             Alredy Have an account?<Link className='form-link' to='/login'>Plesae click here</Link>
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

export default Signup;
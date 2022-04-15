import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
//import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName]= useState('')
    const [phoneNumber,setPhoneNumber]=useState('');
    const [adress,setAdress]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
   // const navigate = useNavigate()
    
    
   // const [ createUserWithEmailAndPassword , user] = useCreateUserWithEmailAndPassword(auth)

   const handleNameBlur=event=>{
       setName(event.target.value)
   }
    
    const handleEmailBlur=event=>{
        setPhoneNumber(event.target.value)
    }
    const handlePhoneNumberBlur=event=>{
        setAdress(event.target.value)
    }
    const handleAdressBlur=event=>{
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser=event=>{
        event.preventDefault();
     
}
    return (
        <div className='form-container'>
        <div >
        <h2 className='form-title'>Shipping information</h2>
         <form onSubmit={handleCreateUser}>
         <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleEmailBlur} type="text" name="name" id="" required/>
        </div>
        <div className="input-group">
            <label htmlFor="password">Phone Number</label>
            <input onBlur={ handlePhoneNumberBlur} type="text" name="phone-number" id="" required/>
        </div>
        <div className="input-group">
            <label htmlFor="adress">Adress</label>
            <input onBlur={handleAdressBlur} type="text" name="adress" id="" required />
        </div>
        <p style={{color:'red'}}>{error}</p>
        <input className='form-submit' type="submit" value="Add Shipping" />
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

export default Shipment;
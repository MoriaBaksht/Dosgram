
import React, { useState } from 'react';
import './signUp.css';
import logo2 from '../images/logo2.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/reducers/userReducer';

function SignupComponnent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signup, setSignup] = useState({ mail: '', password: '', firstName: '', lastName: '', phoneNumber: '' });

  const updateValues = (event) => {
    setSignup({
      ...signup,
      [event.target.name]: event.target.value,
    });
  };
const handleSubmit = (event) => {
    event.preventDefault();
    
    // Debug: Log the signup data
  
    // Dispatch the 'SIGN_UP' action with the user data
    dispatch({
      type: 'SIGN_UP',
      payload: signup,
    });
  
    // Navigate to '/home'
    navigate('/home');
  };

  return (
    <>
      <form className="form1" >
        <div className="loginPage1">
          <img src={logo2} className="imageLogo1" alt="Logo" />

          <label htmlFor="first-name"></label>
          <input type="text" placeholder="enter your name" className="input1" name="firstName" onChange={updateValues} />
          <label htmlFor="last-name"></label>
          <input type="text" placeholder="enter last name" className="input1" name="lastName" onChange={updateValues} />
          <label htmlFor="phone"></label>
          <input type="text" placeholder="enter your phone" className="input1" name="phoneNumber" onChange={updateValues} />
          <label htmlFor="email-input"></label>
          <input type="text" placeholder="enter email" className="input1" name="mail" onChange={updateValues} />
          <label htmlFor="password-input"></label>
          <input type="text" placeholder="enter password" className="input1" name="password" onChange={updateValues} />

          <button  onClick={(e)=>handleSubmit(e)} className="loginButton1">
            <b>Sign up</b>
          </button>
        </div>
      </form>
      <div className="footer2">
        <Footer />
      </div>
    </>
  );
}

export default SignupComponnent;



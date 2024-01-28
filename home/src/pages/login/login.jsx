import React, { useState } from 'react';
import './login.css';
import logo2 from '../images/logo2.png'
import { SlScreenSmartphone } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Footer from '../footer';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, setLogin] = useState({ mail: '', password: '' });
    const user = useSelector(store => store.user.currentUser)
    const [isValidUser, setIsValidUser] = useState(false)
    const updateValues = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        dispatch({ type: "LOGIN_USER", payload: login })
        
        if (user)
            navigate('/home')
        else
            setIsValidUser(!isValidUser)
    }
    return (
        <>

            <form className="form" >
                {isValidUser && <h3>מייל או ססמא שגויים</h3>}
                <div className='loginPage'>
                    <img src={logo2} className='imageLogo'></img>

                    <label htmlFor='email-input'></label>
                    <input type='text' placeholder="enter email" className='input '
                        name='mail' onChange={updateValues} />

                    <label htmlFor='password-input'></label>
                    <input type='text' placeholder="enter password" className='input'
                        name='password' onChange={updateValues} />
                    <button type='submit' className='loginButton' onClick={handleSubmit}><b>Login</b></button>
                    <div className="maybe">
                        <h3>__________ Maybe ___________</h3>
                    </div>
                    <div className='optionPhone'>
                        <a ><SlScreenSmartphone /><b>Log in with phone?</b></a><br></br>
                    </div>
                    <div className='optionForgotPassword'>
                        <a onClick={() => navigate('/password')}>Forgot your password?</a>
                    </div>

                </div>

                <br />
                <div className='signUpPage' >
                    <p onClick={() => { navigate('SignUp') }}><b>Don't have an account? Sign up</b></p>


                </div>

            </form>
            <div className='footer1'>
                <Footer />
            </div>
        </>
    )


}

export default Login;

import React, { useState,useEffect } from 'react';
import './login.css';
//import logo2 from 'M:/שנה ב FullStack/REACT/bbbb/aaa/src/pages/images/logo2.png'
import logo2 from '../images/logo2.png'
import { SlScreenSmartphone } from "react-icons/sl";
import Signup from "./signup";
import {  useNavigate } from "react-router-dom";
import Footer from '../footer';
import { useDispatch,useSelector } from 'react-redux';
import { addUser } from '../../redux/reducers/userReducer';
function Login() {
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const [login, setLogin] = useState({ email: '', password: '' });
    const user = useSelector(store => store.user.user)
    
 const [flagIsTryLogin,setFlagIsTryLogin] = useState(false)
    const updateValues = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        alert(login.email)
        alert(login.password)
// dispatch({type:"GET_User",payload:login})

    }
  
    const tryLogin = () => {
        // dispatch({type:"LOGIN_USER",payload:login})
        // setFlagIsTryLogin(true)
        navigate('/home')
    }

    useEffect(() => {
       if(user.id) {
        navigate('/home')
       } 
        },[user]);

    return (
        <>
           
                <form className="form" onSubmit={handleSubmit}>
               
                    <div className='loginPage'>
                        <img src={logo2} className='imageLogo'></img>
                        
                        <label htmlFor='email-input'></label>
                        <input type='text' placeholder="enter email" className='input'
                            onChange={updateValues} />
                    
                        <label htmlFor='password-input'></label>
                        <input type='text' placeholder="enter password" className='input'
                            onChange={updateValues} />
                        
                       
                        <button type='submit' className='loginButton' onClick={()=>{tryLogin()}}><b>Login</b></button>
                        
                       
                        <div className="maybe">
                            <h3>__________ Maybe ___________</h3>
                            </div>
                            <div className='optionPhone'>
                            <a ><SlScreenSmartphone /><b>Log in with phone?</b></a><br></br>
                            </div>
                        <div className='optionForgotPassword'>
                            <a  onClick={()=>navigate('/password')}>Forgot your password?</a>
                            </div>

                    </div>

                    <br />
                    <div className='signUpPage' >
                        <p  onClick={()=>{navigate('SignUp')}}><b>Don't have an account? Sign up</b></p>
                        
                   
                    </div>
                   
                </form>
            <div className='footer1'>
                <Footer/>
            </div>
        </>
    )


}

export default Login;

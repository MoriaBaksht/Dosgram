// import React, { useState } from 'react';
// import './signUp.css'
// import logo2 from '../images/logo2.png';
// import {  useNavigate } from "react-router-dom";
// import Footer from '../footer';
// import { addUser } from '../../redux/reducers/userReducer';
// import { useDispatch } from 'react-redux';

// function Signup() {
// //     
//     const dispatch = useDispatch();
  
//     const navigate=useNavigate()
//     const [signup, setSignup] = useState({ email: '', password: '',firstName:'',lastName:'',phoneNumber:''});
//     const updateValues = (event) => {
//         setSignup({
//             ...signup,
//             [event.target.name]: event.target.value
//         })
//     }
//     function handleSubmit(event) {
//         event.preventDefault();
//         // alert(signup.email)
//         // alert(signup.password)
//         // alert(signup.lastName)
//         // alert(signup.firstName)
//         // alert(signup.phone)
        
//         dispatch({
//             type:'SIGN_UP',
//             payload:{
                
//                 signup,
//             }
//         })
//         navigate('/home');

//     }

//     // const [firstName, setFirstName]=useState('');
//     // const [lastName, setLastName]=useState('');
//     // const [email, setEmail]=useState('');
//     // const [password, setPassword]=useState('');
//     // const [phone,setPhone]=useState('');
  
//     // const addUsers = (event) => {
//     //   event.preventDefault(); // Prevent the default form submission
  
//       // Dispatch an action to add a new user to the Redux store
//     //   dispatch({
//     //       type: 'ADD_USER',
//     //       payload: {
//     //           id:0,
//     //           firstName: firstName,
//     //           lastName: lastName,
//     //           email: email,
//     //           password: password,
//     //           phone:phone,
//     //           // image: Pic,
              
              
  
//     //       }
//     //   });
// //       navigate('/home');
// //   }
// // const addUsers = async (event) => {
// //     event.preventDefault(); // Prevent the default form submission
// //     const newUser = {
// //         phoneNumber:phoneNumber,
// //         firstName: firstName,
// //         lastName: lastName,
// //         email: email,
// //         password: password,
        
// //         // "image": "D://Users//User//Desktop//web//src//pic",
// //         // "sharings": [],
// //         // "comments": [],
// //     }
// //     try {
// //         const response = await axios.post('http://localhost:8585/api/user/createUser', newUser);
// //         dispatch(addUser(response.data));
// //     } catch (error) {
// //         console.log('Error adding user:', error);
// //     }
// // }

//     // const addUser=()=>{
//     //     dispatch({
//     //         type:'SIGN_UP',
//     //         payload:{
//     //             // id:0,
//     //             // firstName: firstName,
//     //             // lastName: lastName,
//     //             // email: email,
//     //             // password: password,
//     //             // phone:phone,
//     //             signup,
//     //         }
//     //     })
//     //     navigate('/home');
//     // }

//     return (
//         <>
//         <form className="form1" onSubmit={handleSubmit}>
//             <div className='loginPage1'>
//                 <img src={logo2} className='imageLogo1'></img>
              
//                 <label htmlFor='first-name'></label>
//                 <input type='text' placeholder="enter your name" className='input1'
//                     onChange={updateValues} />
//                      <label htmlFor='last-name'></label>
//                 <input type='text' placeholder="enter last name" className='input1'
//                     onChange={updateValues} />
//                     <label htmlFor='phone'></label>
//                 <input type='text' placeholder="enter your phone" className='input1'
//                     onChange={updateValues} />
//                 <label htmlFor='email-input'></label>
//                 <input type='text' placeholder="enter email" className='input1'
//                     onChange={updateValues} />
                
//                 <label htmlFor='password-input'></label>
//                 <input type='text' placeholder="enter password" className='input1'
//                     onChange={updateValues} />
                   
//                     {/* <label htmlFor='last-name'></label>
//                 <input type='text' placeholder="validate password" className='input1'
//                     onChange={updateValues} /> */}
              
               
//                 <button  type='submit' className='loginButton1'  ><b>Sign up</b></button>
                
//                 </div>
//                 </form>
// <div className='footer2'>
//     <Footer/>
// </div>
//                 </>
    
//     )
// }
// export default Signup;

//othererr
// import React, { useState } from 'react';
// import './signUp.css';
// import logo2 from '../images/logo2.png';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../footer';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../../redux/reducers/userReducer';

// function Signup() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [signup, setSignup] = useState({ email: '', password: '', firstName: '', lastName: '', phoneNumber: '' });

//   const updateValues = (event) => {
//     setSignup({
//       ...signup,
//       [event.target.name]: event.target.value,
//     });
//   };
// //   const addNewUser = async (event) => {
// //     event.preventDefault(); // Prevent the default form submission
// //     const newUser = {
// //         "firstName": firstName,
// //         "lastName": lastName,
// //         "email": email,
// //         "password": password,
// //         "image": "D://Users//User//Desktop//web//src//pic",
// //         "sharings": [],
// //         "comments": [],
// //     }
// //     try {
// //         const response = await axios.post('http://localhost:8585/api/user/createUser', newUser);
// //         dispatch(addUser(response.data));
// //     } catch (error) {
// //         console.log('Error adding user:', error);
// //     }
// // }


// //   
// const handleSubmit = (event) => {
//     event.preventDefault();
  
//     // Dispatch the SIGN_UP action with the user data
//     dispatch({
//       type: 'SIGN_UP',
//       payload: signup,
//     })
//     navigate('/home');
//     //   .then(() => {
//     //     // If dispatch is successful, navigate to '/home'
//     //     navigate('/home');
//     //   })
//     //   .catch((error) => {
//     //     // Log detailed error information
//     //     console.error('Error submitting form:', error);
  
//     //     // You can also display an error message to the user
//     //     // For example, using a state variable to show an error message in your component
//     //     // setError('Failed to sign up. Please check your data and try again.');
//     //   });
//   };
// // const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     // try {
// //       // Dispatch the SIGN_UP action with the user data
// //       const response = await dispatch({
// //         type: 'SIGN_UP',
// //         payload: signup,
// //       });

//       // Assuming your 'SIGN_UP' action returns the added user data
//     //   dispatch(addUser(response.data));

//       // If dispatch is successful, navigate to '/home'
//       navigate('/home');
//     // } catch (error) {
//     //   // Log detailed error information
//     //   console.error('Error submitting form:', error);

//       // Display an error message to the user
//       // For example, using a state variable to show an error message in your component
//       // setError('Failed to sign up. Please check your data and try again.');
//     // }
//   };

//   return (
//     <>
//       <form className="form1" onSubmit={handleSubmit}>
//         <div className="loginPage1">
//           <img src={logo2} className="imageLogo1" alt="Logo" />

//           <label htmlFor="first-name"></label>
//           <input type="text" placeholder="enter your name" className="input1" name="firstName" onChange={updateValues} />
//           <label htmlFor="last-name"></label>
//           <input type="text" placeholder="enter last name" className="input1" name="lastName" onChange={updateValues} />
//           <label htmlFor="phone"></label>
//           <input type="text" placeholder="enter your phone" className="input1" name="phoneNumber" onChange={updateValues} />
//           <label htmlFor="email-input"></label>
//           <input type="text" placeholder="enter email" className="input1" name="email" onChange={updateValues} />
//           <label htmlFor="password-input"></label>
//           <input type="text" placeholder="enter password" className="input1" name="password" onChange={updateValues} />

//           <button type="submit" className="loginButton1">
//             <b>Sign up</b>
//           </button>
//         </div>
//       </form>
//       <div className="footer2">
//         <Footer />
//       </div>
//     </>
//   );


// export default Signup;
// import React, { useState } from 'react';
// import './signUp.css';
// import logo2 from '../images/logo2.png';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../footer';
// import { addUser } from '../../redux/reducers/userReducer';
// import { useDispatch } from 'react-redux';

// function Signup() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [signup, setSignup] = useState({
//     email: '',
//     password: '',
//     passwordValidation: '',
//     name: '',
//     phone: '',
//   });

//   const updateValues = (event) => {
//     setSignup({
//       ...signup,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Your form submission logic here
//     alert(signup.email);
//     alert(signup.password);
//     alert(signup.passwordValidation);
//     alert(signup.name);
//     alert(signup.phone);

//     // Dispatch your action to add user to the Redux store or make an API call to add user to the database
//     dispatch({
//       type: 'SIGN_UP',
//       payload: {
//         signup,
//       },
//     });

//     // Navigate to the home page after successful submission
//     navigate('/home');
//   };

//   return (
//     <>
//       <form className="form1" onSubmit={handleSubmit}>
//         <div className="loginPage1">
//           <img src={logo2} className="imageLogo1" alt="Logo"></img>

//           <label htmlFor="name"></label>
//           <input type="text" placeholder="enter your name" className="input1" onChange={updateValues} />
//           <label htmlFor="phone"></label>
//           <input type="text" placeholder="enter your phone" className="input1" onChange={updateValues} />
//           <label htmlFor="email-input"></label>
//           <input type="text" placeholder="enter email" className="input1" onChange={updateValues} />

//           <label htmlFor="password-input"></label>
//           <input type="text" placeholder="enter password" className="input1" onChange={updateValues} />

//           <label htmlFor="passwordValidation"></label>
//           <input type="text" placeholder="validate password" className="input1" onChange={updateValues} />

//           <button type="submit" className="loginButton1">
//             <b>Sign up</b>
//           </button>
//         </div>
//       </form>
//       <div className="footer2">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Signup;
import React, { useState } from 'react';
import './signUp.css';
import logo2 from '../images/logo2.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/reducers/userReducer';

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signup, setSignup] = useState({ email: '', password: '', firstName: '', lastName: '', phoneNumber: '' });

  const updateValues = (event) => {
    setSignup({
      ...signup,
      [event.target.name]: event.target.value,
    });
  };
//   const handleSubmit = (event) => {
    
//     event.preventDefault(); // Prevent the default form submission

//     // Dispatch an action to add a new user to the Redux store
//     dispatch({
//         type: 'SIGN_UP',
//         payload: {
//             signup,

//         },
//     });
//     navigate('/home');
// }
const handleSubmit = (event) => {
    event.preventDefault();
    
    // Debug: Log the signup data
    console.log('Signup data:', signup);
  
    // Dispatch the 'SIGN_UP' action with the user data
    dispatch({
      type: 'SIGN_UP',
      payload: {signup},
    });
  
    // Navigate to '/home'
    navigate('/home');
  };
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Dispatch the SIGN_UP action with the user data
//     dispatch({
//       type: 'SIGN_UP',
//       payload: signup,
//     });

//     // Navigate to '/home' after dispatch is successful
//     navigate('/home');
//   };

  return (
    <>
      <form className="form1" onSubmit={handleSubmit}>
        <div className="loginPage1">
          <img src={logo2} className="imageLogo1" alt="Logo" />

          <label htmlFor="first-name"></label>
          <input type="text" placeholder="enter your name" className="input1" name="firstName" onChange={updateValues} />
          <label htmlFor="last-name"></label>
          <input type="text" placeholder="enter last name" className="input1" name="lastName" onChange={updateValues} />
          <label htmlFor="phone"></label>
          <input type="text" placeholder="enter your phone" className="input1" name="phoneNumber" onChange={updateValues} />
          <label htmlFor="email-input"></label>
          <input type="text" placeholder="enter email" className="input1" name="email" onChange={updateValues} />
          <label htmlFor="password-input"></label>
          <input type="text" placeholder="enter password" className="input1" name="password" onChange={updateValues} />

          <button type="submit" className="loginButton1">
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

export default Signup;



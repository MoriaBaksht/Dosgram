import React,  { useState } from 'react'
import './App.css'
import MainPage from './pages/homePage'
import {Route,Routes } from "react-router-dom";
import Posts from './pages/posts'
import CommentShow from './commentCard';
import Login from './pages/login/login'
import Signup from './pages/login/signup'
import Password from './pages/password'
// import CommentsTry from './pages/CommentsTry';
// import Camera from './pages/camera'
function App() {
 

  return (
    <>
    {/* <Camera/> */}
      <Routes>
      {/* <Route path='/' element={<CommentsTry/>}></Route> */}

      <Route path='/' element={<Login/>}></Route>
      <Route path='signUp' element={<Signup/>}></Route>
      <Route path='home' element={<MainPage/>}></Route>
      <Route path='posts' element={<Posts/>}></Route>

      {/* <Route path='landscapes' element={<Landscapes/>}></Route>
      <Route path='makeUp' element={<MakeUp/>}></Route>
      <Route path='recipe' element={<Posts/>}></Route>
      <Route path='shops' element={<Shops/>}></Route>
      <Route path='sport' element={<Sport/>}></Route>
      <Route path='trip' element={<Trip/>}></Route> */}
      <Route path='password' element={<Password/>}></Route>
     </Routes> 
     
    </>
  )
}

export default App

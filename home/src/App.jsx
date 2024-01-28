import React,  { useState } from 'react'
import './App.css'
import MainPage from './pages/homePage'
import {Route,Routes } from "react-router-dom";
import Posts from './pages/posts'
// import CommentShow from './pages/commentCard';
import CommentShow from './pages/commentCard';
import Login from './pages/login/login';
import SignupComponnent from './pages/login/signup';
import Password from './pages/password';
// import CommentsTry from './pages/CommentsTry';
import Camera from './pages/camera';
import PostButton from './pages/postsButton';
import FileUpload from './pages/FileUpload';
import AddPostButton from './pages/addPostButton';
function App() {
 

  return (
    <>
    {/* <Camera/> */}
      <Routes>
      {/* <Route path='/' element={<AddPostButton/>}></Route> */}

      <Route path='/' element={<Login/>}></Route>
      <Route path='signUp' element={<SignupComponnent/>}></Route>
      <Route path='home' element={<MainPage/>}></Route>
      <Route path='posts' element={<Posts/>}></Route>
      <Route path='postButton' element={<PostButton/>}></Route>
      <Route path='fileUpload' element={<FileUpload/>}></Route>
      <Route path='addPostButton/:categoryId' element={<AddPostButton/>}></Route>


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

import React, { useEffect, useState } from "react";
import './cssPages/homePage.css'
import logo1 from '../pages/images/logo1.png'
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//finding personal id 


function MainPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [color, setColor] = useState('rgb(241, 87, 146)')

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => prevColor === 'rgb(241, 87, 146)' ? '#f78850' : 'rgb(241, 87, 146)');
    }, 1000);


    return () => clearInterval(interval);
  }, [setColor]);

  useEffect(() => {
    dispatch({ type: "GET_POSTS", payload: "food" });
  }, []);


  return (
    <>
      {/* onClick={() => dispatch({ type: 'GET_USER_IMAGE',payload:idUser })} */}
      <button onClick={() => dispatch({ type: 'GET_USER_IMAGE', payload: idUser })}></button>
      {/* <div className="profile" >{filteredProfile.map((profile,index)=><span key={index}>{profile.profileImg}</span>)}</div> */}
      <div className="one" style={{
        border: `10px solid ${color}`, marginRight: '90%', paddingLeft: '50px', paddingRight: '50px', width: '130%', marginBottom: '-0%'
      }}>
        <br></br>
        <img src={logo1} className='imageLogo9'></img>

        <div >
          <div className="mainDiv"><br />
            <div className="child">
              <button className="buttonFood" onClick={() => {
                navigate('/posts', { state: { name: "food", id: 1 } })
              }} ></button>
              <h3 >food</h3>
            </div>

            <div className="child">
              <button className="buttonRecipes" onClick={() => { navigate('/posts', { state: { name: "recipes", id: 2 } }) }}></button>
              <h3 >recipes</h3>
            </div>

            <div className="child">
              <button className="buttonSport" onClick={() => { navigate('/posts', { state: { name: "sport", id: 3 } }) }}></button>
              <h3 >sport</h3>
            </div>

            <div className="child">
              <button className="buttonShops" onClick={() => { navigate('/posts', { state: { name: "shops", id: 4 } }) }}></button>
              <h3 >shops</h3>
            </div>

            <div className="child">
              <button className="buttonLand" onClick={() => { navigate('/posts', { state: { name: "landSpace", id: 5 } }) }} ></button>
              <h3 >landScapes</h3>
            </div>

            <div className="child">
              <button className="buttonTrip" onClick={() => { navigate('/posts', { state: { name: "trips", id: 6 } }) }}></button>
              <h3 >trips</h3>
            </div>

            <div className="child">
              <button className="buttonMakeUp" onClick={() => { navigate('/posts', { state: { name: "makeUp", id: 7 } }) }}></button>
              <h3 >make-up</h3>
            </div>
          </div>


          <br />
          <div className="howNice">
            <p>How nice that you joined!<br />
              Here you can share and publish successful places/recipes and more....<br />
              With pleasure!!</p>
          </div>
        </div>

        <div className="bigDiv">
          <div className="childDiv"><div className="food"></div></div>
          <div className="childDiv"><div className="trips"></div></div>
          <div className="childDiv"><div className="landSpace"></div></div>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}
export default MainPage;
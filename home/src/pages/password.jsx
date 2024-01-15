import React from "react";

function Password(){
const passwords=['1234ABC','1234DEF','1234GHI','1234JKL','1234MNO','1234PQR','1234STU','1234VWX','1234YZ',
'4567ABC','4567DEF','4567GHI','4567JKL','4567MNO','4567PQR','4567STU','4567VWX','4567YZ']
const newPassword= passwords[Math.floor(Math.random() * passwords.length)];


    return(
    <>
  <h1>your new password is:</h1>
  <h2>{newPassword}</h2>

    </>
    )
}
export default Password;
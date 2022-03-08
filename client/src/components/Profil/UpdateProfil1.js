import React, { useState } from "react";
import LeftNav from "../LeftNav";

import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import { updateBio } from "../../actions/user.actions";
import { dateParser } from "../Utils";
import FollowHandler from "./FollowHandler";
import App from './components1/App';
const UpdateProfil = () => {
 const  Change=()=>{
    alert("Pas En cours Terminer ");
  }


  return (
    <div className="profil1">
      <LeftNav />
     
      <div className="popup-profil-container profil1">
          <div className="modal">
           <center> <h3>YEAH!Click Go </h3>
           <a href="http://localhost:3000/"> <span className="cross"  >
              &#10005;
            </span></a><br/>
           <a href="http://localhost:3000/"><button>GO</button></a> 
           <a href="http://localhost:3000/"><button>GO</button></a>
           <a href="http://localhost:3000/"><button>GO</button></a>
           </center>
      <App />
          </div>
        </div>
      
        </div>
      )}
export default UpdateProfil;

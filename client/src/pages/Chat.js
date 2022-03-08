import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import LeftNav from '../components/LeftNav';

function Live(props)  {

useEffect(()=>{
 window.location.href="https://hamza12337.github.io/engineCHat/";
;;},[]);


return (
<div className="home">

<LeftNav/>
</div>
  )
  }


export default Live;

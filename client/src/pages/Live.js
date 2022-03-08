import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import LeftNav from '../../src/components/LeftNav';

function Live(props)  {

useEffect(()=>{
 window.location.href="https://hamzachatting.herokuapp.com/";
;;},[]);


return (
<div className="home">

<LeftNav/>
</div>
  )
  }


export default Live;

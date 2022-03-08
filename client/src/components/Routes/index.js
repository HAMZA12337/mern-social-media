import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import weather from '../../pages/weather';
import Home1 from '../../pages/components1/Home1';
import Live from  '../../pages/Live';
import Chat from  '../../pages/Chat';
import Navbar from '../Navbar';

const index = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/trending" exact component={Trending} />
        <Route path="/weather" exact component={weather} />
        <Route path="/Home1" exact component={Home1} />
        <Route path="/Live" exact component={() => { 
     window.location.href = 'https://hamzachatting.herokuapp.com/'; 
     return null;
}}
/>
<Route path="/Chat" exact component={() => { 
     window.location.href = 'https://hamza12337.github.io/engineCHat/'; 
     return null;
}}
/>   
     
      </Switch>
    </Router>
  );
};

export default index;
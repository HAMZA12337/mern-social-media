import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to='/' exact activeClassName="active-left-nav">
            <img src="./img/icons/home.svg" alt="home"/>
          </NavLink>
          <br/>
          
          <NavLink to='/trending' exact activeClassName="active-left-nav">
            <img src="./img/icons/rocket.svg" alt="home"/>
          </NavLink>
          <br/>
          
          <NavLink to='/profil' exact activeClassName="active-left-nav">
            <img src="./img/icons/user.svg" alt="home"/>
          </NavLink>
          <br/>
        
          <NavLink to='/weather' exact activeClassName="active-left-nav">
            <img src="./img/icons/cloudy.png" alt="home" width="40px" heigh="50px"/>
          </NavLink>
          <br/>
         
          <NavLink to='./Chat' exact activeClassName="active-left-nav" id="live">
            <img src="./img/icons/chat.png" alt="music" width="30px"  heigh="50px"/>
          </NavLink>
          
          <br />
          <NavLink to="/Live" exact activeClassName="active-left-nav" id="live" target="_blank">
        <img src="./img/icons/3.jpg" alt="music" width="35px" heigh="50px"/>
        </NavLink>
        <NavLink to="/Livres" exact activeClassName="active-left-nav" id="live" to={{ pathname: "https://azoul-books.herokuapp.com/" }} target="_blank">
        <img src="./img/icons/livres.png" alt="music" width="35px" heigh="50px"/>
        </NavLink>
        <NavLink to="/Vedios" exact activeClassName="active-left-nav" id="live" to={{ pathname: "https://azoul-vedios.herokuapp.com/" }} target="_blank">
        <img src="./img/icons/vedios.png" alt="vedios" width="35px" heigh="50px"/>
        </NavLink>
        <NavLink to="/Musique" exact activeClassName="active-left-nav" id="live" to={{ pathname: "https://azoul-musics.herokuapp.com/" }} target="_blank">
        <img src="./img/icons/musiques.png" alt="music" width="35px" heigh="50px"/>
        </NavLink>
        <NavLink to="/News" exact activeClassName="active-left-nav" id="live" to={{ pathname: "http://localhost:3001/" }} target="_blank">
        <img src="./img/icons/News.png" alt="music" width="35px" heigh="50px"/>
        </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
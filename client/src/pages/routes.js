//routes.js

import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import DetailsAlbum from './components1/DetailsAlbum';
import FavoritesAlbums from './components1/FavoritesAlbums';
import Home1 from './components1/Home1';

class Routes extends Component{
   render(){
       return(
            <Switch>
               <Route path="/Home1" exact component={Home1}/>
               <Route path="/details/:id" exact component={DetailsAlbum}/>
               <Route path="/favorites" exact component={FavoritesAlbums}/>
            </Switch>
       )
   }
}


export default Routes;
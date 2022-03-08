

import React,{Component} from 'react'
import './Home.css';
import * as actions from '../actions1/index';
import {Link} from 'react-router-dom';
import Header from './widgets/header/Header';
import Footer from './widgets/footer/Footer';

class FavoritesAlbums extends Component{
    state = {
        albums : [],
    }
    componentWillMount(){
        let favorites = actions.getFavoritesAlbums();
        this.setState({
            albums : JSON.parse(favorites)
        })
        // console.log(this.state);
    }
    renderAlbums = () => {
        // console.log(this.state);
        const {albums} = this.state;
        return albums && albums.length ?
            albums.map((item,index) => (
            <div  key={index} className="col-md-4 mb-2">
                <div className="card border-danger">
                    <img src={item.album.cover_big} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <span className="text-primary">{item.artist.name} </span>
                        <div className="card-title">
                            {item.title}
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="links">
                            <Link to={`/details/${item.album.id}`} className="link"><i className="fas fa-info text-danger"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
        : null;
    }
    render(){
        return(
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header/>
                            <div className="row">
                                {this.renderAlbums()}
                            </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FavoritesAlbums;
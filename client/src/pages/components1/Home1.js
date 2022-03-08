//Home.js

import React,{Component} from 'react'
import './Home.css';
import Search from './widgets/Search/Search';
import * as actions from '../actions1/index';
import {Link} from 'react-router-dom';
import Header from './widgets/header/Header';
import Footer from './widgets/footer/Footer';
import swal from 'sweetalert';
import ParticlesBg from 'particles-bg';
//import icon from "./icon"
class Home1 extends Component{
    state = {
        albums : [],
        term : '',
        show : false,
    }
    componentDidMount(){
        actions.getAlbums().then(item => this.setState({albums:item}));
    }
    searchAlbums = (term) => {
        actions.getAlbums(term).then(item => this.setState({albums:item}));
    }
    addToFavorites = (album) => {
        //console.log(album.album.id);
        let oldFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if(this.checkAlbum(oldFavorites,album)){
            swal({
                title: "Album Existe!",
                text: "Album déja ajouté à vos favoris!",
                icon: "warning",
            });
            return false;
        }
        oldFavorites.push(album);
        let favorites = oldFavorites;
        localStorage.setItem('favorites',JSON.stringify(favorites));
        swal({
            title: "Album Ajouté!",
            text: "Album ajouté à vos favoris!",
            icon: "success",
        });
    }
    checkAlbum = (albums,album) => {
        var found = albums.some(function (item) {
            return item.album.id === album.album.id;
        });
        return found;
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
                            <a onClick={() => this.addToFavorites(item)} className="link"><i className="fas fa-star text-danger"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        ))
        : null;
    }
    render(){
        let config = {
            num: [4, 7],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [2, 3],
            tha: [-50, 50],
            alpha: [0.6, 0],
            scale: [.1, 0.9],
            //body: icon,
            position: "relative",
            //color: ["random", "#ff0000"],
            cross: "dead",
            random: 10
        }

 
 
        return(
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header/>
                        <Search searchAlbums = {this.searchAlbums}/>
                        <div className="row">
                            {this.renderAlbums()}
                        </div>
                        <Footer/>
                    </div>
                </div>
               
                <ParticlesBg type="circle" bg={true} />
            </div>
        )
    }
}

export default Home1;
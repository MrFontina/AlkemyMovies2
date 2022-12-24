// import LogIn from "./components/Login/LogIn";
import Listado from "./components/Listado/Listado";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Detalle from "./components/Detalle/Detalle"
import Resultados from "./components/Resultados/Resultados"
import Favoritos from "./components/Favoritos/Favoritos";
import './css/app.css'

import { useEffect, useState } from "react";
import {  BrowserRouter,Routes, Route } from "react-router-dom";

import "./css/bootstrap.min.css"

function App() {

  const [ favoritos, setFavoritos ] = useState([]);

    useEffect(()=>{
        const favsInLocal = localStorage.getItem('favs');
        if(favsInLocal !== null){
            const favsArray = JSON.parse(favsInLocal);
            setFavoritos(favsArray)
        }
    }, [])

      const addOrRemoveFromFavs = e =>{

      const favMovies = localStorage.getItem('favs');
      let tempMoviesInFavs;
    
      if(favMovies === null) {
        tempMoviesInFavs = [];
      }else{
        tempMoviesInFavs = JSON.parse(favMovies)
      }

      
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId
    };
    let movieIsInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id});
    if(!movieIsInArray){
      tempMoviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
      setFavoritos(tempMoviesInFavs)
      console.log("Agregado a favs")
    }else{
      let moviesLeft = tempMoviesInFavs.filter(oneMovie=>{
        return oneMovie.id !== movieData.id});
        localStorage.setItem('favs', JSON.stringify(moviesLeft));
        setFavoritos(moviesLeft)
        console.log("Eliminado de favs")
    }


    
    
    
  }

  return (
    <>
    <BrowserRouter>
    <Header favoritos={favoritos}/>
    <div className="container nt-3">
    <Routes>
    {/* <Route exact path="/" element={<LogIn/>}/> */}
    <Route path="/" element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />
    {/* <Route path="/listado" element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}/> */}
    <Route path="/detalle" element={<Detalle/>}/>
    <Route path="/resultados/:keyword" element={<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
    <Route path="/favoritos" element={<Favoritos favoritos={favoritos} addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;

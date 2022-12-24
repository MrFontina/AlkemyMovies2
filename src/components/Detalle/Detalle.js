// import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Detalle (){

    // let token = sessionStorage.getItem('token'); 
    const [ movie, setMovie ] = useState(null) 
    let query =  new URLSearchParams(window.location.search);
    let movieID = query.get('movieID')

    useEffect(()=>{
        
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=0e6fd45b62bd6a7274862fb9a8d218a1&language=es-ES`
        axios.get(endPoint)
        .then((res)=>{
            const movieData = res.data
            setMovie(movieData)
        })
        .catch(error=>{
            console.log(error)
        })
    },[setMovie, movieID])
        

    return( 
       
        <>
            {/* {!token ? <Navigate to="/"/> :  */}
            
           { movie ? <>
                <h2>{movie.title}</h2>
                <div className="row">
                    <div className="col-4">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="moviePoster"/>
                    </div>
                    <div className="col-8">
                        <h5>Fecha de estreno: {movie.release_date} </h5>
                        <h5>Reseña:</h5>
                        <p> {movie.overview} </p>
                        <h5>Rating: {movie.vote_average} </h5>
                        <h5>Generos:</h5>
                        <ul>
                           { movie.genres.map(oneGenre=><li key={oneGenre.id}>{oneGenre.name}</li>)}
                        </ul>
                    </div>
                </div>
              </>          
                : <h2>cargando...</h2> 


           }  
                
                
           
            {/* }              */}
        </>
    )
}

export default Detalle
import { Navigate, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";



function Listado(){

        let token = sessionStorage.getItem('token');  
        const [ moviesList, setMoviesList ] = useState([]);

        useEffect(()=>{
            const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=0e6fd45b62bd6a7274862fb9a8d218a1&language=es-ES&page=1';
            axios.get(endPoint)
               .then(response => {
                const apiData = response.data;
                setMoviesList(apiData.results);
               })
               .catch(error=>{
                swal(<h2>Hubo errores, intente mas tarde</h2>)
               })
        },[setMoviesList]);
                

    return(
     <>
        {!token ? <Navigate to="/" replace/> :
        <div className="row">
            {moviesList.map((oneMovie, idx)=>{
                return(

                    <div className="col-3" key={idx}>
                         <div className="card my-4">
                         <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                         <div className="card-body">
                         <h5 className="card-title">{oneMovie.title.substring(0,20)}</h5>
                         <p className="card-text">{oneMovie.overview.substring(0, 70)}...</p>
                         <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                        </div>
                    </div>
        </div>

                )
            })}
            
            
        </div>
        }
     </>
    )
}

export default Listado
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Resultados(){

    const [ moviesResults, setMoviesResults ] = useState([])
    let query = new URLSearchParams(window.location.search);
    let kword = query.get('keyword')
    

    

    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=0e6fd45b62bd6a7274862fb9a8d218a1&language=es-ES&page=1&include_adult=false&query=${kword}`
        axios.get(endPoint)
        .then((response) => {
            const moviesArray = response.data.results;
            setMoviesResults(moviesArray)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [kword])
    


    return(
        <>
        <h2>Buscaste: {kword} </h2>
        <div className="row">
        {moviesResults.map((oneMovie, idx) =>{
            return(
                <div className="col-4" key={idx}>
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
        </>
    )
}

export default Resultados
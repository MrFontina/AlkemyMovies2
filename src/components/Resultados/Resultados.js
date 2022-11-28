import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";


function Resultados() {

    let params = useParams();
    let keyword = params.keyword;
    const [ moviesResults, setMoviesResults] = useState([]);

    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=0e6fd45b62bd6a7274862fb9a8d218a1&language=es-ES&page=1&include_adult=false&query=${keyword}`
        axios.get(endPoint)
        .then((res)=>{
            const moviesArray = res.data.results

            if(moviesArray.length === 0){
                swal("No se encontraron resultados")
            }

            setMoviesResults(moviesArray)
        })
        .catch(error=>{
            console.log(error)
        })
    },[keyword])
    

    


    return(
        <>
        <h2>Buscaste: {keyword} </h2>

        { moviesResults.length === 0 ? <h3>No hay resultados</h3> :

            <div className="row">
            {moviesResults.map((movie, idx)=>{                
            return(
                <div className="col-3" key={idx}>
                             <div className="card my-4">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">{movie.title.substring(0,20)}</h5>
                                  <p className="card-text">{movie.overview.substring(0, 70)}...</p>
                                  <Link to={`/detalle?movieID=${movie.id}`} className="btn btn-primary">View detail</Link>
                                </div>
                             </div>
                        </div>)})}
                </div>           
        }

        <div className="row">
        {moviesResults.map((movie, idx)=>{
            
        return(
            <div className="col-3" key={idx}>
                         <div className="card my-4">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">{movie.title.substring(0,20)}</h5>
                              <p className="card-text">{movie.overview.substring(0, 70)}...</p>
                              <Link to={`/detalle?movieID=${movie.id}`} className="btn btn-primary">View detail</Link>
                            </div>
                         </div>
                    </div>)})}
       </div>
        </>
        
    )
}

export default Resultados
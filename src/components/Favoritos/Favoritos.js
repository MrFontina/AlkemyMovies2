import { Link, Navigate } from "react-router-dom";

function Favoritos({ addOrRemoveFromFavs, favoritos }){

    let token = sessionStorage.getItem('token'); 

    return(
        <>
        {!token ? <Navigate to="/" replace /> : 

        <div>
            <h2>Tus favoritos:</h2>
        { !favoritos.length ? <div className="col-12 text-danger">No hay favoritos</div> : <div className="row">           
        {favoritos.map((oneMovie, idx)=>{
                return(

                    <div className="col-3" key={idx}>
                         <div className="card my-4">
                                <img src={oneMovie.imgURL} className="card-img-top" alt="..."/>
                                <button className="favourite-btn" 
                                        onClick={addOrRemoveFromFavs}
                                        data-movie-id={oneMovie.id}>🖤</button>
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
        </div>

        }
        
        
        
        
        </>
    )
}

export default Favoritos
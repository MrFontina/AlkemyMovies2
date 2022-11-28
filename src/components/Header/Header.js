import { Link } from "react-router-dom";
import Buscador from "../Buscador/Buscador";

function Header({favoritos}){
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">AlkemyMovies</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/listado">Listado</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/favoritos">Favoritos</Link>
      </li>
      <li className="nav-item d-flex align-items-center">{
        favoritos.length >0 ? <span className="text-success">Peliculas en favoritos: {favoritos.length} </span> : null
      }
        
      </li>      
    </ul>
  </div>
  <Buscador/>
</nav>
        </header>
    )

}

export default Header
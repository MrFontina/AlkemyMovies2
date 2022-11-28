import { useNavigate } from "react-router-dom";
import swal from "@sweetalert/with-react";

function Buscador(){

   
    const navigate = useNavigate()
    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if (keyword.length === 0){
            swal(<h5>Debes escribir una palabra clave</h5>)
        } else if (keyword.length <4){
            swal(<h5>Debes escribir al menos 4 caracteres</h5>)
        } else {
            e.currentTarget.keyword.value = '';
            navigate(`/resultados/${keyword}`)
        }
    }


    return(
        <form onSubmit={submitHandler} className="d-flex align-items-center">
        <label className="form-label mb-0 mx-2">
          <input  type="text" name="keyword" placeholder="Escriba una palabra clave" className="form-control"/>  
        </label>
        <button type="submit"  className="btn btn-success">Buscar</button>
    </form>
    )
}


export default Buscador
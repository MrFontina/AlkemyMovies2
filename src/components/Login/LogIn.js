import axios from "axios";
import swal from "sweetalert";
import { useNavigate, Navigate } from "react-router-dom";

function LogIn() {

    const navigate = useNavigate();
    const submitHandler = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email === "" || password === ""){
            swal("Los campos no pueden estar vacios")
            return;
        };

        if(email !== "" && !regexEmail.test(email)){
            swal("Email no valido");
            return;
        }

        if(email !== "challenge@alkemy.org" || password !== "react"){
            swal("Credenciales invalidas")
            return;
        }
        axios.post('http://challenge-react.alkemy.org',{ email, password })
        .then(res => {
            swal("Perfecto!Ingresaste correctamente")
            const tokenRecibido = res.data.token
            sessionStorage.setItem('token', tokenRecibido)
            navigate("/listado")
        })

    }

    
    let token = sessionStorage.getItem('token')

    return(
        <>
        { token ?  <Navigate to="/listado"/> :  
        <div>  
        <h2>Formulario Log In</h2>
        <form onSubmit={submitHandler}>
            <label><span>Email</span></label><br/>
            <input type="text" name="email" /><br/>
            <label><span>Contraseña</span></label><br/>
            <input type="password" name="password" /><br/>
            <button type="submit">Enviar</button>
        </form>
        </div>  
         }
        </>
    )
}

export default LogIn
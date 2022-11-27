import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";

function LogIn() {

    const navigate = useNavigate();
    const submitHandler = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email === "" || password === ""){
            swal(<h2>Los campos no pueden estar vacios</h2>)
            return;
        };

        if(email !== "" && !regexEmail.test(email)){
            swal(<h2>"email no valido"</h2>);
            return;
        }

        if(email !== "challenge@alkemy.org" || password !== "react"){
            swal(<h2>"credenciales invalidas"</h2>)
            return;
        }
        console.log("vas ganando!")
        axios.post('http://challenge-react.alkemy.org',{ email, password })
        .then(res => {
            swal(<h2>Perfecto!Ingresaste correctamente</h2>)
            const tokenRecibido = res.data.token
            sessionStorage.setItem('token', tokenRecibido)
            console.log(res.data)
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
import LogIn from "./components/Login/LogIn";
import Listado from "./components/Listado/Listado";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Detalle from "./components/Detalle/Detalle"
import Resultados from "./components/Resultados/Resultados"

import {  BrowserRouter,Routes, Route } from "react-router-dom";

import "./css/bootstrap.min.css"

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className="container nt-3">
    <Routes>
    <Route exact path="/" element={<LogIn/>}/>
    <Route path="/listado" element={<Listado/>}/>
    <Route path="/detalle" element={<Detalle/>}/>
    <Route path="/resultados" element={<Resultados/>}/>
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;

function Resultados(){

    const query = new URLSearchParams(window.location.search);
    const keyword = query.get('palabra-clave')


    return(
        <h2>Resultados: {keyword} </h2>
    )
}

export default Resultados
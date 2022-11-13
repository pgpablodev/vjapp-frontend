import './index.css'
import { Link } from 'react-router-dom'

const Videojuego = ({videojuego}) => {
    let nombre = videojuego[1]
    let precio = (Math.round(videojuego[2]*100)/100).toFixed(2)
    let foto = "http://localhost/proyectos/backend-php-react/"+videojuego[3]
    
    function eliminaVideojuego(){
        fetch("http://localhost/proyectos/backend-php-react/eliminarVideojuego.php?id="+videojuego[0], {method: "DELETE"})
        .then(() => {document.getElementById(videojuego[0]).style.display = "none"})        
    }

    return(
        <div className="videojuego" id={videojuego[0]}>
            <div className="delete-screen" id={"ds"+videojuego[0]}>
                <div className="delete-text">¿Seguro que deseas eliminar el videojuego {nombre}?</div>
                <div className="delete-buttons">
                    <button className="boton-eliminar" onClick={eliminaVideojuego}>Sí</button>
                    <button className="boton" onClick={(() => {document.getElementById("ds"+videojuego[0]).style.visibility = "hidden"})}>No</button>
                </div>
            </div>
            <div className="articulo">
                <div className="col-izq">
                    <div className="nombre">{nombre}</div>
                    <div className="portada"><img src={foto} alt="Portada"></img></div>
                </div>
                <div className="col-dch">
                    <div className="precio">
                        <div className="precio-comprar">COMPRAR</div>
                        <div className="precio-numero">
                            <div className="precio-valor">{precio}</div>
                            <div className="precio-divisa">EUR</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="botones">
                <Link to={"/videojuegos/editar/:"+videojuego[0]} className="boton">Editar</Link>
                <button className="boton-eliminar" onClick={(() => {document.getElementById("ds"+videojuego[0]).style.visibility = "visible"})}>Eliminar</button>
            </div>            
        </div>
    )
}

export default Videojuego
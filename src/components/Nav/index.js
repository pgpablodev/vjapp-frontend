import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from "react-router-dom"

const Nav = () => {
    return(
        <>
            <div className="nav">
                <Link className="logo" to="/videojuegos/ver"><FontAwesomeIcon icon={faGamepad}/>VJApp</Link>
                <Link className="btn" to="/videojuegos/ver">Ver videojuegos</Link>
                <Link className="btn" to="/videojuegos/agregar">Agregar videojuego</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Nav;
import './index.css'
import Videojuego from '../Videojuego'
import { useEffect, useState } from 'react'

const VerVideojuegos = () => {    
    document.body.style.backgroundImage = "none"

    const [videojuegos, setVideojuegos] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost/proyectos/backend-php-react/selectVideojuego.php")
            .then((response) => {
                return response.json()
            })
            .then((videojuegos) => {
                setVideojuegos(videojuegos)
                setLoading(false)
            })
    }, []);

    const items = []

    for(let i=0;i<videojuegos.length;i+=2){
        if(videojuegos[i+1]!==undefined)
            items.push(<div className="fila"><Videojuego key={videojuegos[i][0]} videojuego={videojuegos[i]}/><Videojuego key={videojuegos[i+1][0]} videojuego={videojuegos[i+1]}/></div>)
        else
            items.push(<div className="fila"><Videojuego key={videojuegos[i][0]} videojuego={videojuegos[i]}/></div>) 
    }

    if(isLoading){
        return(        
            <div className="contenedor-ver">
                <div className="fila">
                    <Videojuego key={0} videojuego={["","","",""]}/>
                    <Videojuego key={1} videojuego={["","","",""]}/>
                </div>          
            </div>
        )
    }else if(items.length!==0){
        return(        
            <div className="contenedor-ver">
                {items}          
            </div>
        )
    }else{
        return(        
            <div className="contenedor-ver">
                <div className="fila">
                    <Videojuego key={0} videojuego={["","","",""]}/>
                    <Videojuego key={1} videojuego={["","","",""]}/>
                </div>          
            </div>
        )
    }
}

export default VerVideojuegos
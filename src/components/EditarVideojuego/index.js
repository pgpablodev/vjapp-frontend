import './index.css'
import { Link, useParams } from 'react-router-dom'
import $ from 'jquery'

const EditarVideojuego = () => {
    document.body.style.backgroundImage = "none"

    const id = useParams().id
    const url = 'http://localhost/proyectos/backend-php-react/updateVideojuego.php?id=' +id.charAt(1)

    const manejarEnvioDeFormulario = (e) => {
        e.preventDefault()

        let nombre = $("#nombre").val()
        let precio = $("#precio").val()
        let foto = $("#foto")
        let error=0;

        var formData=new FormData()
        formData.append("nombre",nombre)
        formData.append("precio",precio)
        formData.append("foto",foto.prop('files')[0])

        if(error===0){
            $.ajax({
                data: formData,
                url: url,
                type : 'POST',
                contentType:false,
                cache:false,
                processData:false,
                enctype: 'multipart/form-data'
            }).done(function(data,textStatus,jqXHR){
                // eslint-disable-next-line eqeqeq
                if(data==1){
                    alert("Videojuego actualizado. ")
                    let campos = document.getElementsByClassName("input")
                    for(let campo of campos){
                        campo.value = ''
                    }                   
                }else{
                    alert("Se ha producido un error. ")
                }
            }).fail(function(jqXHR, textStatus,errorThrown) {
                alert("Error en la petición. ")
            })
        }
    }
    
    return(
        <div className="editar">
            <h1>Editar videojuego</h1>
            <form className="field" onSubmit={(e) => manejarEnvioDeFormulario(e)}>
                <div className="form-group">
                    <label className="label" htmlFor="nombre">Nombre:</label>
                    <input autoFocus placeholder="Nombre" type="text" id="nombre" className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="precio">Precio:</label>
                    <input autoFocus placeholder="Precio" type="number" min="0" step="0.01" id="precio" className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="foto">Foto:</label>   
                    <input type="hidden" name="MAX_FILE_SIZE" value="30000"></input>
                    <input autoFocus placeholder="Foto" type="file" id="foto" className="input" />
                </div>
                <div className="form-group" id="field-btns">
                    <button className="btn" id="guardar">Guardar</button>
                    <Link to="/videojuegos/ver" className="btn" id="volver">Volver</Link>
                </div>
            </form>
        </div>
    )
}

export default EditarVideojuego
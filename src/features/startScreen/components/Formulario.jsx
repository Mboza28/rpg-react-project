import './Formulario.css'

function Formulario() {
  return (
    <div>
        <section className="contenedor-formulario">
            <form className='formulario'>
                <h2 className='texto-formulario'>Registro</h2>
                <input className='input-formulario' type="text" placeholder="Introduce username" name='nombreJugador'/>
                <button className='boton-formulario'>INICIAR</button>
            </form>
        </section>
    </div>
  )
}

export default Formulario
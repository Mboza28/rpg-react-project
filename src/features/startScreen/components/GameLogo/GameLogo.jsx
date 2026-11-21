import './GameLogo.css'
import logo from '../../assets/logo-principal.png'


function GameLogo() {
  return (
    <div className='contenedor-logo'>
        <img src={logo} alt='Logo principal de Shinobi Void Chronicles'></img>
    </div>
  )
}

export default GameLogo
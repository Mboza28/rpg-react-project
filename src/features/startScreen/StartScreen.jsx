import Formulario from './components/Formulario'
import GameLogo from './components/GameLogo/GameLogo'
import fondo from './assets/fondo-principal.jpeg'

function StartScreen() {
  return (
    <div>
        
        <GameLogo></GameLogo>
        <Formulario></Formulario>
    </div>
  )
}

export default StartScreen
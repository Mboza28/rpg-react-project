import { useNavigate } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import styles from '../../StartScreen.module.css';

export default function MainMenu({ hasSaveData = false, onResetNewGame }) {
  const navigate = useNavigate();

  const handleStartNew = () => {
    // Si hay lógica previa (ej. reiniciar estado o localStorage), se ejecuta aquí
    if (onResetNewGame) onResetNewGame();
    navigate('/select-guardian');
  };

  const handleContinue = () => {
    if (!hasSaveData) return;
    navigate('/world-map');
  };

  const handleHowToPlay = () => {
    navigate('/how-to-play');
  };

  const handleExit = () => {
    navigate('/credits');
  };

  return (
    <nav className={styles.menuPanel} aria-label="Menú principal">
      <MenuButton
        label="INICIAR JUEGO"
        variant="primary"
        onClick={handleStartNew}
      />

      <MenuButton
        label="CONTINUAR JUEGO"
        variant="default"
        disabled={!hasSaveData}
        onClick={handleContinue}
      />

      <MenuButton
        label="CÓMO SE JUEGA"
        variant="default"
        onClick={handleHowToPlay}
      />

      <MenuButton
        label="SALIR DEL JUEGO"
        variant="danger"
        onClick={handleExit}
      />
    </nav>
  );
}
import { useNavigate } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import styles from '../../StartScreen.module.css';

export default function MainMenu({ hasSaveData = false, onResetNewGame }) {
  const navigate = useNavigate();

  const handleStartNew = () => {
    // Si hay lógica previa (ej. reiniciar estado o localStorage), se ejecuta aquí
    if (onResetNewGame) onResetNewGame();
    navigate('/world-map'); // O '/select-guardian' si quieres que elijan héroe antes de empezar
  };

  const handleContinue = () => {
    if (!hasSaveData) return;
    navigate('/world-map');
  };

  const handleOpenGuardians = () => {
    navigate('/guardians');
  };

  const handleExit = () => {
    // En aplicaciones web el navegador bloquea window.close() si no se abrió por script,
    // así que puedes redirigir a una pantalla de créditos/despedida o mostrar un modal
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
        label="GUARDIANES"
        variant="default"
        onClick={handleOpenGuardians}
      />

      <MenuButton
        label="SALIR DEL JUEGO"
        variant="danger"
        onClick={handleExit}
      />
    </nav>
  );
}
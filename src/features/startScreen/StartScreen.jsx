import TopUtilityBar from './components/TopUtilityBar/TopUtilityBar';
import MainMenu from './components/MainMenu/MainMenu'
import GameLogo from './components/GameLogo/GameLogo';
import StartFooter from './components/StartFooter/StartFooter';
import styles from '../../features/startScreen/StartScreen.module.css';

export default function StartScreen({
  activeGuardian,
  resources = { gems: 0, crystals: 0 },
  hasSaveData = false,
  onStartNewGame,
  onContinueGame,
  onHowToPlay,
  onOpenSettings,
  onExitGame,
}) {

  return (
    <main className={styles.screenContainer}>
      <TopUtilityBar
        gems={resources.gems}
        crystals={resources.crystals}
        version="v1.0.4"
        onOpenSettings={onOpenSettings}
      />

      <section className={styles.centerMenu}>
        <GameLogo />
        <div className={styles.fondoMenu}>
          <MainMenu
            hasSaveData={hasSaveData}
            onStartNew={onStartNewGame}
            onContinue={onContinueGame}
            onHowToPlay={onHowToPlay}
            onExit={onExitGame}
          />
        </div>
      </section>

      <StartFooter year={2026} studio="BOLONIO STUDIOS" />
    </main>
  );
}
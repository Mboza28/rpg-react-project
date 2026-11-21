import emblemaDragon from '../../assets/favicon-dragon.png';
import styles from '../../StartScreen.module.css'

export default function TopUtilityBar({
  gems = 0,
  crystals = 0,
  version = 'v1.0.4',
  onOpenSettings,
}) {
  return (
    <>
      {/* Esquina superior izquierda: Emblema del dragón */}
      <div style={{ gridArea: 'topLeft', display: 'flex', alignItems: 'flex-start' }}>
        <img
          src={emblemaDragon}
          alt="Emblema de Ignis"
          style={{
            width: '8rem',
            height: '8rem',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.7))',
          }}
        />
      </div>

      {/* Esquina superior derecha: Recursos, Configuración y Versión */}
      <div className={styles.topUtility} style={{ alignItems: 'center' }}>
        <div className={styles.resourceBadge} title="Gemas Mágicas">
          <span style={{ color: '#e040fb', fontSize: '1.1rem' }}>◆</span>
          <span className={styles.resourceValue}>{gems}</span>
        </div>

        <div className={styles.resourceBadge} title="Cristales Elementales">
          <span style={{ color: '#26c6da', fontSize: '1.1rem' }}>◆</span>
          <span className={styles.resourceValue}>{crystals}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 'bold',
              color: '#fff3d1',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)',
            }}
          >
            {version}
          </span>

          <button
            type="button"
            className={styles.configBtn}
            onClick={onOpenSettings}
          >
            CONFIGURACIÓN
          </button>
        </div>
      </div>
    </>
  );
}
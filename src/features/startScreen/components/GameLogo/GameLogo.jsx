import logoIgnis from '../../assets/logo-principal.png';

export default function GameLogo() {
  return (
    <header style={{ pointerEvents: 'none', textAlign: 'center' }}>
      <img
        src={logoIgnis}
        alt="Ignis: Legends of the Wind"
        style={{
          width: '100%',
          maxWidth: '34rem',
          height: 'auto',
          display: 'block',
          filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.75))',
        }}
      />
    </header>
  );
}
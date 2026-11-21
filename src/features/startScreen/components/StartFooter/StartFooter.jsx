export default function StartFooter({
  year = 2026,
  studio = 'BOLONIO STUDIOS',
}) {
  return (
    <footer
      style={{
        gridArea: 'bottomLeft',
        display: 'flex',
        alignItems: 'flex-end',
        pointerEvents: 'none',
      }}
    >
      <small
        style={{
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          color: '#fff3d1',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.95)',
        }}
      >
        © {year} {studio}
      </small>
    </footer>
  );
}
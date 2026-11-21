import styles from '../../StartScreen.module.css'

const VARIANT_CLASS = {
  primary: styles.btnPrimary,
  default: styles.btnDefault,
  danger: styles.btnDanger,
};

export default function MenuButton({
  label,
  variant = 'default',
  disabled = false,
  onClick,
}) {
  const variantClass = VARIANT_CLASS[variant] || styles.btnDefault;

  return (
    <button
      type="button"
      className={`${styles.btn} ${variantClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  const base =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'ghost'
        ? 'btn-ghost'
        : 'inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-signal';

  const classes = `${base} ${disabled ? 'opacity-60 pointer-events-none' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

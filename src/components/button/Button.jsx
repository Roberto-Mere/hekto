export default function Button({
  children,
  backgroundColor = 'bg-primary',
  textColor = 'text-white',
  size,
  ...props
}) {
  return (
    <button
      className={`rounded-xl ${backgroundColor} ${textColor} ${size === 'small' ? 'px-16 py-8' : 'px-40 py-16'}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Button({ children, size, ...props }) {
  return (
    <button
      className={`rounded-xl bg-primary text-white ${size === 'small' ? 'px-16 py-8' : 'px-40 py-16'}`}
      {...props}
    >
      {children}
    </button>
  );
}

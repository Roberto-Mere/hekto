export default function Button({ children, size }) {
  return (
    <button
      className={`rounded-xl bg-primary text-white ${size === 'small' ? 'px-16 py-8' : 'px-40 py-16'}`}
    >
      {children}
    </button>
  );
}

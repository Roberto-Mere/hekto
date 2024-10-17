export default function IconButton({ children, color, backgroundColor }) {
  return (
    <button className={`rounded-full p-8 ${color} ${backgroundColor}`}>
      {children}
    </button>
  );
}

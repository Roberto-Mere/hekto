export default function H3({ children, style = '' }) {
  return (
    <h1 className={`text-h3 font-bold capitalize tracking-heading ${style}`}>
      {children}
    </h1>
  );
}

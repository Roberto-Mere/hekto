export default function H1({ children, style = '' }) {
  return (
    <h1 className={`text-h1 font-bold capitalize tracking-heading ${style}`}>
      {children}
    </h1>
  );
}

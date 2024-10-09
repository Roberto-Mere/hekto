export default function H2({ children, style = '' }) {
  return (
    <h1 className={`text-h2 font-bold capitalize tracking-heading ${style}`}>
      {children}
    </h1>
  );
}

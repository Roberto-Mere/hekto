export default function H4({ children, style = '' }) {
  return (
    <h4 className={`text-h4 font-bold capitalize tracking-heading ${style}`}>
      {children}
    </h4>
  );
}

export default function Sub1({ children, style = '' }) {
  return <p className={`text-sub1 font-bold ${style}`}>{children}</p>;
}

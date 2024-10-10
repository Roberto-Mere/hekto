export default function Label({ children, style = '' }) {
  return <p className={`text-base font-normal ${style}`}>{children}</p>;
}

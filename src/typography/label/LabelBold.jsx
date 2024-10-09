export default function LabelBold({ children, style = '' }) {
  return <p className={`text-base font-bold ${style}`}>{children}</p>;
}

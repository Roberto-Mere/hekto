export default function LabelSmall({ children, style = '' }) {
  return <p className={`text-sm font-normal ${style}`}>{children}</p>;
}

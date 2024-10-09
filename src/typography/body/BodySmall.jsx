export default function BodySmall({ children, style = '' }) {
  return <p className={`font-lato text-sm font-normal ${style}`}>{children}</p>;
}

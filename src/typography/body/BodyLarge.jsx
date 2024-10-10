export default function BodyLarge({ children, style = '' }) {
  return <p className={`font-lato text-xl font-normal ${style}`}>{children}</p>;
}

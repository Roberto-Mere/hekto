export default function BodyBold({ children, style = '' }) {
  return <p className={`font-lato text-base font-bold ${style}`}>{children}</p>;
}

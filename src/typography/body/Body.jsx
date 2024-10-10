export default function Body({ children, style = '' }) {
  return (
    <p className={`font-lato text-base font-normal ${style}`}>{children}</p>
  );
}

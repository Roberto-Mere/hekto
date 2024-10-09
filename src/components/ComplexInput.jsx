export default function ComplexInput({ type, placeholder, buttonContent }) {
  return (
    <div>
      <input type={type} placeholder={placeholder} />
      <button>{buttonContent}</button>
    </div>
  );
}

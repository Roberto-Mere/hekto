export default function IconItem({ icon, text, style = '', forward = true }) {
  return (
    <div className={`flex items-center ${style}`}>
      {forward ? (
        <>
          {icon}
          {text}
        </>
      ) : (
        <>
          {text}
          {icon}
        </>
      )}
    </div>
  );
}

export default function IconItem({ icon, text, classes = '', forward = true }) {
  return (
    <div className={`flex items-center ${classes}`}>
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

export default function IconItem({ icon, text, forward = true }) {
  return (
    <div>
      {forward ? (
        <>
          {icon}
          <p>{text}</p>
        </>
      ) : (
        <>
          <p>{text}</p>
          {icon}
        </>
      )}
    </div>
  );
}

export default function List({ list, children, keyFn, classes = '' }) {
  return (
    <ul className={`flex ${classes}`}>
      {list.map((item, index) => (
        <li key={keyFn(item, index)}>{children(item, index)}</li>
      ))}
    </ul>
  );
}

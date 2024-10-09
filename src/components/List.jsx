export default function List({ list, children, keyFn, style }) {
  return (
    <ul className={`flex items-center ${style}`}>
      {list.map((item, index) => (
        <li key={keyFn(item, index)}>{children(item)}</li>
      ))}
    </ul>
  );
}

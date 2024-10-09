export default function List({ list, children, keyFn }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={keyFn(item, index)}>{children(item)}</li>
      ))}
    </ul>
  );
}

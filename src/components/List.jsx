export default function List({
  list,
  children,
  keyFn,
  classes = '',
  itemClasses = '',
}) {
  return (
    <ul className={`flex ${classes}`}>
      {list.map((item, index) => (
        <li className={itemClasses} key={keyFn(item, index)}>
          {children(item, index)}
        </li>
      ))}
    </ul>
  );
}

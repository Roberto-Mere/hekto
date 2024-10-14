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
        <li
          className={itemClasses ? itemClasses : null}
          key={keyFn(item, index)}
        >
          {children(item)}
        </li>
      ))}
    </ul>
  );
}

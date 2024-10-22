export default function IconButton({ children, classes, ...props }) {
  return (
    <button className={classes ? classes : null} {...props}>
      {children}
    </button>
  );
}

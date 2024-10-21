export default function IconButton({ children, classes }) {
  return <button className={classes ? classes : null}>{children}</button>;
}

export default function IconButton({ children, classes }) {
  return <button className={`rounded-full p-8 ${classes}`}>{children}</button>;
}

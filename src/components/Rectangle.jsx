export default function Rectangle({ isActive }) {
  const classes = isActive ? 'w-24 bg-primary' : 'w-16 bg-danger-light';

  return <div className={`h-4 rounded-xl ${classes}`}></div>;
}

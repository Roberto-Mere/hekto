import Button from '../Button';

export default function ComplexInput({
  type = 'text',
  placeholder,
  buttonContent = '',
}) {
  return (
    <form className="flex min-w-[32.8rem] rounded-xl border border-gray-2 p-4 focus-within:border-tertiary">
      <input
        type={type}
        placeholder={placeholder}
        className="ml-12 flex-1 font-lato text-sm font-normal outline-none placeholder:text-gray-3"
      />
      <Button size="small">{buttonContent}</Button>
    </form>
  );
}

import Typography from '../../../../components/typography/Typography';
import CheckmarkSmall from '../../../../assets/svg/checkmark-small.svg';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../../../store';

export default function Filter({ label, type, id, filterColor }) {
  const checked = useSelector((state) =>
    state.products.filters[type].includes(id),
  );
  const dispatch = useDispatch();

  function handleToggleFilter() {
    dispatch(productsActions.toggleFilter({ type, id }));
  }

  const bgColor =
    filterColor === 'info'
      ? 'bg-info-light'
      : filterColor === 'secondary'
        ? 'bg-secondary-light'
        : 'bg-danger-light';
  const bgColorChecked =
    filterColor === 'info'
      ? 'bg-info'
      : filterColor === 'secondary'
        ? 'bg-secondary'
        : 'bg-primary';

  return (
    <label className="flex items-center gap-8">
      <input
        checked={checked}
        onChange={handleToggleFilter}
        type="checkbox"
        className="peer hidden bg-white"
      />
      <span
        className={`h-16 w-16 rounded-md peer-checked:hidden ${bgColor}`}
      ></span>
      <span
        className={`hidden h-16 w-16 items-center justify-center rounded-md peer-checked:flex ${bgColorChecked}`}
      >
        <CheckmarkSmall className={`text-white`} />
      </span>
      {typeof label === 'string' ? (
        <Typography classes="text-gray-3">{label}</Typography>
      ) : (
        label
      )}
    </label>
  );
}

import List from '../../../../components/list/List';
import Typography from '../../../../components/typography/Typography';
import Filter from './Filter';

export default function FilterBlock({ title, filters, filterColor }) {
  return (
    <div>
      <Typography
        type="sub3"
        classes="border-b-[1px] border-black mb-24 pb-8 w-max"
      >
        {title}
      </Typography>
      <List
        list={filters}
        keyFn={(_, index) => index}
        classes="flex-col gap-16"
      >
        {(filter) => <Filter {...filter} filterColor={filterColor} />}
      </List>
    </div>
  );
}

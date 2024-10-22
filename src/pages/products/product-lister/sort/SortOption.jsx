import Typography from '../../../../components/typography/Typography';

export default function SortOption({ name, input }) {
  return (
    <div className="flex items-center gap-16">
      <Typography classes="text-gray-3">{name}</Typography>
      {input}
    </div>
  );
}

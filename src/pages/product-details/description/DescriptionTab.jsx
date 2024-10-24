import IconItem from '../../../components/IconItem';
import List from '../../../components/list/List';
import Typography from '../../../components/typography/Typography';
import Checkmark from '../../../assets/svg/checkmark.svg';

export default function DescriptionTab({ tab }) {
  const details = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.',
    'Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.',
    'Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.',
    'Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.',
    'Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.',
  ];

  return (
    <article className="pt-48">
      <div className="mb-32">
        <Typography type="sub2" classes="mb-16">
          {tab}
        </Typography>
        <Typography classes="text-gray-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam
          dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
          consectetur. Pellentesque diam dolor, tincidunt nec ante congue,
          tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis
          ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec
          ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula
          nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis
          nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus,
          congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus
        </Typography>
      </div>
      <div>
        <Typography type="sub2" classes="mb-16">
          More details
        </Typography>
        <List
          list={details}
          keyFn={(item) => item}
          classes="flex flex-col gap-16"
        >
          {(item) => (
            <IconItem
              icon={<Checkmark className="h-16 w-16" />}
              text={<Typography classes="text-gray-3">{item}</Typography>}
              classes="gap-8"
            />
          )}
        </List>
      </div>
    </article>
  );
}

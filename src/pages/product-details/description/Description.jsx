import Tabbed from '../../../components/tabbed/Tabbed';
import DescriptionTab from './DescriptionTab';

export default function Description() {
  const descriptionTabs = [
    'Description',
    'Additional Info',
    'Reviews',
    'Video',
  ];

  return (
    <section className="bg-gray-1 px-[41.5rem] py-64">
      <Tabbed
        tabs={descriptionTabs}
        RenderFn={DescriptionTab}
        buttonsClasses="gap-64"
        tabType="underline"
      />
    </section>
  );
}

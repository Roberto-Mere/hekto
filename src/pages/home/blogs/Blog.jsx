import IconItem from '../../../components/IconItem';
import Pen from '../../../assets/svg/pen.svg';
import Calendar from '../../../assets/svg/calendar.svg';
import Typography from '../../../components/typography/Typography';
import { Link } from 'react-router-dom';

export default function Blog({ image, title, description, author, date }) {
  return (
    <article className="shadow-normal hover:shadow-large flex flex-col rounded-xl transition-all duration-300 ease-out hover:-translate-y-24">
      <img src={image} alt={title} />
      <div className="flex flex-1 flex-col items-start px-16 pb-32 pt-16">
        <div className="mb-24 flex gap-64">
          <IconItem
            text={
              <Typography type="label-small" classes="text-gray-3">
                {author}
              </Typography>
            }
            classes="gap-8"
            icon={<Pen className="text-gray-3" />}
          />
          <IconItem
            text={
              <Typography type="label-small" classes="text-gray-3">
                {new Date(date).toLocaleDateString('en-UK', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </Typography>
            }
            classes="gap-8"
            icon={<Calendar className="text-gray-3" />}
          />
        </div>
        <Typography type="sub4" classes="mb-16">
          {title}
        </Typography>
        <Typography classes="text-gray-3 mb-32">{description}</Typography>
        <Link to="#" className="mt-auto">
          <Typography type="label-bold" classes="text-primary">
            Read More
          </Typography>
        </Link>
      </div>
    </article>
  );
}

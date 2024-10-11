import Typography from '../../components/Typography';
import Socials from './Socials';

export default function BottomFooter() {
  return (
    <section className="flex items-center justify-between bg-gray-2 px-sides py-16">
      <Typography type="body-small" classes="text-gray-3">
        ©Webecy - All Rights Reserved
      </Typography>
      <Socials />
    </section>
  );
}

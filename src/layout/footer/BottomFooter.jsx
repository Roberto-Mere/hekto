import BodySmall from '../../typography/body/BodySmall';
import Socials from './Socials';

export default function BottomFooter() {
  return (
    <section className="px-sides flex items-center justify-between bg-gray-2 py-16">
      <BodySmall style="text-gray-3">©Webecy - All Rights Reserved</BodySmall>
      <Socials />
    </section>
  );
}

import List from '../../components/List';
import IconItem from '../../components/IconItem';
import Sub4 from '../../typography/subtitle/Sub4';

import EmailIcon from '../../assets/svg/email.svg';
import TelephoneIcon from '../../assets/svg/telephone.svg';

export default function Contacts() {
  const contactsList = [
    {
      icon: <EmailIcon />,
      text: <Sub4>mhhasanul@gmail.com</Sub4>,
    },
    {
      icon: <TelephoneIcon />,
      text: <Sub4>(12345)67890</Sub4>,
    },
  ];

  return (
    <List list={contactsList} keyFn={(_, index) => index} style="gap-48">
      {(item) => (
        <IconItem icon={item.icon} text={item.text} style="gap-12 text-white" />
      )}
    </List>
  );
}

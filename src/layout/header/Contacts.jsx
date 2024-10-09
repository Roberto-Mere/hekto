import List from '../../components/List';
import IconItem from '../../components/IconItem';

import EmailIcon from '../../assets/svg/email.svg';
import TelephoneIcon from '../../assets/svg/telephone.svg';

export default function Contacts() {
  const contactsList = [
    {
      icon: <EmailIcon />,
      text: 'mhhasanul@gmail.com',
    },
    {
      icon: <TelephoneIcon />,
      text: '(12345)67890',
    },
  ];

  return (
    <List list={contactsList} keyFn={(item) => item.text}>
      {(item) => <IconItem icon={item.icon} text={item.text} />}
    </List>
  );
}

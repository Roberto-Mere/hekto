import List from '../../components/List';
import IconItem from '../../components/IconItem';
import Typography from '../../components/Typography';

import EmailIcon from '../../assets/svg/email.svg';
import TelephoneIcon from '../../assets/svg/telephone.svg';

export default function Contacts() {
  const contactsList = [
    {
      icon: <EmailIcon />,
      text: <Typography type="sub4">mhhasanul@gmail.com</Typography>,
    },
    {
      icon: <TelephoneIcon />,
      text: <Typography type="sub4">(12345)67890</Typography>,
    },
  ];

  return (
    <List list={contactsList} keyFn={(_, index) => index} classes="gap-48">
      {(item) => (
        <IconItem
          icon={item.icon}
          text={item.text}
          classes="gap-12 text-white"
        />
      )}
    </List>
  );
}

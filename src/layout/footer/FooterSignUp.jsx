import ComplexInput from '../../components/ComplexInput';
import List from '../../components/List';
import Logo from '../../components/Logo';
import Typography from '../../components/Typography';

export default function FooterSignUp() {
  const list = [
    <Logo />,
    <ComplexInput
      type="email"
      placeholder="Enter Email Address"
      buttonContent={<Typography type="label-small">Sign Up</Typography>}
    />,
    <Typography type="body" classes="text-gray-3">
      17 Princess Road, London, Greater London NW1 8JR, UK
    </Typography>,
  ];

  return (
    <List list={list} keyFn={(_, index) => index} classes="flex-col gap-32">
      {(item) => item}
    </List>
  );
}

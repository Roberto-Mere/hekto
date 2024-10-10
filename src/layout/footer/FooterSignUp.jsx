import ComplexInput from '../../components/ComplexInput';
import List from '../../components/List';
import Logo from '../../components/Logo';
import Body from '../../typography/body/Body';
import LabelSmall from '../../typography/label/LabelSmall';

export default function FooterSignUp() {
  const list = [
    <Logo />,
    <ComplexInput
      type="email"
      placeholder="Enter Email Address"
      buttonContent={<LabelSmall>Sign Up</LabelSmall>}
    />,
    <Body style="text-gray-3">
      17 Princess Road, London, Greater London NW1 8JR, UK
    </Body>,
  ];

  return (
    <List list={list} keyFn={(_, index) => index} style="flex-col gap-32">
      {(item) => item}
    </List>
  );
}

import Description from './description/Description';
import Display from './display/Display';
import Related from './related/Related';

export default function ProductDetails() {
  return (
    <main>
      <Display />
      <Description />
      <Related />
    </main>
  );
}

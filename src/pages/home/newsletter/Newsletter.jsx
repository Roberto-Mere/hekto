import Button from '../../../components/Button';
import H2 from '../../../typography/heading/H2';
import Sub4 from '../../../typography/subtitle/Sub4';

export default function Newsletter() {
  return (
    <section className="bg-newsletter py-128 bg-bottom-4 flex justify-center bg-cover">
      <div className="flex max-w-[78.6rem] flex-col items-center gap-64 text-center">
        <H2>Get Latest Update By Subscribing To 0ur Newsletter</H2>
        <Button>
          <Sub4>Subscribe</Sub4>
        </Button>
      </div>
    </section>
  );
}

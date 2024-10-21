import Button from '../../../components/button/Button';
import Typography from '../../../components/typography/Typography';

export default function Newsletter() {
  return (
    <section className="flex justify-center bg-newsletter bg-cover bg-bottom-4 py-128">
      <div className="flex max-w-[41vw] flex-col items-center gap-64 text-center">
        <Typography type="h2">
          Get Latest Update By Subscribing To 0ur Newsletter
        </Typography>
        <Button>
          <Typography type="sub4">Subscribe</Typography>
        </Button>
      </div>
    </section>
  );
}

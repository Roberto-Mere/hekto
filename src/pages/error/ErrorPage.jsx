import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Typography from '../../components/typography/Typography';
import sadCart from '../../assets/image/sad-cart.jpeg';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-32 px-sides py-96">
        <img
          src={sadCart}
          alt="Empty sad cart"
          className="w-2/5 min-w-[40rem]"
        />
        <Typography type="h3">An error occured</Typography>
        <Button>
          <Link to="/products">
            <Typography type="sub4">Go back to shopping</Typography>
          </Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}

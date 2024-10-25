import { useSelector } from 'react-redux';
import WishlistCard from './WishlistCard';
import List from '../components/list/List';
import Typography from '../components/typography/Typography';
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const favorites = useSelector((state) => state.fav.favorites);

  return (
    <main className="flex flex-col items-center gap-32 px-sides py-128">
      {favorites.length > 0 ? (
        <List
          list={favorites}
          keyFn={(id) => id}
          classes="grid grid-cols-3 gap-32"
        >
          {(id) => <WishlistCard favId={id} />}
        </List>
      ) : (
        <>
          <Typography type="sub1" classes="text-center mt-24">
            Nothing in wishlist yet
          </Typography>
          <Button>
            <Link to="/products">
              <Typography type="sub4">Go add some!</Typography>
            </Link>
          </Button>
        </>
      )}
    </main>
  );
}

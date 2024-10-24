import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../../../../components/IconButton';
import List from '../../../../components/list/List';
import Typography from '../../../../components/typography/Typography';
import { productsActions } from '../../../../store';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Pagination({ lastPage }) {
  const currentPage = useSelector((state) => state.products.sort.page);
  const dispatch = useDispatch();
  const [_, setSearchParams] = useSearchParams();

  const pages = Array(lastPage)
    .fill(null)
    .map((_, index) => index + 1);

  function goToPage(page) {
    dispatch(productsActions.changePage(page));
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('page', page);

      return prevSearchParams;
    });
  }

  useEffect(() => {
    if (currentPage > lastPage) {
      dispatch(productsActions.changePage(1));
      setSearchParams((prevSearchParams) => {
        prevSearchParams.set('page', 1);

        return prevSearchParams;
      });
    }
  });

  return (
    <>
      {lastPage === 1 ? null : (
        <nav className="col-span-2 mt-16 justify-self-end">
          <List list={pages} keyFn={(page) => page} classes="gap-8">
            {(page) => (
              <IconButton
                onClick={() => goToPage(page)}
                classes={`rounded-lg py-8 px-12 ${currentPage === page ? 'bg-primary-light' : ''}`}
              >
                <Typography
                  type="label"
                  classes={currentPage === page ? 'text-white' : ''}
                >
                  {page}
                </Typography>
              </IconButton>
            )}
          </List>
        </nav>
      )}
    </>
  );
}

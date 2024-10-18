import Blogs from './blogs/Blogs';
import Categories from './categories/Categories';
import Discount from './discount/Discount';
import Featured from './featured/Featured';
import Hero from './hero/Hero';
import Newsletter from './newsletter/Newsletter';
import Trending from './trending/Trending';
import Unique from './unique/Unique';

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Discount />
      <Unique />
      <Trending />
      <Categories />
      <Newsletter />
      <Blogs />
    </main>
  );
}

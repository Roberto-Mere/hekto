import Blogs from './blogs/Blogs';
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
      <Unique />
      <Trending />
      <Newsletter />
      <Blogs />
    </main>
  );
}

import Blogs from './blogs/Blogs';
import Featured from './featured/Featured';
import Hero from './hero/Hero';
import Newsletter from './newsletter/Newsletter';
import Unique from './unique/Unique';

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Unique />
      <Newsletter />
      <Blogs />
    </main>
  );
}

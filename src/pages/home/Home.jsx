import Blogs from './blogs/Blogs';
import Hero from './hero/Hero';
import Newsletter from './newsletter/Newsletter';
import Unique from './unique/Unique';

export default function Home() {
  return (
    <main>
      <Hero />
      <Unique />
      <Newsletter />
      <Blogs />
    </main>
  );
}

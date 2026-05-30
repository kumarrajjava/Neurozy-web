import { Helmet } from '@dr.pogodin/react-helmet';
import HeroSection from '@/components/HeroSection';
import ThinksAheadSection from '@/components/ThinksAheadSection';
import FounderSection from '@/components/FounderSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Neurozy — Next-Gen AI Software Development</title>
        <meta
          name="description"
          content="Neurozy builds intelligent, scalable AI-driven applications. Building a billion-dollar software ecosystem for businesses and entrepreneurs."
        />
      </Helmet>

      <main>
        <HeroSection />
        <ThinksAheadSection />
        <FounderSection />
      </main>
    </>
  );
}

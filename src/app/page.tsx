import ComingSoonModal from '@/components/ComingSoonModal';
import Features from '@/components/Feature/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import Title from '@/components/Title';
import Vision from '@/components/Vision';

export default function Home() {
  return (
    <main>
      <Header />
      <Title />
      <Features />
      <Vision />
      <Footer />
      <ComingSoonModal />
    </main>
  );
}

import Image from 'next/image';
import Header from '@/components/Header';
import Title from '@/components/Title';
import Vision from '@/components/Vision';
import ComingSoonModal from '@/components/ComingSoonModal';
import Features from '@/components/Feature/Features';

export default function Home() {
  return (
    <main>
      <Header />
      <Title />
      <Features />
      <Vision />
      <ComingSoonModal />
    </main>
  );
}

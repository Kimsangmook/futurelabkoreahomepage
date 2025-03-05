import Image from 'next/image';
import Header from '@/components/Header';
import Title from '@/components/Title';
import Vision from '@/components/Vision';
import Business from '@/components/Business';
import DistributionStructure from '@/components/DistributionStructure';
import ComingSoonModal from '@/components/ComingSoonModal';

export default function Home() {
  return (
    <main>
      <Header />

      <Title />

      <Vision />

      <Business />

      <DistributionStructure />
      <ComingSoonModal />
    </main>
  );
}

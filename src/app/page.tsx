import ComingSoonModal from '@/components/ComingSoonModal';
import Features from '@/components/Feature/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import Title from '@/components/Title';
import Vision from '@/components/Vision';
import UrbanFarm from '@/components/UrbanFarm';
import VerticalFarm from '@/components/VerticalFarm';
import HorizonTitle from '@/components/HorizonTitle';
import CardSection from '@/components/Card/CardSection';

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <Title />
      {/* <Features /> */}
      {/* <Vision /> */}
      {/* <CardSection />
      <UrbanFarm />
      <HorizonTitle />
      <VerticalFarm /> */}
      <Footer />
      <ComingSoonModal />
    </main>
  );
}

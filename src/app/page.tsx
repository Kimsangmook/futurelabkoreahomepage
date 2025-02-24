import Image from "next/image";
import Header from "@/components/Header";
import CommitmentsSection from "@/components/CommitmentsSection";

export default function Home() {
  return (
    <main>
      <Header/>
      <section>
        <CommitmentsSection/>
      </section>
    </main>
  );
}

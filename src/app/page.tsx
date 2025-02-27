import Image from "next/image";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Vision from "@/components/Vision";


export default function Home() {
  return (
    <main>
      <Header/>
      <section>
        <Title/>
      </section>
      <section>
        <Vision/>
      </section>
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyJoin from "@/components/WhyJoin";
import Stats from "@/components/Stats";
import EventInfo from "@/components/EventInfo";
import Features from "@/components/Features";
import Program from "@/components/Program";
import Speakers from "@/components/Speakers";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyJoin />
      <Stats />
      <EventInfo />
      <Features />
      <Program />
      <Speakers />
      <Contact />
      {/* 추가 섹션들은 여기에 구현될 예정입니다 */}
    </main>
  );
}

import Image from "next/image";
import EntryExit from "@/components/EntryExit";

import Apply from "@/components/Apply/Apply";
import Slider from "@/components/Slider";
import Faculty from "@/components/Faculty/Faculty";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Apply/>
      <EntryExit/>
      <Slider/>
      <Faculty/>
      <Footer/>
    </div>
  );
}

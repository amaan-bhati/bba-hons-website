import Image from "next/image";
import EntryExit from "@/components/EntryExit";

import Apply from "@/components/Apply/Apply";
import Slider from "@/components/Slider";
import Faculty from "@/components/Faculty/Faculty";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Apply/>
      <EntryExit/>
      <Slider/>
      <Faculty/>
      <Footer/>

    </div>
  );
}

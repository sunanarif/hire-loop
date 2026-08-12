import Banner from "@/components/Banner";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <Banner></Banner>
      <StatsSection></StatsSection>
    </div>
  );
}

import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Image from "next/image";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <AboutPage></AboutPage>
    </div>
  );
}

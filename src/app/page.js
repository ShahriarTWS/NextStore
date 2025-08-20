import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
}

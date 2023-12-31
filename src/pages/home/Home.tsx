import Footer from "@/layouts/common/footer/Footer";
import HeroSection from "@/layouts/common/hero/HeroSection";
import Nav from "@/layouts/common/nav/Nav";
import Features from "@layouts/home-layouts/Features";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Features />
      <Footer />
    </>
  );
}

import AboutSection from "./components/About/aboutSection";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Navbar from "./components/Navbar/navbar";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] '>
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}

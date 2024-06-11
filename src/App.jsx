import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Testimonial from "./components/Testimonial";
import Logos from "./components/Logos";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Industries />
      <Testimonial />
      <Services />
      <Logos />
      <AboutUs />
      <FAQ />
      <Footer />
    </>
  );
}

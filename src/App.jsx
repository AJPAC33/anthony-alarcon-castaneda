import { Hero } from "./components/Hero";
import { Navbar } from "./components/NavBar";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

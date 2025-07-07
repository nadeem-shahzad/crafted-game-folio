
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

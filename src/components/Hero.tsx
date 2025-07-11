
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Facebook, Instagram } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";

const UpworkIcon = () => (
    <svg fill="currentColor" stroke="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <g>
        <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"></path>
      </g>
    </svg>
)

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a');
    link.href = '/cv-nadeem-shahzad.pdf'; // You can replace this with actual CV file path
    link.download = 'Nadeem Shahzad.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGithub = () => window.open("https://github.com/nadeem-shahzad", "_blank");
  const openLinkedin = () => window.open("https://linkedin.com/in/nadeem-shahzad", "_blank");
  const openUpwork = () => window.open("https://www.upwork.com/freelancers/~nadeem-shahzad", "_blank");
  const openFacebook = () => window.open("https://facebook.com/nadeem.shahzad", "_blank");
  const openInstagram = () => window.open("https://instagram.com/nadeem.shahzad", "_blank");

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-background dark:from-orange-950/20 dark:to-background px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              👋 Hello There!
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              I'm Nadeem Shahzad
              <span className="block text-orange-500">Game Developer & Designer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating immersive gaming experiences with cutting-edge technology. 
              Specializing in Unity, and mobile game development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
                onClick={downloadCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="outline" size="icon" className="rounded-full" onClick={openGithub}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={openLinkedin}>
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={openUpwork}>
                <UpworkIcon />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={openFacebook}>
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={openInstagram}>
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <img
                  src="/lovable-uploads/nadeem.png"
                  alt="Nadeem Shahzad - Game Developer"
                  className="w-72 h-72 lg:w-88 lg:h-88 rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                🎮
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollIndicator />
    </>
  );
};

export default Hero;


import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";

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
    link.href = '/cv-alex-chen.pdf'; // You can replace this with actual CV file path
    link.download = 'Alex-Chen-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-background dark:from-orange-950/20 dark:to-background px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              👋 Hello There!
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              I'm Alex Chen
              <span className="block text-orange-500">Game Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating immersive gaming experiences with cutting-edge technology. 
              Specializing in Unity, Unreal Engine, and mobile game development.
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
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <img
                  src="/lovable-uploads/3bb88b1f-9741-4b99-a9b5-a2153030eae8.png"
                  alt="Alex Chen - Game Developer"
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

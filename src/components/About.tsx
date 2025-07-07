
const About = () => {
  const companies = [
    "Epic Games", "Unity Technologies", "Riot Games", "Blizzard", "Ubisoft", "EA Sports"
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ✨ About Me
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              I am a passionate game designer
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
             And developer with over 5 years of professional experience. I bring a diverse skillset to the table, having developed games across various genres including FPS, TPS, RPG, AR/VR, Simulation, EdTech, Casual, Single-player, Multiplayer, and Multi-Platform (PC, Consoles, Mobile, Web). I am also well-versed in profiling Mobile and PC games to ensure optimal performance.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I believe great games are born from the perfect blend of technical excellence, creative vision, and player-centered design.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-muted-foreground"><strong>Name:</strong> Nadeem Shahzad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">5M+</div>
                <div className="text-muted-foreground"><strong>Date of birth:</strong> December 18, 1997</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-muted-foreground"><strong>Address:</strong> Architect Society, Johar Town Lahore</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-muted-foreground"><strong>Email:</strong> nadeem.shahzad.10236@gmail.com</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-muted-foreground"><strong>Phone:</strong> +92-340-7631749</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="mb-6">Let's create something amazing together!</p>
              <button 
                onClick={scrollToContact}
                className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="bg-muted p-6 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-4">Trusted by Industry Leaders</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                {companies.map((company, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const skills = [
    {
      name: "Unity",
      level: 90,
      description: "Expertise in Unity engine for 3D and 2D game development, including C# scripting and asset integration."
    },
    {
      name: "Game Design and Development",
      level: 85,
      description: "Proficient with Unreal Engine, Blueprints, and C++ for high-fidelity game experiences."
    },
    {
      name: "C#",
      level: 95,
      description: "Strong command of C# for game logic, tools development, and gameplay programming."
    },
    {
      name: "C++",
      level: 70,
      description: "Experience with C++ for performance-critical game systems and Unreal Engine development."
    },
    {
      name: "Mobile Game Development",
      level: 85,
      description: "Skilled in optimizing games for iOS and Android platforms with responsive controls and UI."
    },
    {
      name: "Photoshop",
      level: 70,
      description: "Mastering Photoshop means turning imagination into pixel-perfect reality."
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 px-4 bg-muted/30 dark:bg-muted/20"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🛠️ Skills
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">My Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A blend of technical skills and creative problem-solving to build engaging and polished games.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-card p-6 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
              }}
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{skill.name}</h3>
              <div className="w-full bg-muted rounded-full h-4 mb-4 overflow-hidden">
                <div
                  className={`bg-orange-500 h-4 rounded-full transition-all duration-1000 ${
                    isVisible ? '' : 'w-0'
                  }`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: isVisible ? `${index * 100 + 300}ms` : '0ms'
                  }}
                />
              </div>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

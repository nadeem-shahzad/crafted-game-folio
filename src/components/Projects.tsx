import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Mystic Realm",
      category: "RPG Adventure",
      image: "photo-1461749280684-dccba630e2f6",
      description: "An immersive fantasy RPG with stunning visuals and engaging storyline",
      tags: ["Unity", "C#", "Mobile"],
      detailedDescription: "Mystic Realm is an epic fantasy RPG that takes players on a journey through magical worlds filled with ancient mysteries, powerful artifacts, and legendary creatures.",
      features: [
        "Open-world exploration with 50+ unique locations",
        "Character customization with 100+ items",
        "Epic boss battles and dungeon raids",
        "Multiplayer guild system",
        "Real-time combat mechanics"
      ]
    },
    {
      title: "Cyber Racing 2030",
      category: "Racing Game",
      image: "photo-1486312338219-ce68d2c6f44d",
      description: "Futuristic racing game with advanced AI and multiplayer support",
      tags: ["Unreal Engine", "C++", "PC"],
      detailedDescription: "Experience the thrill of high-speed racing in a cyberpunk future with anti-gravity vehicles and neon-lit cityscapes.",
      features: [
        "15 futuristic racing tracks",
        "Advanced AI opponents",
        "Online multiplayer tournaments",
        "Vehicle customization system",
        "Dynamic weather effects"
      ]
    },
    {
      title: "Puzzle Master",
      category: "Casual Game",
      image: "photo-1518770660439-4636190af475",
      description: "Brain-teasing puzzle game with over 500 unique levels",
      tags: ["Unity", "Mobile", "iOS"],
      detailedDescription: "Challenge your mind with increasingly complex puzzles that test logic, pattern recognition, and spatial reasoning.",
      features: [
        "500+ handcrafted puzzle levels",
        "Daily challenges and rewards",
        "Social features and leaderboards",
        "Hint system for difficult puzzles",
        "Offline play support"
      ]
    },
    {
      title: "Puzzle Master",
      category: "Casual Game",
      image: "photo-1518770660439-4636190af475",
      description: "Brain-teasing puzzle game with over 500 unique levels",
      tags: ["Unity", "Mobile", "iOS"],
      detailedDescription: "Challenge your mind with increasingly complex puzzles that test logic, pattern recognition, and spatial reasoning.",
      features: [
        "500+ handcrafted puzzle levels",
        "Daily challenges and rewards",
        "Social features and leaderboards",
        "Hint system for difficult puzzles",
        "Offline play support"
      ]
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="projects" className="py-20 px-4 bg-muted/30 dark:bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🎮 My Work
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Recent Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my latest game development projects that showcase my skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => openProjectModal(project)}
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-orange-500 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </>
  );
};

export default Projects;

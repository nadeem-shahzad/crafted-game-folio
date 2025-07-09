
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isAllProjectsModalOpen, setIsAllProjectsModalOpen] = useState(false);

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
      title: "Space Explorer",
      category: "Adventure Game",
      image: "photo-1485827404703-89b55fcc595e",
      description: "Explore the cosmos in this immersive space adventure",
      tags: ["Unity", "VR", "C#"],
      detailedDescription: "Journey through the galaxy, discover new planets, and encounter alien civilizations in this epic space exploration game.",
      features: [
        "Virtual reality support",
        "Procedurally generated planets",
        "Alien species interactions",
        "Spacecraft customization",
        "Multiplayer exploration"
      ]
    },
    {
      title: "Kingdom Defense",
      category: "Strategy Game",
      image: "photo-1526374965328-7f61d4dc18c5",
      description: "Tower defense game with medieval fantasy theme",
      tags: ["Unity", "Mobile", "Android"],
      detailedDescription: "Defend your kingdom against waves of enemies using strategic tower placement and magical abilities.",
      features: [
        "40+ unique tower types",
        "Epic boss battles",
        "Upgrade system",
        "Multiple difficulty modes",
        "Achievement system"
      ]
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsProjectModalOpen(false);
  };

  const openAllProjectsModal = () => {
    setIsAllProjectsModalOpen(true);
  };

  const closeAllProjectsModal = () => {
    setIsAllProjectsModalOpen(false);
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

          {/* Horizontal Scrolling Cards */}
          <div className="relative">
            <ScrollArea className="w-full">
              <div className="flex gap-6 pb-4 px-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-none w-80 bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border"
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
                      <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button 
              onClick={openAllProjectsModal}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      
      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
      />

      {/* All Projects Modal */}
      <Dialog open={isAllProjectsModalOpen} onOpenChange={setIsAllProjectsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">All Projects</DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="h-[70vh] pr-4">
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <img
                    src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80`}
                    alt={project.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-card-foreground">{project.title}</h3>
                      <span className="text-sm text-orange-500 font-medium">{project.category}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="flex justify-center pt-4">
            <Button 
              onClick={closeAllProjectsModal}
              variant="outline"
              className="px-6 py-2"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;

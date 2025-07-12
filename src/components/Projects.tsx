
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
      title: "Galactic Acres Idle Clicker - Web3",
      category: "Idle Clicker",
      image: "/lovable-uploads/galactic-acres.png", 
        projectIcon: "/lovable-uploads/galactic-acres-icon.png",
      description: "A Web3 idle simulation game set in space where players manage a sanctuary of alien species.",
      tags: ["Web3", "Simulation", "Idle", "Strategy", "Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
      detailedDescription: "Galactic Acres is a Web3 idle simulation game where players build and manage a sanctuary for alien species, exploring the cosmos and collecting resources.",
      features: [
            "Web3 integration with blockchain assets",
            "Idle gameplay mechanics for casual players",
            "Resource management and strategy elements",
            "Unique alien species with special abilities",
            "Cross-platform play"
        ],
        links: {
                demo: "https://play.google.com/store/apps/details?id=com.goodgaming.galactic",
                github: null
      }
},
    {
  "title": "Matty the Water Molecule",
  "category": "Educational Game",
  "image": "/lovable-uploads/matty.png",
      projectIcon: "/lovable-uploads/matty-icon.png",
  "description": "Educational game teaching children about water molecules through engaging gameplay.",
  "tags": ["Education", "Kids", "Science","Unity","C#"],
  "links": {
    "demo": "https://www.engagingeverystudent.com/matty/",
    "github": null
  }
},
    {
  "title": "AR-Ways",
  "category": "AR App",
  "image": "/lovable-uploads/arway.png",
      projectIcon: "/lovable-uploads/arway-icon.png",
  "description": "Augmented reality app allowing users to place digital content in real-world locations.",
  "tags": ["Augmented Reality", "AR", "Maps", "Navigation","Unity","C#"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nextechar.armaps",
    "github": null
  }
},
    {
  "title": "Hide N Seek - Hunt Challenge",
  "category": "Arcade Puzzle",
  "image": "/lovable-uploads/hidenseek.png",
      projectIcon: "/lovable-uploads/hidenseek-icon.png",
  "description": "Classic hide and seek gameplay reimagined with object transformation and monster hunters.",
  "tags": ["Puzzle", "Action", "Unity", "C#", "Firebase", "Google Play", "Game Analytics", "Monetization"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.hide.and.seek.game",
    "github": null
  }
},{
  "title": "DIY Fidget Toy Maker",
  "category": "Casual Simulation",
  "image": "/lovable-uploads/toymaker.png",
      projectIcon: "/lovable-uploads/toymaker-icon.png",
  "description": "Craft your own fidget toys in 3D for a relaxing and creative experience.",
  "tags": ["DIY", "Simulation", "ASMR", "Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.dobroapps.popit.maker",
    "github": null
  }
},
    {
  "title": "Pop It 3D DIY ASMR",
  "category": "Casual Simulation",
  "image": "/lovable-uploads/popit.png",
      projectIcon: "/lovable-uploads/popit-icon.png",
  "description": "Pop fidget toys in 3D with satisfying ASMR sounds for stress relief and casual play.",
  "tags": ["ASMR", "Relaxation", "Casual", "Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.pop.it.asmr.relaxing.games",
    "github": null
  }
},
{
  "title": "Hacker Simulator 3D",
  "category": "Simulation",
  "image": "/lovable-uploads/hacker.png",
  projectIcon: "/lovable-uploads/hacker-icon.png",
  "description": "Become a virtual hacker in this simulator, mastering stealth and digital tactics.",
  "tags": ["Simulation", "Hacking", "Strategy","Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.hacker.simulator.game",
    "github": null
  }
},
{
  "title": "PC Simulator 3D",
  "category": "Simulation",
  "image": "/lovable-uploads/pcsim.png",
  projectIcon: "/lovable-uploads/pcsim-icon.png",
  "description": "Learn PC building with realistic components, software installation, and troubleshooting.",
  "tags": ["Simulation", "Education", "Tech","Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nexttechgamesstudios.pc.simulator.game",
    "github": null
  }
},
{
  "title": "House Flipper 3D - Home Design",
  "category": "Simulation",
  "image": "/lovable-uploads/houseflipper.png",
  projectIcon: "/lovable-uploads/houseflipper-icon.png",
  "description": "Renovate, restore, and decorate homes in this simulation and puzzle-based house flipper game.",
  "tags": ["Simulation", "Puzzle", "Design","Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.house.flip.real.estate.game",
    "github": null
  }
}, {
  "title": "Sneaker Paint 3D",
  "category": "Casual Simulation",
  "image": "/lovable-uploads/sneakerart.png",
  projectIcon: "/lovable-uploads/sneakerart-icon.png",
  "description": "Unleash your creativity by painting and customizing sneakers in this art simulation game.",
  "tags": ["Art", "Simulation", "Customization","Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nexttechgamesstudios.sneaker.paint.game",
    "github": null
  }
},
{
  "title": "Fill The Closet",
  "category": "Casual Puzzle - Sort",
  "image": "/lovable-uploads/fillthecloset.png",
  projectIcon: "/lovable-uploads/fillthecloset-icon.png",
  "description": "Sort clothes by size, type, and color in this ASMR-inspired closet organizing game.",
  "tags": ["ASMR", "Sorting", "Relaxation","Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargames.fill.the.closet.organizer3d",
    "github": null
  }
},
  ];

  const openProjectModal = (project) => {
    console.log('Opening project modal for:', project.title);
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    console.log('Closing project modal');
    setSelectedProject(null);
    setIsProjectModalOpen(false);
  };

  const openAllProjectsModal = () => {
    setIsAllProjectsModalOpen(true);
  };

  const closeAllProjectsModal = () => {
    setIsAllProjectsModalOpen(false);
  };

  const handleViewDetails = (project) => {
    setIsAllProjectsModalOpen(false);
    openProjectModal(project);
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
            <div className="overflow-x-auto">
              <div className="flex gap-6 pb-4 px-4 min-w-max">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-none w-80 bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border cursor-pointer"
                    onClick={() => {
                      console.log('Card clicked for:', project.title);
                      openProjectModal(project);
                    }}
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.projectIcon}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          console.log('Image failed to load:', project.projectIcon);
                          console.log('Project:', project.title);
                        }}
                        onLoad={() => {
                          console.log('Image loaded successfully:', project.projectIcon);
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log('View Details clicked for:', project.title);
                            openProjectModal(project);
                          }}
                          className="bg-white text-gray-900 px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold transform scale-95 group-hover:scale-100 shadow-lg"
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
            </div>
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">All Projects</DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="h-[70vh] pr-4">
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.projectIcon}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-card-foreground">{project.title}</h3>
                      <span className="text-sm text-orange-500 font-medium">{project.category}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button 
                      onClick={() => {
                        console.log('View Details from modal clicked for:', project.title);
                        handleViewDetails(project);
                      }}
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="flex justify-center pt-4 border-t">
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

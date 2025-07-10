
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
      category: "Game",
      image: "/Portfolio/Galactic-Acres.png",
      description: "A Web3 idle simulation game set in space where players manage a sanctuary of alien species.",
      tags: ["Web3", "Simulation", "Idle", "Strategy"],
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
  "image": "https://www.engagingeverystudent.com/wp-content/uploads/2023/05/logo.png",
  "description": "Educational game teaching children about water molecules through engaging gameplay.",
  "tags": ["Education", "Kids", "Science"],
  "links": {
    "demo": "https://www.engagingeverystudent.com/matty/",
    "github": null
  }
},
    {
  "title": "AR-Ways",
  "category": "AR App",
  "image": "https://play-lh.googleusercontent.com/4k4E_h7Yg_lAeQj6RU3gAxuAVDHtgVQlEJUp63s9_M2HlALuVaUwZCHn5zIloYXHPA=w240-h480-rw",
  "description": "Augmented reality app allowing users to place digital content in real-world locations.",
  "tags": ["Augmented Reality", "AR", "Maps", "Navigation"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nextechar.armaps",
    "github": null
  }
},
    {
  "title": "Hide N Seek - Hunt Challenge",
  "category": "Game",
  "image": "https://play-lh.googleusercontent.com/PJTYwE7xZy-TFjcOY1EpMy2rxo0NbaWlDp3j6eFGvqAVrI5S8zHtx6tKJQwfy9oUZA=w240-h480-rw",
  "description": "Classic hide and seek gameplay reimagined with object transformation and monster hunters.",
  "tags": ["Puzzle", "Action", "Multiplayer"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.hide.and.seek.game",
    "github": null
  }
},{
  "title": "DIY Fidget Toy Maker",
  "category": "Game",
  "image": "https://play-lh.googleusercontent.com/qmJY0FSLovEBk7sNf7ELV2dVm71WMPkqZTxjETa28V6hxh5xzML33RCZB_lUVLZB35Y=w240-h480-rw",
  "description": "Craft your own fidget toys in 3D for a relaxing and creative experience.",
  "tags": ["DIY", "Simulation", "ASMR"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nexttechgamesstudios.pop.it.fidget.craft.asmr.toys.maker",
    "github": null
  }
},
    {
  "title": "Pop It 3D DIY ASMR",
  "category": "Game",
  "image": "https://play-lh.googleusercontent.com/OIW2E7BDnZzFpoAjIpXPEf1xkWqLiwvGzNlXcM4O7_Fbf9AfUXYdiI3eD9nmsFbqz00=w240-h480-rw",
  "description": "Pop fidget toys in 3D with satisfying ASMR sounds for stress relief and casual play.",
  "tags": ["ASMR", "Relaxation", "Casual"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nexttechgamesstudios.pop.it.asmr.relaxing.games",
    "github": null
  }
},
{
  "title": "Hacker Simulator 3D",
  "category": "Game",
  "image": "https://play-lh.googleusercontent.com/qmLNzK8v0rjwwJaeRAf8NPh8aKZ0K8DzFJk7MvDWDFKjUoy4r6OVau37-EeqOQ_U9g=w240-h480-rw",
  "description": "Become a virtual hacker in this simulator, mastering stealth and digital tactics.",
  "tags": ["Simulation", "Hacking", "Strategy"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.hacker.simulator.game",
    "github": null
  }
},
{
  "title": "PC Simulator 3D",
  "category": "Game",
  "image": "https://play-lh.googleusercontent.com/Y3LQjUpJr_PF_oJYSLzS7bZ9ylxvJmJTZTiqvZMuIMwmiXmCy7fTxceM_W-wqZ4O6os=w240-h480-rw",
  "description": "Learn PC building with realistic components, software installation, and troubleshooting.",
  "tags": ["Simulation", "Education", "Tech"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nexttechgamesstudios.pc.simulator.game",
    "github": null
  }
},
{
  "title": "House Flipper 3D - Home Design",
  "category": "Game",
  "image": "https://play-lh.googleusercontent.com/NXZuBaImiGa9hMzyaC9R7ZIv8u4X5ApN4tA_d03tZP1IUZpTk7vFtbrItV5q9ej06PI=w240-h480-rw",
  "description": "Renovate, restore, and decorate homes in this simulation and puzzle-based house flipper game.",
  "tags": ["Simulation", "Puzzle", "Design"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.house.flip.real.estate.game",
    "github": null
  }
},
{
  "title": "Clear the Parking Lot",
  "category": "Puzzle Game",
  "image": "https://play-lh.googleusercontent.com/rjU5CKfG2sspcgn7_3Mg0xMfbZlYO5St5IOOWvHZOnHduDRAnm2Z9PipDx1GctSi1Q=w240-h480-rw",
  "description": "Use strategy to navigate your car out of a traffic jam without collisions.",
  "tags": ["Puzzle", "Strategy", "Casual"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.cemhaspolat.clearthelot",
    "github": null
  }
},
{
  "title": "Sneaker Paint 3D",
  "category": "Game",
  "image": "https://play-lh.googleusercontent.com/fOYUPn0gAixPD7x2aRvKAYBM2rB_QztI59WCDhUuXMrzWm4IlhNV1F8gxMyK6GjJHg=w240-h480-rw",
  "description": "Unleash your creativity by painting and customizing sneakers in this art simulation game.",
  "tags": ["Art", "Simulation", "Customization"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nexttechgamesstudios.sneaker.paint.game",
    "github": null
  }
},
{
  "title": "Fill The Closet",
  "category": "Game",
  "image": "https://play-lh.googleusercontent.com/Y7T4pMfbn9XkzNuN5C1qBUPUtBZnJ1NFOU-ME3VZGKy2J4KfMdQWE-C3Srx4UNsDAzo=w240-h480-rw",
  "description": "Sort clothes by size, type, and color in this ASMR-inspired closet organizing game.",
  "tags": ["ASMR", "Sorting", "Relaxation"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nexttechgamesstudios.fill.the.closet.simulator.game",
    "github": null
  }
},
{
  "title": "Glitter Color Adult Paint Book",
  "category": "Game",
  "image": "https://play-lh.googleusercontent.com/q63rOSIKSTpFtP3NK6EGCj3HDq-dKBIY29lDZleNFM8JEP1kRY-Uk2jGeYgbbXMQ-g=w240-h480-rw",
  "description": "Color by number with glitter in this relaxing adult coloring book game.",
  "tags": ["Coloring", "Relaxation", "ASMR"],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nexttechgamesstudio.adult.glitter.color.by.number.paint.coloring.book.pages",
    "github": null
  }
},
    

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
                    className="flex-none w-80 bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          console.log('Image failed to load:', project.image);
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
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
                      onClick={() => handleViewDetails(project)}
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

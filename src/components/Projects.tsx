
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useProjects } from '@/hooks/useProjects';
import { Tables } from '@/integrations/supabase/types';

type Project = Tables<'projects'>;

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { projects, loading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isAllProjectsModalOpen, setIsAllProjectsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
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

  const handleViewDetails = (project: Project) => {
    setIsAllProjectsModalOpen(false);
    openProjectModal(project);
  };

  if (loading) {
    return (
      <section className="py-20 px-4 bg-muted/30 dark:bg-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-lg">Loading projects...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 bg-muted/30 dark:bg-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-lg text-red-500">Error loading projects: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section 
        id="projects" 
        className="py-20 px-4 bg-muted/30 dark:bg-muted/20"
        ref={ref}
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
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
                    key={project.id}
                    className={`flex-none w-80 bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-105 group border cursor-pointer ${
                      isVisible 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
                    }}
                    onClick={() => {
                      console.log('Card clicked for:', project.title);
                      openProjectModal(project);
                    }}
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.project_icon_url || '/placeholder.svg'}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          console.log('Image failed to load:', project.project_icon_url);
                          console.log('Project:', project.title);
                        }}
                        onLoad={() => {
                          console.log('Image loaded successfully:', project.project_icon_url);
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log('View Details clicked for:', project.title);
                            openProjectModal(project);
                          }}
                          className="bg-white text-gray-900 px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold transform scale-90 group-hover:scale-100 shadow-lg"
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
                        {project.tags?.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        )) || []}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* View All Projects Button */}
          <div className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            <Button 
              onClick={openAllProjectsModal}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300"
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
                <div 
                  key={project.id} 
                  className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  onClick={() => handleViewDetails(project)}
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.project_icon_url || '/placeholder.svg'}
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
                      {project.tags?.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      )) || []}
                    </div>
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('View Details from modal clicked for:', project.title);
                        handleViewDetails(project);
                      }}
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-all duration-200"
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
              className="px-6 py-2 hover:scale-105 transition-all duration-200"
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


import React from 'react';
import { X } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  detailedDescription?: string;
  features?: string[];
  techStack?: string[];
  links?: {
    demo?: string;
    github?: string;
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80`}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-8">
          <div className="text-sm text-orange-500 font-medium mb-2">{project.category}</div>
          <h2 className="text-3xl font-bold text-card-foreground mb-4">{project.title}</h2>
          <p className="text-muted-foreground mb-6 text-lg">{project.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Project Details</h3>
              <p className="text-muted-foreground mb-6">
                {project.detailedDescription || "This game showcases advanced development techniques and engaging gameplay mechanics that provide hours of entertainment for players worldwide."}
              </p>
              
              <h4 className="font-semibold text-card-foreground mb-3">Key Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                {(project.features || [
                  "Cross-platform compatibility",
                  "Engaging storyline and characters",
                  "Advanced graphics and animations",
                  "Multiplayer functionality",
                  "Regular content updates"
                ]).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-card-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {(project.techStack || project.tags).map((tech, index) => (
                  <span
                    key={index}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Play Demo
                </button>
                <button className="w-full border border-muted-foreground text-muted-foreground hover:bg-muted py-3 px-6 rounded-lg font-semibold transition-colors">
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

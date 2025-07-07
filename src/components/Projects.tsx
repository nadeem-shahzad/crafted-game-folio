
const Projects = () => {
  const projects = [
    {
      title: "Mystic Realm",
      category: "RPG Adventure",
      image: "photo-1461749280684-dccba630e2f6",
      description: "An immersive fantasy RPG with stunning visuals and engaging storyline",
      tags: ["Unity", "C#", "Mobile"]
    },
    {
      title: "Cyber Racing 2030",
      category: "Racing Game",
      image: "photo-1486312338219-ce68d2c6f44d",
      description: "Futuristic racing game with advanced AI and multiplayer support",
      tags: ["Unreal Engine", "C++", "PC"]
    },
    {
      title: "Puzzle Master",
      category: "Casual Game",
      image: "photo-1518770660439-4636190af475",
      description: "Brain-teasing puzzle game with over 500 unique levels",
      tags: ["Unity", "Mobile", "iOS"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎮 My Work
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my latest game development projects that showcase my skills and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-orange-500 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
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
  );
};

export default Projects;

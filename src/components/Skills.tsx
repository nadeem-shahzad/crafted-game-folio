
const Skills = () => {
  const skills = [
    { name: "Unity", icon: "🎯", level: 95 },
    { name: "Unreal Engine", icon: "🚀", level: 90 },
    { name: "C#", icon: "💻", level: 92 },
    { name: "C++", icon: "⚡", level: 88 },
    { name: "Mobile Dev", icon: "📱", level: 85 },
    { name: "3D Modeling", icon: "🎨", level: 80 }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I specialize in creating engaging games across multiple platforms using industry-leading tools and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

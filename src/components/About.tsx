interface Skill {
    name: string;
  }
  
  export default function About() {
    const skills: Skill[] = [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
      { name: 'Docker' },
    ];
  
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate developer with expertise in React, TypeScript, and modern web technologies. 
                I love building scalable applications and solving complex problems.
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
interface Project {
    title: string;
    description: string;
    href: string;
  }
  
  export default function Projects() {
    const projects: Project[] = [
      {
        title: 'Project 1',
        description: 'A full-stack e-commerce application built with React and Node.js.',
        href: '#',
      },
      {
        title: 'Project 2',
        description: 'A real-time chat application using Socket.io.',
        href: '#',
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            My Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.href}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    View Project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
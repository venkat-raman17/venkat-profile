export default function Hero() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Hi! I'm Venkat.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm a Full Stack Developer passionate about building great user experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View My Work
            </button>
            <a
            href="/resume.pdf"
            download
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
            >
            Download CV
            </a>
          </div>
        </div>
      </section>
    );
  }
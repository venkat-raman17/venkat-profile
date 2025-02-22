import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold mb-2 sm:mb-0">
          © 2025
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/venkat-raman17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/venkat-raman-k-s-33b4b730b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
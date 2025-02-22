interface NavLink {
    label: string;
    href: string;
  }
  
  export default function Header() {
    const navLinks: NavLink[] = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ];
  
    return (
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-gray-800">Venkat Raman K S</span>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
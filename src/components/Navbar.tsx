
import { useState, useEffect } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Github, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToDemo = () => {
    navigate('/demo');
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-3 bg-white/80 backdrop-blur-lg border-b border-black/5" : "py-5"
      )}
    >
      <nav className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-display font-bold">
            AE
          </div>
          <span className="text-xl font-display font-semibold tracking-tight">AnswerEval</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "navbar-item",
                  isActive(link.path) && "text-foreground after:w-full"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors p-2"
            >
              <Github size={20} />
            </Link>
            <Link 
              to="/documentation" 
              className="text-foreground/70 hover:text-foreground transition-colors p-2"
            >
              <BookOpen size={20} />
            </Link>
            <Button 
              size="sm" 
              className="button-focus-effect"
              onClick={goToDemo}
            >
              Try Demo
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 p-4 bg-white shadow-lg md:hidden animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "py-2 px-4 rounded-md transition-colors",
                    isActive(link.path) 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-foreground/80 hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t">
                <Link 
                  to="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-muted text-foreground/80"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </Link>
                <Link 
                  to="/documentation" 
                  className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-muted text-foreground/80"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen size={18} />
                  <span>Docs</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

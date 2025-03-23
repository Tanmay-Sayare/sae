
import { Link } from 'react-router-dom';
import { Github, Mail, BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-black/5 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-display font-bold">
                AE
              </div>
              <span className="text-xl font-display font-semibold tracking-tight">AnswerEval</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              An intelligent system designed to evaluate subjective answers accurately using advanced NLP techniques.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link 
                to="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link 
                to="/documentation" 
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <BookOpen size={20} />
              </Link>
              <Link 
                to="mailto:contact@answereval.com" 
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-medium text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-medium text-sm">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Have questions or feedback? Reach out to our team.
            </p>
            <Link 
              to="mailto:tanmaysayare12345@gmail.com"
              className="inline-block text-sm text-primary hover:underline"
            >
              tanmaysayare12345@gmail.com
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/5 text-center text-xs text-muted-foreground">
          <p>© {currentYear} AnswerEval. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

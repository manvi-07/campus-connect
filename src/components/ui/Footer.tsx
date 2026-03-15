import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <Zap className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="font-semibold">CampusConnect</span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 CampusConnect. Built for students, by students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
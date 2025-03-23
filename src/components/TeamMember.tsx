
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  links?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  className?: string;
}

const TeamMember = ({ name, role, image, bio, links, className }: TeamMemberProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-display font-medium">{name}</h3>
        <p className="text-primary text-sm mb-3">{role}</p>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{bio}</p>
        
        {links && (
          <div className="flex space-x-3">
            {links.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label={`${name}'s GitHub profile`}
              >
                <Github size={18} />
              </a>
            )}
            {links.linkedin && (
              <a 
                href={links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin size={18} />
              </a>
            )}
            {links.email && (
              <a 
                href={`mailto:${links.email}`} 
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;

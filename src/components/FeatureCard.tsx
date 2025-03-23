
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group relative p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-scale-up",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-lg font-display font-medium mb-2">{title}</h3>
        
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

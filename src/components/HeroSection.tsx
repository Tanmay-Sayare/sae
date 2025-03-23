
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0"></div>
      <div className="absolute top-40 -right-60 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary bg-primary/10 rounded-full">
            Revolutionizing Subjective Answer Evaluation
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
            <span className="block">Intelligent Evaluation for</span>
            <span className="relative">
              Subjective Answers
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-10 transform skew-x-3"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our advanced NLP system provides accurate and consistent evaluation of subjective question answer responses, 
            helping educators save time while delivering fair assessments. And end user can practise their answer skills on our platform. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="button-focus-effect"
              asChild
            >
              <Link to="/demo">
                Try the Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="button-focus-effect"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

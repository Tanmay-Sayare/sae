
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, BarChart, LineChart, Zap, Clock, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Cpu size={24} />,
      title: 'AI-Powered Analysis',
      description: 'Advanced natural language processing algorithms that understand context and semantics.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Objective Scoring',
      description: 'Consistent and fair evaluation metrics that remove human bias from assessment.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Instant Feedback',
      description: 'Provide immediate, detailed feedback to students, enhancing the learning process.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Time Efficiency',
      description: 'Reduce grading time by up to 90%, allowing educators to focus on teaching.',
    },
    {
      icon: <LineChart size={24} />,
      title: 'Performance Tracking',
      description: 'Monitor student progress and identify knowledge gaps with detailed analytics.',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Easy Integration',
      description: 'Seamlessly integrates with existing learning management systems and workflows.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                Intelligent Features for Smarter Evaluation
              </h2>
              <p className="text-lg text-muted-foreground">
                Our system combines cutting-edge NLP with pedagogical insights to deliver 
                accurate, consistent, and meaningful evaluations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className={`transition-all duration-${300 + index * 100}`}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Our evaluation process is simple, transparent, and effective.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16">
              <div className="relative p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-scale-up">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white font-medium flex items-center justify-center">1</div>
                <h3 className="text-lg font-display font-medium mt-2 mb-3">Input Question & Answers</h3>
                <p className="text-muted-foreground text-sm">
                  Enter your question, the reference answer, and the student's response into our system.
                </p>
              </div>
              
              <div className="relative p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-scale-up delay-100">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white font-medium flex items-center justify-center">2</div>
                <h3 className="text-lg font-display font-medium mt-2 mb-3">AI-Powered Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Our algorithms analyze semantic similarity, key concept coverage, and coherence.
                </p>
              </div>
              
              <div className="relative p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-scale-up delay-200">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white font-medium flex items-center justify-center">3</div>
                <h3 className="text-lg font-display font-medium mt-2 mb-3">Receive Detailed Evaluation</h3>
                <p className="text-muted-foreground text-sm">
                  Get a comprehensive score with specific feedback on strengths and areas for improvement.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                size="lg"
                className="button-focus-effect"
                asChild
              >
                <Link to="/demo">
                  Try it yourself
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                Ready to Transform Subjective Evaluation?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the power of AI-driven assessment. Save time, provide better feedback, 
                and ensure fair evaluation for all students.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="button-focus-effect"
                  asChild
                >
                  <Link to="/demo">
                    Start Evaluating Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="button-focus-effect"
                  asChild
                >
                  <Link to="/documentation">Read Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;


import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { Separator } from '@/components/ui/separator';
import { Cpu, Code, BarChart, BookOpen } from 'lucide-react';

const About = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'ML Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop',
      bio: 'Alex specializes in natural language processing and machine learning algorithms. He led the development of our core evaluation engine.',
      links: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'alex@answereval.com',
      },
    },
    {
      name: 'Sarah Chen',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop',
      bio: 'Sarah is an expert in building scalable web applications. She developed the front-end interface and API architecture for our platform.',
      links: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'sarah@answereval.com',
      },
    },
    {
      name: 'Michael Davis',
      role: 'Education Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
      bio: 'Michael brings 15 years of experience in education. He ensures our system aligns with pedagogical best practices and educational standards.',
      links: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'michael@answereval.com',
      },
    },
    {
      name: 'Olivia Kim',
      role: 'Research Scientist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
      bio: 'Olivia leads our research initiatives, focusing on improving algorithm accuracy and exploring new applications of NLP in education.',
      links: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'olivia@answereval.com',
      },
    },
  ];

  const technologies = [
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      name: 'Machine Learning',
      description: 'Our core evaluation engine utilizes state-of-the-art machine learning models, including BERT and GPT variants, fine-tuned on educational content.',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      name: 'Natural Language Processing',
      description: 'Advanced NLP techniques allow our system to understand the semantics, context, and nuances of language in subjective answers.',
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      name: 'Educational Analytics',
      description: 'Comprehensive analytics provide insights into student performance, knowledge gaps, and learning patterns.',
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      name: 'Flask & Python',
      description: 'Our backend is built with Flask and Python, ensuring robust performance, scalability, and easy integration with ML libraries.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0"></div>
          <div className="absolute top-40 -right-60 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                About AnswerEval
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Learn about our mission, technology, and the team behind the intelligent 
                subjective answer evaluation system.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                AnswerEval was born from a simple yet powerful idea: what if we could make subjective assessment 
                as efficient and consistent as objective testing, without losing the rich insights that 
                subjective questions provide?
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is to transform educational assessment by combining the power of advanced AI 
                with educational expertise. We believe that fair, consistent, and insightful evaluation 
                is essential for effective learning.
              </p>
              <p className="text-lg text-muted-foreground">
                By automating the evaluation process, we free educators to focus on what truly matters: 
                guiding, mentoring, and inspiring their students.
              </p>
            </div>
          </div>
        </section>
        
        <Separator className="max-w-4xl mx-auto" />
        
        {/* Technology Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
                Our Technology
              </h2>
              <p className="text-lg text-muted-foreground">
                AnswerEval leverages cutting-edge technologies to deliver accurate and 
                insightful evaluations of subjective answers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-scale-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">{tech.icon}</div>
                  <div>
                    <h3 className="text-lg font-display font-medium mb-2">{tech.name}</h3>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Separator className="max-w-4xl mx-auto" />
        
        {/* Technical Process Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
                Evaluation Process
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our system evaluates subjective answers through a sophisticated multi-step process:
              </p>
              
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-medium flex items-center justify-center">1</div>
                  <div>
                    <h3 className="text-lg font-display font-medium mb-2">Semantic Analysis</h3>
                    <p className="text-muted-foreground">
                      Using transformer-based models, we analyze the semantic meaning of both the reference 
                      answer and student response, going beyond simple keyword matching.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-medium flex items-center justify-center">2</div>
                  <div>
                    <h3 className="text-lg font-display font-medium mb-2">Key Concept Extraction</h3>
                    <p className="text-muted-foreground">
                      Our algorithm identifies essential concepts in the reference answer and evaluates 
                      the student's coverage of these key points.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-medium flex items-center justify-center">3</div>
                  <div>
                    <h3 className="text-lg font-display font-medium mb-2">Coherence & Structure Assessment</h3>
                    <p className="text-muted-foreground">
                      We evaluate the logical flow, organization, and cohesiveness of the student's response.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-medium flex items-center justify-center">4</div>
                  <div>
                    <h3 className="text-lg font-display font-medium mb-2">Contextual Understanding</h3>
                    <p className="text-muted-foreground">
                      Our system considers the specific context of the question, adapting its evaluation 
                      criteria accordingly.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-medium flex items-center justify-center">5</div>
                  <div>
                    <h3 className="text-lg font-display font-medium mb-2">Feedback Generation</h3>
                    <p className="text-muted-foreground">
                      Based on the comprehensive analysis, we generate detailed, actionable feedback 
                      that highlights strengths and areas for improvement.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
        
        <Separator className="max-w-4xl mx-auto" />
        
        {/* Team Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                AnswerEval is built by a diverse team of experts in machine learning, 
                education, and software development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  {...member}
                  className={`transition-all duration-${300 + index * 100}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

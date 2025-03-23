
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EvaluationForm from '@/components/EvaluationForm';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Demo = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const examples = [
    {
      question: "Explain the concept of photosynthesis and its importance in ecosystems.",
      reference: "Photosynthesis is the process by which green plants, algae, and certain bacteria convert light energy, usually from the sun, into chemical energy in the form of glucose. This process involves capturing carbon dioxide from the air and water from the soil, and releasing oxygen as a byproduct. Photosynthesis is crucial for ecosystems as it forms the base of most food chains, produces oxygen necessary for aerobic organisms, and helps regulate atmospheric carbon dioxide levels.",
      student: "Photosynthesis is how plants make their food using sunlight. They take in carbon dioxide and release oxygen. It's important because it gives us oxygen to breathe and food to eat."
    },
    {
      question: "Discuss the causes and consequences of climate change.",
      reference: "Climate change is primarily caused by human activities that increase greenhouse gas concentrations in the atmosphere, such as burning fossil fuels, deforestation, and industrial processes. These greenhouse gases trap heat, leading to global warming. Consequences include rising sea levels, more frequent and severe weather events, disruptions to ecosystems and biodiversity, threats to food security, and negative impacts on human health and livelihoods. Addressing climate change requires both mitigation (reducing emissions) and adaptation strategies.",
      student: "Climate change happens because of greenhouse gases from cars and factories. When these gases build up, they trap heat in the atmosphere, making Earth warmer. This leads to melting ice caps, stronger hurricanes, and problems for animals and humans alike."
    }
  ];

  const handleLoadExample = (example: typeof examples[0]) => {
    const questionElement = document.getElementById('question') as HTMLTextAreaElement;
    const referenceElement = document.getElementById('desiredAnswer') as HTMLTextAreaElement;
    const studentElement = document.getElementById('studentAnswer') as HTMLTextAreaElement;
    
    if (questionElement && referenceElement && studentElement) {
      questionElement.value = example.question;
      questionElement.dispatchEvent(new Event('input', { bubbles: true }));
      
      referenceElement.value = example.reference;
      referenceElement.dispatchEvent(new Event('input', { bubbles: true }));
      
      studentElement.value = example.student;
      studentElement.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="py-12 md:py-16 relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0"></div>
          <div className="absolute top-20 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Try Our Evaluation System
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Experience the power of our AI-driven subjective answer evaluation. 
                Enter a question, reference answer, and student response to see it in action.
              </p>
              <div className="flex justify-center space-x-2 mb-8">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-xs"
                  onClick={() => handleLoadExample(examples[0])}
                >
                  Load Example 1
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-xs"
                  onClick={() => handleLoadExample(examples[1])}
                >
                  Load Example 2
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Evaluation Form Section */}
        <section className="py-6 md:py-10">
          <div className="container">
            <div className="max-w-3xl mx-auto animate-scale-up">
              <EvaluationForm />
            </div>
          </div>
        </section>
        
        {/* Instructions Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-2xl font-display font-semibold mb-6">
                How to Use the Demo
              </h2>
              
              <ol className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary font-medium flex items-center justify-center text-sm">1</div>
                  <p className="text-muted-foreground pt-1">
                    Enter your question in the first field. This should be a subjective question that requires 
                    an explanatory answer.
                  </p>
                </li>
                
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary font-medium flex items-center justify-center text-sm">2</div>
                  <p className="text-muted-foreground pt-1">
                    Provide the reference or ideal answer in the second field. This will be used as the 
                    benchmark for evaluation.
                  </p>
                </li>
                
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary font-medium flex items-center justify-center text-sm">3</div>
                  <p className="text-muted-foreground pt-1">
                    Input the student's answer in the third field. This is the response that will be evaluated.
                  </p>
                </li>
                
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary font-medium flex items-center justify-center text-sm">4</div>
                  <p className="text-muted-foreground pt-1">
                    Click "Evaluate Answer" to receive a detailed assessment of the student's response 
                    compared to the reference answer.
                  </p>
                </li>
              </ol>
              
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold">i</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This demo provides a simulation of our system's capabilities. 
                    In a real implementation, the evaluation would be performed by our backend server 
                    using advanced NLP models. The actual Flask backend would handle the processing 
                    of the input data and return comprehensive results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Next Steps Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl font-display font-semibold mb-4">
                Want to Learn More?
              </h2>
              <p className="text-muted-foreground mb-6">
                Explore our documentation for details on system architecture, API integration, 
                and implementation guidelines.
              </p>
              <Button asChild>
                <Link to="/documentation">
                  View Documentation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Demo;

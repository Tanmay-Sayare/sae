
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Header height + some padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'architecture', 'api', 'flask', 'integration', 'github'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const codeSnippets = {
    pythonCode: `from flask import Flask, request, jsonify
from nlp_evaluator import SubjectiveAnswerEvaluator

app = Flask(__name__)
evaluator = SubjectiveAnswerEvaluator()

@app.route('/api/evaluate', methods=['POST'])
def evaluate_answer():
    data = request.json
    
    question = data.get('question')
    reference_answer = data.get('reference_answer')
    student_answer = data.get('student_answer')
    
    # Validate inputs
    if not all([question, reference_answer, student_answer]):
        return jsonify({
            'error': 'Missing required fields'
        }), 400
    
    # Process evaluation
    result = evaluator.evaluate(
        question=question,
        reference_answer=reference_answer,
        student_answer=student_answer
    )
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)`,
    
    apiCode: `// Example API request using fetch
async function evaluateAnswer(question, referenceAnswer, studentAnswer) {
  try {
    const response = await fetch('https://api.answereval.com/api/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: question,
        reference_answer: referenceAnswer,
        student_answer: studentAnswer
      }),
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error evaluating answer:', error);
    throw error;
  }
}`,
    
    pythonModelCode: `import numpy as np
from transformers import AutoTokenizer, AutoModel
import torch

class SubjectiveAnswerEvaluator:
    def __init__(self):
        # Load pre-trained model and tokenizer
        self.tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
        self.model = AutoModel.from_pretrained('bert-base-uncased')
    
    def encode_text(self, text):
        # Tokenize and encode text
        inputs = self.tokenizer(text, return_tensors='pt', 
                               padding=True, truncation=True, max_length=512)
        
        with torch.no_grad():
            outputs = self.model(**inputs)
        
        # Use CLS token embedding as text representation
        embedding = outputs.last_hidden_state[:, 0, :].numpy()
        return embedding
    
    def semantic_similarity(self, embedding1, embedding2):
        # Calculate cosine similarity between embeddings
        similarity = np.dot(embedding1, embedding2.T) / (
            np.linalg.norm(embedding1) * np.linalg.norm(embedding2)
        )
        return similarity[0][0]
    
    def evaluate(self, question, reference_answer, student_answer):
        # Encode texts
        q_embedding = self.encode_text(question)
        ref_embedding = self.encode_text(reference_answer)
        student_embedding = self.encode_text(student_answer)
        
        # Calculate similarity scores
        relevance_score = self.semantic_similarity(q_embedding, student_embedding)
        accuracy_score = self.semantic_similarity(ref_embedding, student_embedding)
        
        # Calculate overall score (simplified example)
        overall_score = (relevance_score * 0.3 + accuracy_score * 0.7) * 100
        
        # Generate feedback based on scores
        feedback = self.generate_feedback(overall_score, relevance_score, accuracy_score)
        
        return {
            'score': round(overall_score, 1),
            'relevance': round(relevance_score * 100, 1),
            'accuracy': round(accuracy_score * 100, 1),
            'feedback': feedback
        }
    
    def generate_feedback(self, overall_score, relevance_score, accuracy_score):
        # Simplified feedback generation
        if overall_score >= 90:
            return "Excellent answer that demonstrates comprehensive understanding."
        elif overall_score >= 70:
            return "Good answer with solid understanding, but some room for improvement."
        elif overall_score >= 50:
            return "Adequate answer that shows basic understanding but lacks depth."
        else:
            return "The answer needs significant improvement."`,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="flex items-center mb-4 gap-2">
                <div className="bg-primary/10 text-primary text-xs font-medium rounded-full px-3 py-1">Documentation</div>
                <div className="bg-secondary text-xs font-medium rounded-full px-3 py-1">v1.0</div>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                AnswerEval Documentation
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Comprehensive guides and references for implementing and using our 
                subjective answer evaluation system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button 
                  variant="outline"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
                <Button 
                  variant="ghost"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText('pip install answer-eval');
                    alert('Command copied to clipboard!');
                  }}>
                    <code className="bg-muted p-1 rounded text-sm">pip install answer-eval</code>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Documentation Content */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-1">
                  <div className="mb-4">
                    <p className="text-xs uppercase font-medium text-muted-foreground mb-2">Contents</p>
                  </div>
                  <nav className="flex flex-col space-y-1">
                    <a
                      href="#overview"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('overview');
                      }}
                      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                        activeSection === 'overview' 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Overview
                    </a>
                    <a
                      href="#architecture"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('architecture');
                      }}
                      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                        activeSection === 'architecture' 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      System Architecture
                    </a>
                    <a
                      href="#api"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('api');
                      }}
                      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                        activeSection === 'api' 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      API Reference
                    </a>
                    <a
                      href="#flask"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('flask');
                      }}
                      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                        activeSection === 'flask' 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Flask Implementation
                    </a>
                    <a
                      href="#integration"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('integration');
                      }}
                      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                        activeSection === 'integration' 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Integration Guide
                    </a>
                    <a
                      href="#github"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('github');
                      }}
                      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                        activeSection === 'github' 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      GitHub Repository
                    </a>
                  </nav>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-12">
                {/* Overview Section */}
                <div id="overview">
                  <h2 className="text-2xl font-display font-semibold mb-4">Overview</h2>
                  <p className="text-muted-foreground mb-4">
                    AnswerEval is a sophisticated system for evaluating subjective answers using advanced natural language 
                    processing techniques. It provides accurate, consistent assessments of student responses 
                    by analyzing semantic similarity, key concept coverage, and coherence against reference answers.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    This documentation provides comprehensive guidance on implementing, configuring, and 
                    integrating AnswerEval into your educational applications or platforms.
                  </p>
                  
                  <div className="mt-6 bg-muted/50 rounded-lg p-4 border border-border">
                    <h3 className="text-lg font-medium mb-2">Key Features</h3>
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                      <li>Semantic understanding of text that goes beyond keyword matching</li>
                      <li>Customizable evaluation criteria to suit different educational contexts</li>
                      <li>Detailed feedback generation with specific improvement suggestions</li>
                      <li>Easy integration via REST API or Python library</li>
                      <li>Scalable architecture suitable for individual teachers or institutional deployment</li>
                    </ul>
                  </div>
                </div>
                
                <Separator />
                
                {/* System Architecture Section */}
                <div id="architecture">
                  <h2 className="text-2xl font-display font-semibold mb-4">System Architecture</h2>
                  <p className="text-muted-foreground mb-6">
                    AnswerEval follows a layered architecture pattern with clearly separated concerns 
                    for flexibility and maintainability.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border border-border rounded-lg overflow-hidden">
                      <div className="bg-primary/5 p-3 border-b border-border">
                        <h3 className="font-medium">Architecture Diagram</h3>
                      </div>
                      <div className="p-4 bg-white">
                        <div className="bg-muted/50 p-6 rounded text-center">
                          [Architecture Diagram Placeholder]
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-medium mb-2">Presentation Layer</h4>
                        <p className="text-sm text-muted-foreground">
                          Web UI, REST API endpoints, and client libraries for interacting with the system.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-medium mb-2">Application Layer</h4>
                        <p className="text-sm text-muted-foreground">
                          Core business logic, evaluation algorithms, and service coordination.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-medium mb-2">Model Layer</h4>
                        <p className="text-sm text-muted-foreground">
                          NLP models, data processing pipelines, and evaluation metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                {/* API Reference Section */}
                <div id="api">
                  <h2 className="text-2xl font-display font-semibold mb-4">API Reference</h2>
                  <p className="text-muted-foreground mb-6">
                    AnswerEval provides a RESTful API for integrating the evaluation system into your applications.
                  </p>
                  
                  <Tabs defaultValue="endpoints" className="mb-8">
                    <TabsList>
                      <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                      <TabsTrigger value="authentication">Authentication</TabsTrigger>
                      <TabsTrigger value="examples">Examples</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="endpoints">
                      <div className="p-4 border border-border rounded-lg mt-4">
                        <h3 className="text-lg font-medium mb-4">POST /api/evaluate</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Evaluates a student's answer against a reference answer for a given question.
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Request Body</h4>
                          <pre className="bg-muted p-3 rounded-md text-xs overflow-auto">
{`{
  "question": "string",       // The question being answered
  "reference_answer": "string", // The ideal or reference answer
  "student_answer": "string"    // The student's answer to evaluate
}`}
                          </pre>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Response</h4>
                          <pre className="bg-muted p-3 rounded-md text-xs overflow-auto">
{`{
  "score": number,           // Overall score (0-100)
  "relevance": number,       // Relevance to question (0-100)
  "accuracy": number,        // Accuracy compared to reference (0-100)
  "feedback": "string",      // Detailed feedback text
  "key_points": [            // Analysis of key concepts coverage
    {
      "concept": "string",   // Key concept from reference
      "covered": boolean,    // Whether concept was covered in answer
      "confidence": number   // Confidence in coverage detection (0-1)
    }
  ]
}`}
                          </pre>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="authentication">
                      <div className="p-4 border border-border rounded-lg mt-4">
                        <h3 className="text-lg font-medium mb-3">API Key Authentication</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          All API requests require authentication using an API key passed in the header.
                        </p>
                        
                        <h4 className="text-sm font-medium mb-2">Request Header</h4>
                        <pre className="bg-muted p-3 rounded-md text-xs overflow-auto">
{`Authorization: Bearer YOUR_API_KEY`}
                        </pre>
                        
                        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                          <p className="text-sm text-yellow-800">
                            <strong>Note:</strong> Keep your API key secure. Do not expose it in client-side code.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="examples">
                      <div className="p-4 border border-border rounded-lg mt-4">
                        <h3 className="text-lg font-medium mb-3">API Request Example</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Example of how to call the evaluation API using JavaScript:
                        </p>
                        
                        <pre className="bg-muted p-3 rounded-md text-xs overflow-auto mb-4">
                          {codeSnippets.apiCode}
                        </pre>
                        
                        <h4 className="text-sm font-medium mb-2">Example Response</h4>
                        <pre className="bg-muted p-3 rounded-md text-xs overflow-auto">
{`{
  "score": 85.7,
  "relevance": 92.3,
  "accuracy": 83.1,
  "feedback": "Good answer with solid understanding. Consider expanding on the role of chlorophyll in the process.",
  "key_points": [
    {
      "concept": "light energy conversion",
      "covered": true,
      "confidence": 0.94
    },
    {
      "concept": "carbon dioxide and water as inputs",
      "covered": true,
      "confidence": 0.87
    },
    {
      "concept": "glucose production",
      "covered": false,
      "confidence": 0.78
    },
    {
      "concept": "oxygen as byproduct",
      "covered": true,
      "confidence": 0.95
    }
  ]
}`}
                        </pre>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <Separator />
                
                {/* Flask Implementation Section */}
                <div id="flask">
                  <h2 className="text-2xl font-display font-semibold mb-4">Flask Implementation</h2>
                  <p className="text-muted-foreground mb-6">
                    AnswerEval's backend is implemented using Flask, a lightweight Python web framework. 
                    Below is a simplified example of how to implement the evaluation endpoint.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border border-border rounded-lg overflow-hidden">
                      <div className="bg-primary/5 p-3 border-b border-border flex justify-between items-center">
                        <h3 className="font-medium">app.py</h3>
                        <button 
                          className="text-xs text-muted-foreground hover:text-foreground"
                          onClick={() => navigator.clipboard.writeText(codeSnippets.pythonCode)}
                        >
                          Copy
                        </button>
                      </div>
                      <div className="p-4 bg-white">
                        <pre className="text-xs overflow-auto">
                          {codeSnippets.pythonCode}
                        </pre>
                      </div>
                    </div>
                    
                    <div className="border border-border rounded-lg overflow-hidden">
                      <div className="bg-primary/5 p-3 border-b border-border flex justify-between items-center">
                        <h3 className="font-medium">nlp_evaluator.py</h3>
                        <button 
                          className="text-xs text-muted-foreground hover:text-foreground"
                          onClick={() => navigator.clipboard.writeText(codeSnippets.pythonModelCode)}
                        >
                          Copy
                        </button>
                      </div>
                      <div className="p-4 bg-white">
                        <pre className="text-xs overflow-auto">
                          {codeSnippets.pythonModelCode}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                {/* Integration Guide Section */}
                <div id="integration">
                  <h2 className="text-2xl font-display font-semibold mb-4">Integration Guide</h2>
                  <p className="text-muted-foreground mb-6">
                    This guide covers how to integrate AnswerEval into your educational platform or application.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="text-lg font-medium mb-3">Basic Integration Steps</h3>
                      <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                        <li className="pl-2">
                          <span className="font-medium text-foreground">Install the Python package:</span>
                          <pre className="mt-2 bg-muted p-2 rounded-md text-xs overflow-auto">pip install answer-eval</pre>
                        </li>
                        <li className="pl-2">
                          <span className="font-medium text-foreground">Set up the Flask server:</span>
                          <p className="mt-1 text-sm">
                            Configure the server based on your infrastructure requirements.
                          </p>
                        </li>
                        <li className="pl-2">
                          <span className="font-medium text-foreground">Configure API access:</span>
                          <p className="mt-1 text-sm">
                            Generate API keys for secure access to the evaluation endpoints.
                          </p>
                        </li>
                        <li className="pl-2">
                          <span className="font-medium text-foreground">Connect from your application:</span>
                          <p className="mt-1 text-sm">
                            Use the API reference to make requests from your application.
                          </p>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="text-lg font-medium mb-3">Integration Options</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">REST API</h4>
                          <p className="text-sm text-muted-foreground">
                            Ideal for platforms built with any technology. Make HTTP requests to our endpoints.
                          </p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">Python Library</h4>
                          <p className="text-sm text-muted-foreground">
                            For Python applications, use our library for direct integration without HTTP overhead.
                          </p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">LMS Plugins</h4>
                          <p className="text-sm text-muted-foreground">
                            Pre-built plugins for popular learning management systems like Moodle and Canvas.
                          </p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">Custom Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Our team can assist with custom integrations for specific requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                {/* GitHub Repository Section */}
                <div id="github">
                  <h2 className="text-2xl font-display font-semibold mb-4">GitHub Repository</h2>
                  <p className="text-muted-foreground mb-6">
                    The AnswerEval project is open source and hosted on GitHub. You can explore the code, 
                    contribute to the project, or fork it for your own customizations.
                  </p>
                  
                  <div className="p-6 border border-border rounded-lg bg-muted/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Github className="h-8 w-8" />
                      <div>
                        <h3 className="font-medium">answereval/answer-eval</h3>
                        <p className="text-sm text-muted-foreground">
                          Open-source subjective answer evaluation system
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/50 rounded-md text-center">
                          <p className="text-2xl font-semibold">152</p>
                          <p className="text-xs text-muted-foreground">Stars</p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-md text-center">
                          <p className="text-2xl font-semibold">43</p>
                          <p className="text-xs text-muted-foreground">Forks</p>
                        </div>
                      </div>
                      
                      <Button
                        className="w-full"
                        asChild
                      >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                          View Repository
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;

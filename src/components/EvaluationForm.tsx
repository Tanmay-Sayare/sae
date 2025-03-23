
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const EvaluationForm = () => {
  const [question, setQuestion] = useState('');
  const [desiredAnswer, setDesiredAnswer] = useState('');
  const [studentAnswer, setStudentAnswer] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!question.trim() || !desiredAnswer.trim() || !studentAnswer.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setLoading(true);
    
    // Mock API call - in a real app, this would connect to your Flask backend
    setTimeout(() => {
      // Calculate a mock score between 0 and 100
      const mockScore = Math.floor(Math.random() * 101);
      
      // Generate feedback based on score
      let feedback;
      if (mockScore >= 90) {
        feedback = 'Excellent answer! The response demonstrates comprehensive understanding of the concept.';
      } else if (mockScore >= 70) {
        feedback = 'Good answer. The response shows solid understanding with minor gaps.';
      } else if (mockScore >= 50) {
        feedback = 'Adequate answer. The response demonstrates basic understanding but lacks depth.';
      } else {
        feedback = 'The answer needs improvement. Several key points from the desired answer are missing.';
      }
      
      // Format the result
      const resultText = `
        Score: ${mockScore}/100
        
        Feedback: ${feedback}
        
        Key points covered: ${mockScore >= 50 ? 'Most' : 'Some'} of the essential concepts from the desired answer.
        
        Areas for improvement: ${mockScore < 90 ? 'Expand on explanations and include more specific details.' : 'None, excellent work!'}
      `;
      
      setResult(resultText);
      setLoading(false);
      
      toast.success('Evaluation completed');
    }, 2000); // Simulate API delay
  };

  return (
    <div className="relative z-10">
      <Card className="border border-border shadow-sm">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="question">Question</Label>
              <Textarea
                id="question"
                placeholder="Enter the question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="min-h-20 resize-none"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="desiredAnswer">Desired Answer (Reference)</Label>
              <Textarea
                id="desiredAnswer"
                placeholder="Enter the ideal or reference answer..."
                value={desiredAnswer}
                onChange={(e) => setDesiredAnswer(e.target.value)}
                className="min-h-32 resize-none"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="studentAnswer">Student Answer</Label>
              <Textarea
                id="studentAnswer"
                placeholder="Enter the student's answer to evaluate..."
                value={studentAnswer}
                onChange={(e) => setStudentAnswer(e.target.value)}
                className="min-h-32 resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full button-focus-effect"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Evaluating...
                </>
              ) : 'Evaluate Answer'}
            </Button>
          </form>
          
          {result && (
            <div className="mt-8 p-4 bg-muted/50 rounded-md border border-border animate-fade-in">
              <h3 className="text-lg font-medium mb-3">Evaluation Result</h3>
              <pre className="whitespace-pre-wrap text-sm">{result}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EvaluationForm;

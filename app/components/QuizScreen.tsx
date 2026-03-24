import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, Trophy, ArrowLeft } from 'lucide-react';
import { quizQuestions } from '../data/quiz';

interface QuizScreenProps {
  testId: string;
  onBack: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ testId, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === question.correct) {
      setScore(prev => prev + 1);
    }
    
    setAnsweredQuestions(prev => [...prev, currentQuestion]);
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setIsComplete(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setIsComplete(false);
  };

  if (isComplete) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    return (
      <div className="p-6 min-h-full flex flex-col items-center justify-center text-center space-y-6">
        <Trophy className="w-16 h-16 text-yellow-400" />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-green-400">Test Complete!</h2>
          <p className="text-gray-300">
            You scored <span className="text-green-400 font-bold">{score}</span> out of{' '}
            <span className="font-bold">{quizQuestions.length}</span>
          </p>
          <p className="text-lg text-yellow-400 font-semibold">{percentage}%</p>
        </div>
        
        <div className="w-full bg-gray-700 rounded-lg p-4">
          <p className="text-sm text-gray-300 mb-2">Performance:</p>
          <div className="w-full bg-gray-600 rounded-full h-3">
            <div 
              className="bg-green-500 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="space-y-3 w-full">
          <button
            onClick={resetQuiz}
            className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-500 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Try Again</span>
          </button>
          
          <button
            onClick={onBack}
            className="flex items-center justify-center space-x-2 border border-gray-600 hover:bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Tests</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-center">
          <h2 className="text-lg font-bold text-green-400">Quiz</h2>
          <p className="text-gray-400 text-sm">
            {currentQuestion + 1} of {quizQuestions.length}
          </p>
        </div>
        <div className="w-9" /> {/* Spacer for centering */}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
        <div 
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-green-300 mb-2">
          {question.question}
        </h3>
        {question.code && (
          <div className="bg-black rounded border border-gray-600 p-3 mt-3">
            <code className="text-green-400 text-sm">{question.code}</code>
          </div>
        )}
      </div>

      {/* Answer Options */}
      <div className="space-y-3 flex-1">
        {question.options.map((option, index) => {
          let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ";
          
          if (showResult) {
            if (index === question.correct) {
              buttonClass += "border-green-500 bg-green-900/30 text-green-300";
            } else if (index === selectedAnswer && index !== question.correct) {
              buttonClass += "border-red-500 bg-red-900/30 text-red-300";
            } else {
              buttonClass += "border-gray-600 text-gray-400";
            }
          } else {
            buttonClass += "border-gray-600 hover:border-gray-500 text-gray-300 hover:bg-gray-800/50";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <span className="flex-1">{option}</span>
                {showResult && (
                  <div className="ml-4">
                    {index === question.correct ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : index === selectedAnswer ? (
                      <XCircle className="w-6 h-6 text-red-500" />
                    ) : null}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Score Display */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          Score: <span className="text-green-400 font-semibold">{score}</span> / {answeredQuestions.length}
        </p>
      </div>
    </div>
  );
};

export default QuizScreen;
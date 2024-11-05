import React, { useState } from 'react';

const questions = [
  {
    question: "When did our story begin?",
    options: ["During college", "In childhood", "During the pandemic", "Last year"],
    correct: 1
  },
  {
    question: "When did I propose to you?",
    options: ["March 13, 2021", "June 10, 2022", "November 17, 2023", "January 1, 2021"],
    correct: 0
  },
  {
    question: "What made our bond stronger?",
    options: ["College life", "Lockdown period", "Work", "Social media"],
    correct: 1
  },
  {
    question: "What kind of relationship did we have?",
    options: ["Complicated", "Full of arguments", "Perfect with love and compassion", "Just casual"],
    correct: 2
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-16 p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Our Memory Lane Quiz</h2>

      {showScore ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            You scored {score} out of {questions.length}
          </h3>
          <p className="text-gray-600">
            {score === questions.length 
              ? "You remember everything about us! ❤️" 
              : "Some memories might have faded, but our story remains special."}
          </p>
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1}: {questions[currentQuestion].question}
            </h3>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-4 text-left rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
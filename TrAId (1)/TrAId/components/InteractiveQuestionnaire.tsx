'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import confetti from 'canvas-confetti'

type Question = {
  id: string;
  text: string;
  options: string[];
}

type QuestionSet = {
  [key: string]: Question[];
}

const questions: QuestionSet = {
  initial: [
    {
      id: 'goal',
      text: 'What is your primary goal as a trader?',
      options: ['"Master My Discipline"', '"Stick to My Plan"', '"Control My Emotions"', '"Improve My Trading Process"']
    }
  ],
  'Master My Discipline': [
    {
      id: 'discipline_challenge',
      text: 'What\'s your biggest challenge with trading discipline?',
      options: ['"Overtrading"', '"Not Following Rules"', '"Lack of Patience"', '"Inconsistent Routine"']
    },
    {
      id: 'discipline_improvement',
      text: 'How do you currently try to improve your discipline?',
      options: ['"Journaling"', '"Meditation"', '"Setting Strict Rules"', '"Seeking Mentorship"']
    }
  ],
  'Stick to My Plan': [
    {
      id: 'plan_adherence',
      text: 'How often do you deviate from your trading plan?',
      options: ['"Rarely"', '"Sometimes"', '"Often"', '"Very Often"']
    },
    {
      id: 'plan_challenge',
      text: 'What\'s the main reason you deviate from your plan?',
      options: ['"FOMO"', '"Market Volatility"', '"Lack of Confidence"', '"Unclear Plan"']
    }
  ],
  'Control My Emotions': [
    {
      id: 'emotions',
      text: 'What emotions affect you most while trading?',
      options: ['"Fear of Loss"', '"Greed for More"', '"Impatience"', '"Anxiety"']
    },
    {
      id: 'emotion_trigger',
      text: 'What typically triggers these emotions?',
      options: ['"Large Losses"', '"Missing Opportunities"', '"Market News"', '"Trading Streak"']
    }
  ],
  'Improve My Trading Process': [
    {
      id: 'process_weakness',
      text: 'Which part of your trading process needs the most improvement?',
      options: ['"Analysis"', '"Entry Timing"', '"Exit Strategy"', '"Risk Management"']
    },
    {
      id: 'process_tool',
      text: 'What tools do you currently use to improve your process?',
      options: ['"Trading Journal"', '"Performance Analytics"', '"Backtesting"', '"None"']
    }
  ],
  'Trading Style': [
    {
      id: 'personality',
      text: 'What describes you?',
      options: ['"Easy going"', '"Serious and disciplined"']
    },
    {
      id: 'reaction',
      text: 'How do you react in difficult situations?',
      options: ['"Self control, don\'t allow self to be worried"', '"Sensitive and reactive to surroundings"', '"Level headed and good at controlling emotions"']
    },
    {
      id: 'bias',
      text: 'What do you measure your bias on?',
      options: ['"Based off logic"', '"Logical reasoning and sometimes gut feeling"']
    },
    {
      id: 'stress',
      text: 'How easily do you get stressed?',
      options: ['"Low stress level"', '"Moderate stress level"', '"High stress level"']
    },
    {
      id: 'schedule',
      text: 'What is your daily schedule like?',
      options: ['"Hectic!"', '"I have a filled up schedule but find time for sports and leisure!"', '"I have a free schedule for most part and like to re-center and relax before getting back to work."']
    },
    {
      id: 'decision_making',
      text: 'What kind of information helps you make informed decisions?',
      options: ['"Numbers, charts and statistics"', '"Combination of data and fundamentals"']
    },
    {
      id: 'rewards',
      text: 'What kind of rewards do you enjoy?',
      options: ['"Small and regular victories keep me engaged and fulfilled"', '"I find value in studying something and mastering it across a long period of time"', '"I like to build up to my achievement over a few days"']
    },
    {
      id: 'film',
      text: 'What\'s your favorite type of film?',
      options: ['"Slow burning films that require concentration"', '"Action packed films"', '"Films about real life events"']
    },
    {
      id: 'chess_piece',
      text: 'Which chess piece best represents you?',
      options: ['"Bishop: open minded and ability to alternate"', '"Rook: Protective and straightforward in approach"', '"Knight: calculative and waits for right time to strike"', '"Queen: Fearless and confident in abilities"']
    },
    {
      id: 'trading_time',
      text: 'How much time do you dedicate to trading?',
      options: ['"On the charts every hour of the day"', '"On the charts for most part of the day"', '"On the charts a few times a day but check news hourly"', '"On the chart once a day"']
    }
  ]
}

export function InteractiveQuestionnaire({ onComplete }: { onComplete: (answers: Record<string, string>) => void }) {
  const [currentQuestionSet, setCurrentQuestionSet] = useState<string>('initial')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [direction, setDirection] = useState(0)

  const currentQuestions = questions[currentQuestionSet]
  const currentQuestion = currentQuestions[currentQuestionIndex]
  const progress = ((Object.keys(answers).length + 1) / (Object.keys(questions).flat().length)) * 100

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer.replace(/"/g, '') }))
    setDirection(1)

    if (currentQuestionSet === 'initial') {
      setCurrentQuestionSet('Trading Style')
      setCurrentQuestionIndex(0)
    } else if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      onComplete(answers)
    }

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const handleBack = () => {
    setDirection(-1)
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    } else if (currentQuestionSet !== 'initial') {
      setCurrentQuestionSet('initial')
      setCurrentQuestionIndex(0)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">TrAId Questionnaire</CardTitle>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQuestion.id}
              custom={direction}
              initial={{ opacity: 0, x: 100 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 * direction }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4">{currentQuestion.text}</h3>
              <div className="space-y-2">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => handleAnswer(option)}
                  >
                    {option.replace(/"/g, '')}
                  </Button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-between">
          {(currentQuestionSet !== 'initial' || currentQuestionIndex > 0) && (
            <Button variant="ghost" onClick={handleBack}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          )}
          <div className="flex-grow" />
          {currentQuestionSet !== 'initial' && currentQuestionIndex === currentQuestions.length - 1 && (
            <Button onClick={() => onComplete(answers)}>
              View My Results <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}


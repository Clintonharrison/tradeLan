'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Upload, ArrowRight } from 'lucide-react'

const steps = [
  {
    title: "Welcome to TrAId",
    content: "Your journey to disciplined and mindful trading starts here. TrAId is designed to help you track your progress, maintain discipline, and support your trading mindset.",
  },
  {
    title: "Set Your Goals",
    content: "What are your primary trading goals? Select all that apply:",
  },
  {
    title: "Your Trading Plan",
    content: "Upload your existing trading plan or create a new one. A solid plan is the foundation of successful trading.",
  },
  {
    title: "Your Dashboard",
    content: "Here's your personalized dashboard. Let's take a quick tour of its features:",
  },
]

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [goals, setGoals] = useState<string[]>([])
  const [plan, setPlan] = useState<File | null>(null)

  const handleGoalToggle = (goal: string) => {
    setGoals(prev => 
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    )
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPlan(e.target.files[0])
    }
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      onComplete()
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <p className="text-lg text-center">{steps[0].content}</p>
        )
      case 1:
        return (
          <div className="space-y-2">
            {['Stick to my plan', 'Improve my discipline', 'Journal my trades'].map((goal) => (
              <Button
                key={goal}
                variant={goals.includes(goal) ? "default" : "outline"}
                className="w-full"
                onClick={() => handleGoalToggle(goal)}
              >
                {goal}
              </Button>
            ))}
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <Input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="plan-upload"
              />
              <Button asChild>
                <label htmlFor="plan-upload" className="cursor-pointer">
                  <Upload className="mr-2 h-4 w-4" /> Upload Plan
                </label>
              </Button>
            </div>
            {plan && <p className="text-center text-sm text-muted-foreground">Uploaded: {plan.name}</p>}
            <p className="text-center">or</p>
            <Textarea placeholder="Start writing your trading plan here..." />
          </div>
        )
      case 3:
        return (
          <div className="space-y-2">
            <p>This is your discipline score. It reflects how well you're sticking to your trading plan.</p>
            <p>Here is where you journal your trades. Regular journaling helps improve your trading decisions.</p>
            <p>Your performance metrics are displayed here, giving you a clear view of your progress.</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">{steps[currentStep].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
          <Button onClick={handleNext} className="w-full">
            {currentStep < steps.length - 1 ? "Next" : "Get Started"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${index <= currentStep ? 'bg-primary' : 'bg-gray-300'}`}
                animate={index <= currentStep ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {index < currentStep && (
                  <CheckCircle className="w-3 h-3 text-white" />
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {currentStep < steps.length - 1 ? "You're almost there!" : "Just one more step to trading mastery!"}
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}


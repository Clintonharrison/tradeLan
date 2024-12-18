'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Radar } from 'react-chartjs-2'
import { 
  Chart as ChartJS, 
  RadialLinearScale, 
  PointElement, 
  LineElement, 
  Filler, 
  Tooltip, 
  Legend 
} from 'chart.js'
import { ArrowRight, Brain, Heart, BarChart, User, Zap, AlertTriangle } from 'lucide-react'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

type TraderProfilePageProps = {
  name: string;
  onContinue: (action: 'upload' | 'create') => void;
}

export function TraderProfilePage({ name, onContinue }: TraderProfilePageProps) {
  // This data would typically come from the questionnaire results
  const [profileData] = useState({
    traderType: "Disciplined Trader",
    strengths: [
      "Strong analytical skills",
      "Ability to stick to a trading plan",
      "Emotional control in high-pressure situations"
    ],
    weaknesses: [
      "Tendency to overtrade in volatile markets",
      "Occasional hesitation in taking profits",
      "Difficulty in adapting to rapid market changes"
    ],
    behavioralInsights: [
      "You tend to be disciplined but sometimes impulsive in high-pressure moments.",
      "You have a strong analytical approach to trading.",
      "You're open to new strategies and continuously learning.",
    ],
    emotionalInsights: [
      "You experience fear of loss most often.",
      "You stay calm under pressure.",
      "Excitement can sometimes lead to overtrading.",
    ],
    technicalFocus: "You prefer short-term scalping strategies with clear stop-loss rules.",
    personalityChart: {
      labels: ['Discipline', 'Risk Tolerance', 'Patience', 'Adaptability', 'Emotional Control'],
      datasets: [
        {
          label: 'Your Profile',
          data: [4, 3, 5, 4, 3],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
    },
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-2">Welcome to Your Trader Profile, {name}!</h1>
        <p className="text-xl text-center mb-8">Here's what we've learned about your trading style and how you can improve.</p>

        <Card className="mb-8">
          <CardContent className="flex items-center justify-center p-6">
            <User className="w-12 h-12 mr-4 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">You are a {profileData.traderType}</h2>
              <p className="text-muted-foreground">Your unique trading personality type</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 text-green-500" /> Potential Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {profileData.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 text-yellow-500" /> Areas to Improve
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {profileData.weaknesses.map((weakness, index) => (
                  <li key={index}>{weakness}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 text-blue-500" /> Behavioral & Emotional Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Behavioral Insights:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {profileData.behavioralInsights.map((insight, index) => (
                    <li key={index}>{insight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Emotional Insights:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {profileData.emotionalInsights.map((insight, index) => (
                    <li key={index}>{insight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="mr-2 text-purple-500" /> Technical Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{profileData.technicalFocus}</p>
            {profileData.personalityChart && (
              <div className="h-[300px]">
                <Radar 
                  data={profileData.personalityChart}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      r: {
                        angleLines: {
                          display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 5
                      }
                    },
                    plugins: {
                      legend: {
                        display: false
                      }
                    }
                  }}
                />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Let's Build Your Trading Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Now that you know your trading personality, it's time to create a plan tailored to your strengths and weaknesses.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => onContinue('upload')} className="flex-1">
                Upload Your Trading Plan
              </Button>
              <Button onClick={() => onContinue('create')} className="flex-1">
                Create a New Trading Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}


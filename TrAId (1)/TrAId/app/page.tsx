'use client'

import { useState } from 'react'
import { InteractiveQuestionnaire } from '@/components/InteractiveQuestionnaire'
import { AuthPage } from '@/components/AuthPage'
import { TraderProfilePage } from '@/components/TraderProfilePage'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, LineChart, BarChart4, ShieldAlert, TrendingUp, LayoutDashboard, ArrowRight, Check } from 'lucide-react'

export default function Home() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false)
  const [showAuthPage, setShowAuthPage] = useState(false)
  const [showTraderProfile, setShowTraderProfile] = useState(false)
  const [questionnaireComplete, setQuestionnaireComplete] = useState(false)
  const [userName, setUserName] = useState('')

  const handleStartQuestionnaire = () => {
    setShowQuestionnaire(true)
  }

  const handleQuestionnaireComplete = (answers: Record<string, string>) => {
    console.log('Questionnaire answers:', answers)
    setQuestionnaireComplete(true)
    setShowQuestionnaire(false)
    setShowAuthPage(true)
  }

  const handleAuthComplete = (name: string) => {
    setUserName(name)
    setShowAuthPage(false)
    setShowTraderProfile(true)
  }

  const handleContinueToTradingPlan = (action: 'upload' | 'create') => {
    // Here you would typically redirect to the trading plan page
    console.log(`Continuing to ${action} trading plan...`)
  }

  if (showQuestionnaire) {
    return <InteractiveQuestionnaire onComplete={handleQuestionnaireComplete} />
  }

  if (showAuthPage) {
    return <AuthPage onComplete={handleAuthComplete} />
  }

  if (showTraderProfile) {
    return <TraderProfilePage name={userName} onContinue={handleContinueToTradingPlan} />
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 md:pt-32 pb-16 text-center px-4 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TrAid
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Experience the power of TrAId – where trading meets AI assistance. Get consistent results with your 24/7 AI trading mindset partner.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-xl"
              onClick={handleStartQuestionnaire}
            >
              Get Started Today!
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">AI Trading Coach</h3>
                <p className="text-muted-foreground">Get real-time feedback and emotional support during your trading sessions</p>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Trading Plan Analysis</h3>
                <p className="text-muted-foreground">AI-powered insights to improve your trading strategy and execution</p>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <BarChart4 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Performance Tracking</h3>
                <p className="text-muted-foreground">Focus on process-based metrics that lead to consistent results</p>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Risk Management</h3>
                <p className="text-muted-foreground">Smart alerts and recommendations to protect your capital</p>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Market Analysis</h3>
                <p className="text-muted-foreground">AI-assisted market condition assessment and trade opportunities</p>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <LayoutDashboard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Progress Dashboard</h3>
                <p className="text-muted-foreground">Track your journey from emotional to systematic trading</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg mb-4">"TrAId has completely transformed my trading. The AI coach keeps me accountable and helps me stick to my plan."</p>
                  <p className="font-semibold">- Sarah K., Day Trader</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg mb-4">"The performance tracking feature has given me insights I never had before. I can clearly see my progress now."</p>
                  <p className="font-semibold">- Mike R., Swing Trader</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg mb-4">"As a beginner, TrAId's risk management alerts have saved me from making costly mistakes. It's like having a mentor 24/7."</p>
                  <p className="font-semibold">- Emily T., Novice Trader</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
                  <p className="text-3xl font-bold mb-6">$0<span className="text-lg font-normal">/month</span></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Basic AI trading coach</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Limited performance tracking</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Basic risk management alerts</li>
                  </ul>
                  <Button className="w-full" variant="outline">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                  <p className="text-3xl font-bold mb-6">$29<span className="text-lg font-normal">/month</span></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Advanced AI trading coach</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Comprehensive performance tracking</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Advanced risk management</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Market analysis insights</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Priority support</li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Trading?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of traders who have improved their performance with TrAId.</p>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-xl"
              onClick={handleStartQuestionnaire}
            >
              Get Started Today!
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}


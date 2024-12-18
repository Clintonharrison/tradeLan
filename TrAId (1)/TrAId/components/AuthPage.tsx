'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2 } from 'lucide-react'

type AuthPageProps = {
  onComplete: (name: string) => void;
}

export function AuthPage({ onComplete }: AuthPageProps) {
  const [isSignUp, setIsSignUp] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    onComplete(name)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6">
            {isSignUp ? 'Create your account to view your personalized trader profile.' : 'Log in to access your trader profile.'}
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isSignUp ? 'Creating your profile...' : 'Logging in...'}
                </>
              ) : (
                isSignUp ? 'Create Account' : 'Log In'
              )}
            </Button>
          </form>
          <div className="mt-4">
            <Button variant="outline" className="w-full mb-2">
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full">
              Continue with Apple
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="link"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Already have an account? Log In' : 'Need an account? Sign Up'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}


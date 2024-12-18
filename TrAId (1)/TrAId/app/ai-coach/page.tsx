'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Mic, Send } from 'lucide-react'

export default function AICoach() {
  const [userInput, setUserInput] = useState('')
  const [aiResponse, setAiResponse] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/ai-coach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      })
      const data = await response.json()
      setAiResponse(data.response)
    } catch (error) {
      console.error('Error getting AI coach response:', error)
      setAiResponse('Sorry, there was an error processing your request.')
    }
  }

  const handleVoiceChat = () => {
    setIsRecording(!isRecording)
    // Implement voice recording logic here
    // When voice input is received, you can set it to userInput
    // and then call handleSubmit()
  }

  return (
    <div className="min-h-screen p-4 md:p-6 2xl:p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">AI Trading Coach</h1>
      <Card>
        <CardHeader>
          <CardTitle>Chat with Your AI Trading Coach</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask your AI trading coach a question..."
              rows={4}
            />
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={handleVoiceChat}>
                <Mic className={`h-4 w-4 mr-2 ${isRecording ? 'text-red-500' : ''}`} />
                {isRecording ? 'Stop Recording' : 'Start Voice Chat'}
              </Button>
              <Button type="submit">
                <Send className="h-4 w-4 mr-2" />
                Get Advice
              </Button>
            </div>
          </form>
          {aiResponse && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">AI Coach Response:</h2>
              <p className="whitespace-pre-wrap">{aiResponse}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}


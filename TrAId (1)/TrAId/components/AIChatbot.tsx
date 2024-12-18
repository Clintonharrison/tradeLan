'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Mic, Send, X } from 'lucide-react'

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([])
  const [input, setInput] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const handleSend = async () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { role: 'user', content: input }])
      setInput('')
      // Here you would typically send the message to your AI backend
      // and get a response. For now, we'll simulate a response.
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', content: 'This is a simulated AI response.' }])
      }, 1000)
    }
  }

  const handleVoiceChat = () => {
    setIsRecording(!isRecording)
    // Implement voice recording logic here
  }

  return (
    <>
      {!isOpen && (
        <Button
          className="fixed bottom-4 right-4 rounded-full p-0 w-12 h-12 bg-primary hover:bg-primary/90"
          onClick={() => setIsOpen(true)}
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-background border border-border rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-2 border-b">
            <h3 className="font-semibold">AI Coach</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-grow p-2">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  {message.content}
                </span>
              </div>
            ))}
          </ScrollArea>
          <div className="p-2 border-t flex items-center">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow mr-2"
            />
            <Button variant="ghost" size="icon" onClick={handleVoiceChat}>
              <Mic className={`h-4 w-4 ${isRecording ? 'text-red-500' : ''}`} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}


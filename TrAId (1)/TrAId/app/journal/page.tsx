'use client'

import { useState } from 'react'
import { Calendar, Share2, MessageSquare, Star, MoreHorizontal, Link, Monitor } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function JournalEntry() {
  const [date, setDate] = useState('')
  const [session, setSession] = useState('')
  const [position, setPosition] = useState('')
  const [risk, setRisk] = useState('0.5')
  const [riskReturn, setRiskReturn] = useState('-0.5')
  const [outcome, setOutcome] = useState('')
  const [strikeRate, setStrikeRate] = useState(false)
  const [followRules, setFollowRules] = useState(false)
  const [emotionsBefore, setEmotionsBefore] = useState([6])
  const [emotionsAfter, setEmotionsAfter] = useState([4])
  const [preTradeAnalysis, setPreTradeAnalysis] = useState('')
  const [postTradeAnalysis, setPostTradeAnalysis] = useState('')
  const [transcendingJudgment, setTranscendingJudgment] = useState('')

  return (
    <div className="min-h-screen p-4 md:p-6 2xl:p-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Trading Journal</h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Star className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <Label>Date</Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-gray-800 border-gray-700"
            />
          </div>

          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            <Label>Session</Label>
            <Select value={session} onValueChange={setSession}>
              <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
                <SelectValue placeholder="Select session" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">New York Session</SelectItem>
                <SelectItem value="london">London Session</SelectItem>
                <SelectItem value="asia">Asia Session</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Position</Label>
            <div className="flex gap-2 mt-2">
              <Badge variant={position === 'BUY' ? 'default' : 'secondary'}
                className="cursor-pointer"
                onClick={() => setPosition('BUY')}>
                BUY
              </Badge>
              <Badge variant={position === 'SELL' ? 'default' : 'secondary'}
                className="cursor-pointer"
                onClick={() => setPosition('SELL')}>
                SELL
              </Badge>
            </div>
          </div>

          <div>
            <Label>DAILY PROFILES</Label>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary" className="bg-green-800">New York Reversal</Badge>
            </div>
          </div>

          <div>
            <Label>Area of Value - HTF</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary" className="bg-orange-800">Higher Time Frame Raid (daily/h4/h1)</Badge>
              <Badge variant="secondary" className="bg-yellow-800">FVG/INEFFICIENCY</Badge>
            </div>
          </div>

          <div>
            <Label>Entry Criteria - LTF</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary" className="bg-purple-800">HTF RAID</Badge>
              <Badge variant="secondary" className="bg-indigo-800">M15/M5 ICFED ENTRY (FVG OB BPR)</Badge>
              <Badge variant="secondary" className="bg-gray-700">WITHIN KILLZONE</Badge>
              <Badge variant="secondary" className="bg-red-800">M5/M15 MSB</Badge>
            </div>
          </div>

          <div>
            <Label>Pre-Trade Analysis</Label>
            <Textarea
              value={preTradeAnalysis}
              onChange={(e) => setPreTradeAnalysis(e.target.value)}
              className="mt-2 bg-gray-800 border-gray-700"
              placeholder="Enter your pre-trade analysis..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Risk (%)</Label>
              <Input
                type="number"
                value={risk}
                onChange={(e) => setRisk(e.target.value)}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div>
              <Label>Risk : Return</Label>
              <Input
                type="number"
                value={riskReturn}
                onChange={(e) => setRiskReturn(e.target.value)}
                className="bg-gray-800 border-gray-700"
              />
            </div>
          </div>

          <div>
            <Label>Trade Outcome</Label>
            <Select value={outcome} onValueChange={setOutcome}>
              <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
                <SelectValue placeholder="Select outcome" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="win">WIN</SelectItem>
                <SelectItem value="loss">LOSS</SelectItem>
                <SelectItem value="be">BREAK EVEN</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="strike-rate"
                checked={strikeRate}
                onCheckedChange={(checked) => setStrikeRate(checked as boolean)}
              />
              <Label htmlFor="strike-rate">Strike rate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="follow-rules"
                checked={followRules}
                onCheckedChange={(checked) => setFollowRules(checked as boolean)}
              />
              <Label htmlFor="follow-rules">Follow Rules</Label>
            </div>
          </div>

          <div>
            <Label>Post Trade Analysis</Label>
            <Textarea
              value={postTradeAnalysis}
              onChange={(e) => setPostTradeAnalysis(e.target.value)}
              className="mt-2 bg-gray-800 border-gray-700"
              placeholder="Enter your post-trade analysis..."
            />
          </div>

          <div>
            <Label>Emotions Before Trade (1-6)</Label>
            <Slider
              value={emotionsBefore}
              onValueChange={setEmotionsBefore}
              max={6}
              min={1}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Emotions After Trade (1-6)</Label>
            <Slider
              value={emotionsAfter}
              onValueChange={setEmotionsAfter}
              max={6}
              min={1}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Transcending Judgment</Label>
            <Textarea
              value={transcendingJudgment}
              onChange={(e) => setTranscendingJudgment(e.target.value)}
              className="mt-2 bg-gray-800 border-gray-700"
              placeholder="Enter your transcending judgment..."
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Entry</Button>
          </div>
        </div>
      </div>
    </div>
  )
}


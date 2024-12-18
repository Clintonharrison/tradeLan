'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TradingQuestionnaire() {
  const [formData, setFormData] = useState({
    experience: '',
    riskTolerance: 5,
    tradingGoals: '',
    timeHorizon: '',
    emotionalTriggers: '',
    preferredMarkets: [],
    tradingStyle: '',
    analysisMethod: '',
    maxDrawdown: '',
    learningStyle: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSliderChange = (value: number[]) => {
    setFormData(prev => ({ ...prev, riskTolerance: value[0] }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Questionnaire submitted:', formData)
    // Here you would typically send the data to your backend or AI system
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Trading Questionnaire</h2>

      <div>
        <Label htmlFor="experience">1. How many years of trading experience do you have?</Label>
        <Input
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          placeholder="e.g., 2 years"
        />
      </div>

      <div>
        <Label>2. On a scale of 1-10, how would you rate your risk tolerance? (1 being very low, 10 being very high)</Label>
        <Slider
          min={1}
          max={10}
          step={1}
          value={[formData.riskTolerance]}
          onValueChange={handleSliderChange}
        />
        <div className="text-center mt-2">{formData.riskTolerance}</div>
      </div>

      <div>
        <Label htmlFor="tradingGoals">3. What are your primary trading goals?</Label>
        <Textarea
          id="tradingGoals"
          name="tradingGoals"
          value={formData.tradingGoals}
          onChange={handleInputChange}
          placeholder="e.g., Generate consistent income, Build long-term wealth"
        />
      </div>

      <div>
        <Label htmlFor="timeHorizon">4. What is your typical trading time horizon?</Label>
        <Select onValueChange={(value) => handleSelectChange('timeHorizon', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select time horizon" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="intraday">Intraday</SelectItem>
            <SelectItem value="swing">Swing trading (days to weeks)</SelectItem>
            <SelectItem value="position">Position trading (weeks to months)</SelectItem>
            <SelectItem value="longTerm">Long-term investing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="emotionalTriggers">5. What are your main emotional triggers when trading?</Label>
        <Textarea
          id="emotionalTriggers"
          name="emotionalTriggers"
          value={formData.emotionalTriggers}
          onChange={handleInputChange}
          placeholder="e.g., Fear of missing out, Anxiety during drawdowns"
        />
      </div>

      <div>
        <Label>6. Which markets do you prefer to trade? (Select all that apply)</Label>
        <div className="grid grid-cols-2 gap-4">
          {['Stocks', 'Forex', 'Cryptocurrencies', 'Commodities', 'Options', 'Futures'].map((market) => (
            <label key={market} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={market}
                checked={formData.preferredMarkets.includes(market)}
                onChange={(e) => {
                  const updatedMarkets = e.target.checked
                    ? [...formData.preferredMarkets, market]
                    : formData.preferredMarkets.filter(m => m !== market)
                  setFormData(prev => ({ ...prev, preferredMarkets: updatedMarkets }))
                }}
              />
              <span>{market}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label>7. How would you describe your trading style?</Label>
        <RadioGroup onValueChange={(value) => handleSelectChange('tradingStyle', value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="scalping" id="scalping" />
            <Label htmlFor="scalping">Scalping</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dayTrading" id="dayTrading" />
            <Label htmlFor="dayTrading">Day Trading</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="swingTrading" id="swingTrading" />
            <Label htmlFor="swingTrading">Swing Trading</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="positionTrading" id="positionTrading" />
            <Label htmlFor="positionTrading">Position Trading</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label>8. What is your primary method of analysis?</Label>
        <Select onValueChange={(value) => handleSelectChange('analysisMethod', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select analysis method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technical">Technical Analysis</SelectItem>
            <SelectItem value="fundamental">Fundamental Analysis</SelectItem>
            <SelectItem value="sentiment">Sentiment Analysis</SelectItem>
            <SelectItem value="quantitative">Quantitative Analysis</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="maxDrawdown">9. What is the maximum drawdown you can tolerate in your trading account?</Label>
        <Input
          id="maxDrawdown"
          name="maxDrawdown"
          value={formData.maxDrawdown}
          onChange={handleInputChange}
          placeholder="e.g., 20%"
        />
      </div>

      <div>
        <Label>10. How do you prefer to learn and improve your trading skills?</Label>
        <Select onValueChange={(value) => handleSelectChange('learningStyle', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select learning style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="books">Reading books and articles</SelectItem>
            <SelectItem value="videos">Watching educational videos</SelectItem>
            <SelectItem value="mentorship">One-on-one mentorship</SelectItem>
            <SelectItem value="practice">Practice through demo trading</SelectItem>
            <SelectItem value="community">Participating in trading communities</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Submit Questionnaire</Button>
    </form>
  )
}


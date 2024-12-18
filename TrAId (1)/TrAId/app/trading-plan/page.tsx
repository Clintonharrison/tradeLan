'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { FileUpload } from '@/components/FileUpload'

export default function TradingPlan() {
  const [tradingStatus, setTradingStatus] = useState('')
  const [loveTradingReason, setLoveTradingReason] = useState('')
  const [expectations, setExpectations] = useState('')
  const [fulfillment, setFulfillment] = useState('')
  const [distress, setDistress] = useState('')
  const [strengths, setStrengths] = useState(['', '', '', '', ''])
  const [weaknesses, setWeaknesses] = useState(['', '', '', '', ''])
  const [skillsToAcquire, setSkillsToAcquire] = useState('')
  const [goodDayStatement, setGoodDayStatement] = useState('')
  const [badDayStatement, setBadDayStatement] = useState('')
  const [auditResult, setAuditResult] = useState(null)

  // New state variables for strategy section
  const [strategyName, setStrategyName] = useState('')
  const [strategyObjectives, setStrategyObjectives] = useState('')
  const [strategyContext, setStrategyContext] = useState('')
  const [pairs, setPairs] = useState('')
  const [timeFrames, setTimeFrames] = useState('')
  const [indicators, setIndicators] = useState('')
  const [scriptsEA, setScriptsEA] = useState('')
  const [chartSetup, setChartSetup] = useState('')
  const [setupVariations, setSetupVariations] = useState('')
  const [entrySignal, setEntrySignal] = useState('')
  const [highQualitySignal, setHighQualitySignal] = useState('')
  const [lowQualitySignal, setLowQualitySignal] = useState('')
  const [orderType, setOrderType] = useState({
    market: false,
    limit: false,
    stop: false,
  })
  const [noTradeConditions, setNoTradeConditions] = useState('')
  const [stopLoss, setStopLoss] = useState('')
  const [takeProfit, setTakeProfit] = useState('')
  const [tpQualityLevel, setTpQualityLevel] = useState('')
  const [tradeManagement, setTradeManagement] = useState({
    scaleIn: false,
    scaleOut: false,
    trailingStop: false,
  })
  const [managementDescription, setManagementDescription] = useState('')
  const [adverseManagement, setAdverseManagement] = useState({
    scaleIn: false,
    scaleOut: false,
    hedge: false,
  })
  const [adverseDescription, setAdverseDescription] = useState('')
  const [dailyTarget, setDailyTarget] = useState('')
  const [dailyLoss, setDailyLoss] = useState('')
  const [timeLimit, setTimeLimit] = useState('')

  // New state variables for managing the view and uploaded file
  const [view, setView] = useState<'upload' | 'guide'>('upload')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)


  const handleStrengthChange = (index: number, value: string) => {
    const newStrengths = [...strengths]
    newStrengths[index] = value
    setStrengths(newStrengths)
  }

  const handleWeaknessChange = (index: number, value: string) => {
    const newWeaknesses = [...weaknesses]
    newWeaknesses[index] = value
    setWeaknesses(newWeaknesses)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  const handleAudit = async () => {
    try {
      const response = await fetch('/api/audit-trading-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tradingStatus,
          loveTradingReason,
          expectations,
          fulfillment,
          distress,
          strengths,
          weaknesses,
          skillsToAcquire,
          goodDayStatement,
          badDayStatement,
          strategyName,
          strategyObjectives,
          strategyContext,
          pairs,
          timeFrames,
          indicators,
          scriptsEA,
          chartSetup,
          setupVariations,
          entrySignal,
          highQualitySignal,
          lowQualitySignal,
          orderType,
          noTradeConditions,
          stopLoss,
          takeProfit,
          tpQualityLevel,
          tradeManagement,
          managementDescription,
          adverseManagement,
          adverseDescription,
          dailyTarget,
          dailyLoss,
          timeLimit,
        }),
      })
      const data = await response.json()
      if (response.ok) {
        setAuditResult(data)
      } else {
        throw new Error(data.error || 'An error occurred while auditing the trading plan')
      }
    } catch (error) {
      console.error('Error auditing trading plan:', error)
      setAuditResult({ error: error.message || 'Failed to audit trading plan' })
    }
  }

  const handleFileUpload = (file: File) => {
    setUploadedFile(file)
    // Here you would typically send the file to your backend
    console.log('File uploaded:', file.name)
  }

  return (
    <div className="min-h-screen p-4 md:p-6 2xl:p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Trading Plan</h1>

      <div className="mb-8">
        <div className="flex space-x-4 mb-4">
          <Button
            variant={view === 'upload' ? 'default' : 'outline'}
            onClick={() => setView('upload')}
          >
            Upload Existing Plan
          </Button>
          <Button
            variant={view === 'guide' ? 'default' : 'outline'}
            onClick={() => setView('guide')}
          >
            Use Guide to Build Plan
          </Button>
        </div>

        {view === 'upload' ? (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <FileUpload onFileUpload={handleFileUpload} />
            {uploadedFile && (
              <p className="mt-4 text-green-600 dark:text-green-400">
                Your trading plan has been uploaded successfully!
              </p>
            )}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="text-lg mb-4">A complete guide for building your Trading Plan</p>
            <p className="mb-4">The common problem that most forex traders deal with when first starting out is the lack of a proper trading plan. Diving into forex trading without a clear plan is like riding a bicycle without training wheels. Few traders realize the importance of a well-defined strategy and trading routine.</p>
            <p className="mb-4">A trading plan provides you with clear steps and actions to implement. Reduces improvisation and stress since you will know exactly what to do for every scenario.</p>
            <p className="mb-6">We are happy to present you with this guide for building your complete trading plan. We have done our part, now is your turn to commit to following this guide so you create your own trading plan. Let's start!</p>

            {/* Existing form content goes here */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Trading Objectives</h2>
                <RadioGroup value={tradingStatus} onValueChange={setTradingStatus}>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Full Time" id="fullTime" />
                      <Label htmlFor="fullTime">Full Time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Part Time" id="partTime" />
                      <Label htmlFor="partTime">Part Time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="For Fun" id="forFun" />
                      <Label htmlFor="forFun">For Fun</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="For Curiosity" id="forCuriosity" />
                      <Label htmlFor="forCuriosity">For Curiosity</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="loveTradingReason">Why do I love trading?</Label>
                <Textarea
                  id="loveTradingReason"
                  value={loveTradingReason}
                  onChange={(e) => setLoveTradingReason(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="expectations">What are my expectations from trading?</Label>
                <Textarea
                  id="expectations"
                  value={expectations}
                  onChange={(e) => setExpectations(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="fulfillment">When does trading fulfill me?</Label>
                <Textarea
                  id="fulfillment"
                  value={fulfillment}
                  onChange={(e) => setFulfillment(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="distress">When does trading distress me?</Label>
                <Textarea
                  id="distress"
                  value={distress}
                  onChange={(e) => setDistress(e.target.value)}
                />
              </div>

              <div>
                <Label>Name 5 strengths of you and how can they be used in trading?</Label>
                {strengths.map((strength, index) => (
                  <Input
                    key={index}
                    value={strength}
                    onChange={(e) => handleStrengthChange(index, e.target.value)}
                    placeholder={`Strength ${index + 1}`}
                    className="mb-2"
                  />
                ))}
              </div>

              <div>
                <Label>Name 5 weaknesses and how could you bypass them while trading:</Label>
                {weaknesses.map((weakness, index) => (
                  <Input
                    key={index}
                    value={weakness}
                    onChange={(e) => handleWeaknessChange(index, e.target.value)}
                    placeholder={`Weakness ${index + 1}`}
                    className="mb-2"
                  />
                ))}
              </div>

              <div>
                <Label htmlFor="skillsToAcquire">Key skills I still need to acquire:</Label>
                <Textarea
                  id="skillsToAcquire"
                  value={skillsToAcquire}
                  onChange={(e) => setSkillsToAcquire(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="goodDayStatement">Write down a statement for good trading days:</Label>
                <Textarea
                  id="goodDayStatement"
                  value={goodDayStatement}
                  onChange={(e) => setGoodDayStatement(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="badDayStatement">Write down a motivational statement for bad trading days:</Label>
                <Textarea
                  id="badDayStatement"
                  value={badDayStatement}
                  onChange={(e) => setBadDayStatement(e.target.value)}
                />
              </div>

              {/* New Building Your Strategy section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Building Your Strategy</h2>

                <div>
                  <Label htmlFor="strategyName">Strategy Name</Label>
                  <Input
                    id="strategyName"
                    value={strategyName}
                    onChange={(e) => setStrategyName(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="strategyObjectives">Strategy Objectives (describe your strategy)</Label>
                  <Textarea
                    id="strategyObjectives"
                    value={strategyObjectives}
                    onChange={(e) => setStrategyObjectives(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="strategyContext">Strategy Context (when does this strategy works better)</Label>
                  <Textarea
                    id="strategyContext"
                    value={strategyContext}
                    onChange={(e) => setStrategyContext(e.target.value)}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">1. Filters</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="pairs">Pairs</Label>
                      <Input
                        id="pairs"
                        value={pairs}
                        onChange={(e) => setPairs(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="timeFrames">Time Frames</Label>
                      <Input
                        id="timeFrames"
                        value={timeFrames}
                        onChange={(e) => setTimeFrames(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="indicators">Indicators</Label>
                      <Input
                        id="indicators"
                        value={indicators}
                        onChange={(e) => setIndicators(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="scriptsEA">Scripts/EA</Label>
                      <Input
                        id="scriptsEA"
                        value={scriptsEA}
                        onChange={(e) => setScriptsEA(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">2. Setup</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="chartSetup">What are you looking for in the charts</Label>
                      <Textarea
                        id="chartSetup"
                        value={chartSetup}
                        onChange={(e) => setChartSetup(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="setupVariations">What variations you know for this setup</Label>
                      <Textarea
                        id="setupVariations"
                        value={setupVariations}
                        onChange={(e) => setSetupVariations(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">3. Trigger</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="entrySignal">When will you enter a trade (entry signal)</Label>
                      <Textarea
                        id="entrySignal"
                        value={entrySignal}
                        onChange={(e) => setEntrySignal(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="highQualitySignal">What is a high quality signal</Label>
                      <Textarea
                        id="highQualitySignal"
                        value={highQualitySignal}
                        onChange={(e) => setHighQualitySignal(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lowQualitySignal">What is a low quality signal</Label>
                      <Textarea
                        id="lowQualitySignal"
                        value={lowQualitySignal}
                        onChange={(e) => setLowQualitySignal(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>How will you enter the trade (type order)</Label>
                      <div className="flex space-x-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="marketOrder"
                            checked={orderType.market}
                            onCheckedChange={(checked) =>
                              setOrderType(prev => ({ ...prev, market: checked as boolean }))
                            }
                          />
                          <Label htmlFor="marketOrder">Market order</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="limitOrder"
                            checked={orderType.limit}
                            onCheckedChange={(checked) =>
                              setOrderType(prev => ({ ...prev, limit: checked as boolean }))
                            }
                          />
                          <Label htmlFor="limitOrder">Limit order</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="stopOrder"
                            checked={orderType.stop}
                            onCheckedChange={(checked) =>
                              setOrderType(prev => ({ ...prev, stop: checked as boolean }))
                            }
                          />
                          <Label htmlFor="stopOrder">Stop order</Label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="noTradeConditions">When you should not trade the setup</Label>
                      <Textarea
                        id="noTradeConditions"
                        value={noTradeConditions}
                        onChange={(e) => setNoTradeConditions(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">4. Stop</h3>
                  <div>
                    <Label htmlFor="stopLoss">When will you exit the trade, where is your stop loss placed</Label>
                    <Textarea
                      id="stopLoss"
                      value={stopLoss}
                      onChange={(e) => setStopLoss(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">5. Target</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="takeProfit">Where is your take profit? Why there?</Label>
                      <Textarea
                        id="takeProfit"
                        value={takeProfit}
                        onChange={(e) => setTakeProfit(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="tpQualityLevel">What is a high quality TP level</Label>
                      <Textarea
                        id="tpQualityLevel"
                        value={tpQualityLevel}
                        onChange={(e) => setTpQualityLevel(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">6. Trade Management</h3>
                  <div className="space-y-4">
                    <div>
                      <Label>How will you manage the trade if it goes in your favor</Label>
                      <div className="flex space-x-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="scaleIn"
                            checked={tradeManagement.scaleIn}
                            onCheckedChange={(checked) =>
                              setTradeManagement(prev => ({ ...prev, scaleIn: checked as boolean }))
                            }
                          />
                          <Label htmlFor="scaleIn">Scale in</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="scaleOut"
                            checked={tradeManagement.scaleOut}
                            onCheckedChange={(checked) =>
                              setTradeManagement(prev => ({ ...prev, scaleOut: checked as boolean }))
                            }
                          />
                          <Label htmlFor="scaleOut">Scale out</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="trailingStop"
                            checked={tradeManagement.trailingStop}
                            onCheckedChange={(checked) =>
                              setTradeManagement(prev => ({ ...prev, trailingStop: checked as boolean }))
                            }
                          />
                          <Label htmlFor="trailingStop">Trailing Stop</Label>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Label htmlFor="managementDescription">Describe</Label>
                        <Textarea
                          id="managementDescription"
                          value={managementDescription}
                          onChange={(e) => setManagementDescription(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>How will you manage the trade if it goes against you</Label>
                      <div className="flex space-x-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="adverseScaleIn"
                            checked={adverseManagement.scaleIn}
                            onCheckedChange={(checked) =>
                              setAdverseManagement(prev => ({ ...prev, scaleIn: checked as boolean }))
                            }
                          />
                          <Label htmlFor="adverseScaleIn">Scale in</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="adverseScaleOut"
                            checked={adverseManagement.scaleOut}
                            onCheckedChange={(checked) =>
                              setAdverseManagement(prev => ({ ...prev, scaleOut: checked as boolean }))
                            }
                          />
                          <Label htmlFor="adverseScaleOut">Scale out</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="hedge"
                            checked={adverseManagement.hedge}
                            onCheckedChange={(checked) =>
                              setAdverseManagement(prev => ({ ...prev, hedge: checked as boolean }))
                            }
                          />
                          <Label htmlFor="hedge">Hedge</Label>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Label htmlFor="adverseDescription">Describe</Label>
                        <Textarea
                          id="adverseDescription"
                          value={adverseDescription}
                          onChange={(e) => setAdverseDescription(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>When will you stop trading?</Label>
                      <div className="space-y-2 mt-2">
                        <div>
                          <Label htmlFor="dailyTarget">Daily Target</Label>
                          <Input
                            id="dailyTarget"
                            value={dailyTarget}
                            onChange={(e) => setDailyTarget(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="dailyLoss">Daily Loss</Label>
                          <Input
                            id="dailyLoss"
                            value={dailyLoss}
                            onChange={(e) => setDailyLoss(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="timeLimit">Time limit</Label>
                          <Input
                            id="timeLimit"
                            value={timeLimit}
                            onChange={(e) => setTimeLimit(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button type="submit">Submit Trading Plan</Button>
                <Button type="button" onClick={handleAudit}>Audit Trading Plan</Button>
              </div>
            </form>

          </div>
        )}
      </div>

      {auditResult && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{auditResult.error ? 'Error' : 'AI Trading Plan Audit Results'}</CardTitle>
          </CardHeader>
          <CardContent>
            {auditResult.error ? (
              <p className="text-red-500">{auditResult.error}</p>
            ) : (
              <>
                <h3 className="text-lg font-semibold mb-2">Strengths:</h3>
                <ul className="list-disc pl-5 mb-4">
                  {auditResult.strengths && auditResult.strengths.map((strength: string, index: number) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mb-2">Areas for Improvement:</h3>
                <ul className="list-disc pl-5 mb-4">
                  {auditResult.areasForImprovement && auditResult.areasForImprovement.map((area: string, index: number) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mb-2">Suggestions:</h3>
                <ul className="list-disc pl-5 mb-4">
                  {auditResult.suggestions && auditResult.suggestions.map((suggestion: string, index: number) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
                <p className="font-semibold">Overall Rating: {auditResult.overallRating}/10</p>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}


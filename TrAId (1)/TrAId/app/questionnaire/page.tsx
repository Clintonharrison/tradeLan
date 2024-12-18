import { TradingQuestionnaire } from '@/components/TradingQuestionnaire'

export default function QuestionnairePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Trading Profile Questionnaire</h1>
      <p className="mb-8 text-muted-foreground">
        Complete this questionnaire to help our AI better understand your trading style and preferences.
        This information will be used to provide more personalized advice and insights.
      </p>
      <TradingQuestionnaire />
    </div>
  )
}


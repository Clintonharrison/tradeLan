import { NextResponse } from 'next/server'
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  const tradingPlan = await req.json()

  const prompt = `
    You are an AI trading expert. Please audit the following trading plan and provide feedback:
    ${JSON.stringify(tradingPlan)}

    Provide a detailed analysis covering:
    1. Strengths of the plan
    2. Areas for improvement
    3. Suggestions for enhancing the plan
    4. Overall rating (1-10)

    Format your response as JSON with the following structure:
    {
      "strengths": ["strength1", "strength2", ...],
      "areasForImprovement": ["area1", "area2", ...],
      "suggestions": ["suggestion1", "suggestion2", ...],
      "overallRating": number
    }
  `

  try {
    const { text } = await generateText({
      model: openai('gpt-4-turbo'),
      prompt: prompt,
    })

    const auditResult = JSON.parse(text)
    return NextResponse.json(auditResult)
  } catch (error) {
    console.error('Error auditing trading plan:', error)
    if (error.name === 'AI_LoadAPIKeyError') {
      return NextResponse.json({ error: 'API key not configured properly' }, { status: 500 })
    }
    return NextResponse.json({ error: 'Failed to audit trading plan' }, { status: 500 })
  }
}


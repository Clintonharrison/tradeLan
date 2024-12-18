import { NextResponse } from 'next/server'
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  const { userInput } = await req.json()

  const prompt = `
    You are an AI trading coach. A trader has asked you the following question:
    "${userInput}"

    Provide a helpful, supportive, and insightful response that addresses the trader's question
    and helps them improve their trading mindset and decision-making process. Focus on
    emotional regulation, risk management, and adherence to their trading plan.
  `

  try {
    const { text } = await generateText({
      model: openai('gpt-4-turbo'),
      prompt: prompt,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error('Error getting AI coach response:', error)
    return NextResponse.json({ error: 'Failed to get AI coach response' }, { status: 500 })
  }
}


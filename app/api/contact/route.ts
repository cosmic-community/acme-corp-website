import { NextResponse } from 'next/server'
import { createContactSubmission } from '@/lib/cosmic'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }
    
    // Create contact submission in Cosmic
    const submission = await createContactSubmission(data)
    
    return NextResponse.json({ success: true, submission })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
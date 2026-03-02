import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key')

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    const { name, email, phone, course, message } = await request.json()

    const { data, error } = await resend.emails.send({
      from: 'RNR Global Academy <onboarding@resend.dev>',
      to: ['globalacademy1106@gmail.com'],
      subject: `New Admission Application - ${name}`,
      html: `
        <h2>New Admission Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type EnquiryPayload = {
  name?: string
  company?: string
  email?: string
  phone?: string
  message?: string
}

const recipient = "info@ragasgroups.com"

export async function POST(request: Request) {
  let payload: EnquiryPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 })
  }

  const name = payload.name?.trim()
  const company = payload.company?.trim()
  const email = payload.email?.trim()
  const phone = payload.phone?.trim()
  const message = payload.message?.trim()

  if (!name || !company || !email || !phone || !message) {
    return NextResponse.json({ error: "Please fill in all enquiry fields." }, { status: 400 })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || 587)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpFrom = process.env.SMTP_FROM || smtpUser

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
    return NextResponse.json({ error: "Email service is not configured yet." }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: recipient,
      replyTo: email,
      subject: `Ragas Shipping Enquiry from ${name}`,
      text:
        `Name: ${name}\n` +
        `Company: ${company}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `How can we help?: ${message}`,
    })
  } catch {
    return NextResponse.json({ error: "Unable to send enquiry right now." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

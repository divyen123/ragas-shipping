"use client"

import Image from "next/image"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    const subject = encodeURIComponent(`Ragas Shipping Enquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Company: ${company}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`
    )

    window.location.href = `mailto:ragasshipping@zohomail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <Image
        src="/singapore-port.png"
        alt="Singapore waterfront and port at blue hour"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="text-white">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean">
                Get in Touch
              </span>
              <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight md:text-4xl">
                Let&apos;s chart your next voyage
              </h2>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/75">
                Whether you need to charter a vessel, move bulk cargo, or secure
                competitive FOB &amp; CIF rates, our Singapore team is ready to help.
              </p>
            </Reveal>

            <div className="mt-9 space-y-4">
              {[
                { icon: MapPin, label: "Address", value: "No-1, Marne Road, #01-20, The Citron, Singapore – 208380" },
                { icon: Mail, label: "Email", value: "ragasshipping@zohomail.com" },
              ].map((c) => (
                <Reveal key={c.label}>
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-ocean ring-1 ring-white/15">
                      <c.icon className="size-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/55">
                        {c.label}
                      </div>
                      <div className="font-medium text-white">{c.value}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal y={40}>
            <form
              className="rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" id="name" placeholder="Your name" />
                <Field label="Company" id="company" placeholder="Company name" />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Email" id="email" type="email" placeholder="you@company.com" />
                <Field label="Phone" id="phone" placeholder="+65 ..." />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="text-sm font-medium text-white/85">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your cargo or chartering needs..."
                  className="mt-1.5 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-ocean focus:ring-2 focus:ring-ocean/30"
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ocean px-6 py-3.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.02]"
              >
                <Send className="size-4" />
                Send Enquiry
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-white/85">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-ocean focus:ring-2 focus:ring-ocean/30"
      />
    </div>
  )
}

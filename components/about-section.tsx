"use client"

import Image from "next/image"
import { ShieldCheck, Heart, Lightbulb, Leaf, Award } from "lucide-react"
import { Reveal } from "@/components/reveal"

const coreValues = [
  { icon: Heart, title: "Customer Commitment", text: "We place our customers at the core of our operations, prioritizing reliability, timeliness, and superior service." },
  { icon: ShieldCheck, title: "Integrity", text: "We adhere to the highest standards of ethical behaviour, transparency, and honesty in everything we do." },
  { icon: Lightbulb, title: "Innovation", text: "We foster a culture of continuous improvement, exploring new technologies to enhance logistics." },
  { icon: Leaf, title: "Sustainability", text: "We are dedicated to reducing the environmental impact of our operations through sustainable practices." },
  { icon: Award, title: "Excellence", text: "Excellence is ingrained in every aspect of our operations to deliver optimal results." },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy/20">
              <Image
                src="/tanker.jpg"
                alt="Large container ship carrying cargo"
                width={900}
                height={700}
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean">
              Why Choose Ragas Shipping
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Renowned global shipping and logistics
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Ragas Shipping Pte Ltd is a renowned global shipping and logistics company
              that has carved a prominent space in the international shipping market. With
              a rich history in shipping, the company has built a reputation in delivering
              reliable, cost-effective, and timely transportation and supply-chain
              services across the globe. Today, we operate in more than seven countries,
              facilitating seamless trade and transportation solutions that connect
              continents and industries alike.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

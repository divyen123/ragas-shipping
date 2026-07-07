"use client"

import { motion } from "motion/react"
import { Reveal } from "@/components/reveal"
import { TypewriterText } from "@/components/typewriter-text"

const capabilityItems = [
  "Coordinating single cargo parcels as well as long-term supply programs.",
  "Managing complex cross-border commodity transactions.",
  "Coordinating with internationally recognized inspection companies and surveyors.",
  "Supporting buyers and sellers throughout the complete transaction cycle.",
  "Managing marine documentation, logistics planning, vessel nominations, and loading operations.",
  "Working with experienced legal and financial professionals to ensure secure and compliant transactions.",
]

const commitmentItems = [
  "Conducting business with honesty, transparency, and integrity.",
  "Delivering reliable and commercially competitive solutions.",
  "Maintaining strict compliance with international trade and maritime regulations.",
  "Providing responsive customer service and professional operational support.",
  "Building strategic partnerships that create sustainable value for all stakeholders.",
]

export function VisionSection() {
  return (
    <section id="vision" className="relative flex min-h-screen overflow-hidden bg-navy py-20 text-white md:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        {/* compass video */}
        <Reveal>
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-full shadow-2xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <video
                className="size-full scale-[1.22] object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/compass.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        </Reveal>

        <div className="min-h-0">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean">
              Vision & Mission
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight md:text-4xl">
              <TypewriterText text="A clear bearing towards" />
              <br />
              <TypewriterText text="global excellence" delay={0.6} />
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="vision-scroll mt-7 max-h-[62vh] overflow-y-auto rounded-2xl border border-white/10 bg-white/5 p-5 pr-4 shadow-2xl shadow-black/20 backdrop-blur-sm md:max-h-[68vh] md:p-6">
              <div className="space-y-7 text-sm leading-relaxed text-white/72 md:text-base">
                <section>
                  <h3 className="font-heading text-xl font-bold text-white">Our Capability</h3>
                  <p className="mt-3">
                    Our operational knowledge and extensive industry network enable us to facilitate transactions across major international trading hubs, including the Middle East, Southeast Asia, Europe, and other strategic energy markets.
                  </p>
                  <p className="mt-4 font-semibold text-white/90">Our capabilities include:</p>
                  <ul className="mt-3 space-y-2 pl-5">
                    {capabilityItems.map((item) => (
                      <li key={item} className="list-disc marker:text-ocean">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">
                    Every transaction is handled with careful attention to operational efficiency, commercial transparency, regulatory compliance, and risk management.
                  </p>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-bold text-white">Our Commitment</h3>
                  <p className="mt-3">
                    At RAGAS Group, we believe that successful business is built on trust, professionalism, and long-term relationships.
                  </p>
                  <p className="mt-4 font-semibold text-white/90">We are committed to:</p>
                  <ul className="mt-3 space-y-2 pl-5">
                    {commitmentItems.map((item) => (
                      <li key={item} className="list-disc marker:text-ocean">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-bold text-white">Our Vision</h3>
                  <p className="mt-3">
                    To become one of the world's most trusted marine, energy, and commodity trading companies by connecting global suppliers and buyers through innovative, transparent, and dependable commercial solutions.
                  </p>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-bold text-white">Our Mission</h3>
                  <p className="mt-3">
                    Our mission is to simplify international commodity trading by combining maritime expertise, operational excellence, and commercial innovation. We strive to deliver efficient supply-chain solutions, create lasting partnerships, and contribute to the sustainable growth of the global marine and energy industries.
                  </p>
                </section>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "motion/react"
import { Eye, Target, Leaf } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function VisionSection() {
  return (
    <section id="vision" className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
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

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean">
              Vision & Mission
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight md:text-4xl">
              A clear bearing towards global excellence
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be the most trusted and innovative logistics provider in the world, leveraging cutting-edge technologies and relationships to make global trade simpler, faster, and more sustainable.",
              },
              {
                icon: Target,
                title: "Our Mission",
                text: "To deliver unparalleled shipping solutions that simplify the complexities of global trade through customer satisfaction, technological advancement, and sustainable practices.",
              },
              {
                icon: Leaf,
                title: "Future Outlook",
                text: "Focused on expanding into new markets, integrating emerging technologies (AI, IoT, blockchain) to improve efficiency, and prioritizing green technologies.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-ocean/40">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ocean/15 text-ocean">
                    <v.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from "framer-motion";
import { Boxes, Rocket, Gauge } from "lucide-react";
import { Section } from "./Section";

const cards = [
  {
    icon: Boxes,
    title: "Build LLM Systems",
    desc: "Design RAG pipelines, agentic workflows, and prompt architectures with LangChain that turn raw models into reliable products.",
    points: ["Retrieval design", "LangChain orchestration", "Tool / function calling"],
  },
  {
    icon: Rocket,
    title: "Deploy to Production",
    desc: "Ship AI to real users — PostgreSQL-backed services, clean APIs, low latency, and observability from day one.",
    points: ["API integration", "PostgreSQL + vector stores", "Latency optimization"],
  },
  {
    icon: Gauge,
    title: "Evaluate & Improve AI Quality",
    desc: "Build evaluation harnesses and feedback loops that surface hallucinations and regressions before users ever see them.",
    points: ["Eval frameworks", "Hallucination reduction", "Quality monitoring"],
  },
];

export function WhatIBring() {
  return (
    <Section
      id="value"
      eyebrow="What I Bring"
      title="To the table"
      subtitle="Three things I do really well — end-to-end."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-gradient border-glow group relative overflow-hidden rounded-2xl p-7"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-opacity group-hover:opacity-90" />
            <div className="relative">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-secondary/25 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <c.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <ul className="mt-5 space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_oklch(0.78_0.18_200/80%)]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
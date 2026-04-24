import { motion } from "framer-motion";
import { Flame, Zap, Sparkles } from "lucide-react";
import { Section } from "./Section";

const levels = [
  {
    label: "Expert",
    icon: Flame,
    accent: "text-primary",
    ring: "border-primary/50",
    glow: "shadow-[0_0_30px_oklch(0.78_0.18_200/30%)]",
    desc: "Ship daily, design from scratch, mentor others.",
    skills: ["LLMs", "RAG Pipelines", "LangChain", "Prompting", "Python"],
  },
  {
    label: "Proficient",
    icon: Zap,
    accent: "text-secondary",
    ring: "border-secondary/50",
    glow: "shadow-[0_0_30px_oklch(0.65_0.25_295/30%)]",
    desc: "Comfortable in production. Solve real problems independently.",
    skills: ["PostgreSQL", "APIs", "SQL", "Machine Learning", "Statistical Modeling", "Cursor"],
  },
  {
    label: "Familiar",
    icon: Sparkles,
    accent: "text-accent",
    ring: "border-accent/50",
    glow: "shadow-[0_0_30px_oklch(0.7_0.2_250/25%)]",
    desc: "Working knowledge. Can pick up quickly when needed.",
    skills: ["R Programming", "Tableau", "Data Visualization", "Excel"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The toolkit"
      subtitle="Grouped by proficiency — honest about where I'm sharpest."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {levels.map((lvl, i) => (
          <motion.div
            key={lvl.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`card-gradient relative overflow-hidden rounded-2xl border ${lvl.ring} p-6 transition-all hover:-translate-y-1 ${lvl.glow}`}
          >
            <div className="mb-5 flex items-center justify-between">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-muted/60 ${lvl.accent}`}>
                <lvl.icon size={20} />
              </div>
              <span className={`font-mono text-xs uppercase tracking-[0.2em] ${lvl.accent}`}>
                {lvl.label}
              </span>
            </div>
            <p className="mb-5 text-sm text-muted-foreground">{lvl.desc}</p>
            <div className="flex flex-wrap gap-2">
              {lvl.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-foreground/90 transition-all hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
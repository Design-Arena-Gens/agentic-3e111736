"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type StackStory = {
  id: "react" | "angular";
  label: string;
  description: string;
  highlights: string[];
  meta: string;
};

type Project = {
  name: string;
  summary: string;
  stack: string[];
  outcome: string;
};

const stackStories: StackStory[] = [
  {
    id: "react",
    label: "React delivery",
    description:
      "Crafting resilient Next.js surfaces with attention to motion, accessibility, and data handling.",
    highlights: [
      "React Server Components with suspense-driven loading states.",
      "Design tokens + Storybook pipeline to keep designers and engineers in sync.",
      "SPA fallbacks with TanStack Query and streaming API boundaries."
    ],
    meta: "Primary toolkit — 3y of production experience."
  },
  {
    id: "angular",
    label: "Angular architecture",
    description:
      "Standalone Angular experiences that plug into React shells, powered by signals and strict typing.",
    highlights: [
      "Signal-driven state orchestration that replaced NgRx boilerplate in complex data flows.",
      "Dynamic form builder shared with React via Angular Elements.",
      "Nx monorepo governance with typed APIs and contract tests."
    ],
    meta: "Angular specialist on mixed-stack squads."
  }
];

const projects: Project[] = [
  {
    name: "Creator Launchpad",
    summary:
      "React + Next.js growth funnel that visualises milestones in real-time with collaborative cursors.",
    stack: ["React 19", "Next.js 16", "tRPC", "Supabase"],
    outcome: "Activation rate +18% after adaptive onboarding rollout."
  },
  {
    name: "Ops Blueprint Studio",
    summary:
      "Angular command centre with 40+ reusable modules and contextual charts for fulfilment routing.",
    stack: ["Angular 17", "Signals", "RxJS", "D3"],
    outcome: "Order routing errors decreased by 32% in the first quarter."
  },
  {
    name: "Unified Design System",
    summary:
      "Dual-framework component library shipping React + Angular packages from one token source.",
    stack: ["Storybook", "Changesets", "Style Dictionary", "Jest"],
    outcome: "Cut UI divergence bugs by 45% across 9 product teams."
  }
];

const timeline = [
  {
    period: "2023 — Present",
    role: "Frontend Engineer · PulseAudio SaaS",
    detail:
      "Leading the React migration of analytics surfaces while embedding Angular widgets for partner portals."
  },
  {
    period: "2021 — 2023",
    role: "UI Developer · Northwind Retail Platform",
    detail:
      "Launched modular Angular workflows and prototyped growth experiments in React for rapid validation."
  }
];

const quickStats = [
  { label: "Design system rollouts", value: "3" },
  { label: "A/B experiments shipped", value: "26" },
  { label: "Cross-team guilds led", value: "5" }
];

export default function Home() {
  const [activeStackId, setActiveStackId] = useState<StackStory["id"]>("react");
  const activeStack = useMemo(
    () => stackStories.find((story) => story.id === activeStackId) ?? stackStories[0],
    [activeStackId]
  );

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Frontend engineer · React & Angular</p>
          <h1>
            Avery Carter designs calm, resilient product experiences that bridge both ecosystems.
          </h1>
          <p className={styles.deck}>
            Three years of shipping data-rich SaaS surfaces, weaving together React velocity with
            Angular structure to help teams land ambitious launches without regressions.
          </p>
          <div className={styles.heroCtas}>
            <a className={styles.primaryCta} href="mailto:avery.carter@devmail.dev">
              Schedule a chemistry call
            </a>
            <a
              className={styles.secondaryCta}
              href="https://read.cv/averycarter"
              target="_blank"
              rel="noopener noreferrer"
            >
              View live resume
            </a>
          </div>
        </div>
        <aside className={styles.stats}>
          {quickStats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </aside>
      </header>

      <section className={styles.stackSection}>
        <header>
          <h2>Full-spectrum delivery</h2>
          <p>
            Balanced impact across both ecosystems — React for rapid product iteration, Angular for
            disciplined platform work.
          </p>
        </header>
        <div className={styles.stackTabs}>
          {stackStories.map((story) => (
            <button
              key={story.id}
              type="button"
              onClick={() => setActiveStackId(story.id)}
              className={`${styles.stackTab} ${
                activeStackId === story.id ? styles.stackTabActive : ""
              }`}
            >
              {story.label}
            </button>
          ))}
        </div>
        <article className={styles.stackPanel}>
          <div>
            <h3>{activeStack.label}</h3>
            <p>{activeStack.description}</p>
            <p className={styles.stackMeta}>{activeStack.meta}</p>
          </div>
          <ul>
            {activeStack.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.projectsSection}>
        <header>
          <h2>Selected work</h2>
          <p>Impact snapshots from the past three years.</p>
        </header>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.name} className={styles.projectCard}>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.outcome}>{project.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.timelineSection}>
        <header>
          <h2>Experience</h2>
          <p>A blend of growth squads, platform pods, and design system stewardship.</p>
        </header>
        <div className={styles.timelineCards}>
          {timeline.map((entry) => (
            <article key={entry.period} className={styles.timelineCard}>
              <p className={styles.timelinePeriod}>{entry.period}</p>
              <h3>{entry.role}</h3>
              <p>{entry.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.angularEmbed}>
        <header>
          <h2>Angular perspective</h2>
          <p>
            Explore a curated Angular experience built for the portfolio. It mirrors the same data
            and storytelling, rendered via an Angular micro-app.
          </p>
        </header>
        <div className={styles.embedShell}>
          <iframe
            title="Angular experience"
            src="/angular/index.html"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <h2>Let’s build calm, confident interfaces.</h2>
          <p>
            I thrive at the intersection of product strategy and implementation details — ensuring
            React and Angular initiatives land with polish.
          </p>
        </div>
        <nav className={styles.footerLinks}>
          <a href="mailto:avery.carter@devmail.dev">Email</a>
          <a href="https://www.linkedin.com/in/avery-carter" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/averycarter" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </footer>
    </div>
  );
}

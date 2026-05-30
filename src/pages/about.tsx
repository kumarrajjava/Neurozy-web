import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Zap, Target, Globe, Cpu, Users, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Innovation First',
    description:
      'We push the boundaries of what software can do, embedding AI at the core of every product we build.',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description:
      'Every line of code is crafted with intent — scalable, maintainable, and built to last.',
  },
  {
    icon: Globe,
    title: 'Global Vision',
    description:
      'We build products that transcend borders, designed for a worldwide audience from day one.',
  },
  {
    icon: Cpu,
    title: 'AI-Native Approach',
    description:
      'Artificial intelligence is not an add-on for us — it is the foundation of our entire development philosophy.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description:
      'Your success is our metric. We align our roadmap with your business goals, not the other way around.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Growth',
    description:
      'We think in decades, not sprints. Our products are designed to scale with your ambitions.',
  },
];

const milestones = [
  { year: '2025', event: 'Neurozy founded with a vision to build AI-native software products.' },
  { year: '2025', event: 'First internal product prototype developed and tested.' },
  { year: '2026', event: 'Expanded team and launched development of flagship products.' },
  { year: '2026', event: 'Began onboarding first external clients and partners.' },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us — Neurozy</title>
        <meta
          name="description"
          content="Learn about Neurozy — a next-gen AI software development company building intelligent, scalable applications for businesses and entrepreneurs worldwide."
        />
      </Helmet>

      <main>
        {/* Hero */}
        <section
          className="relative py-28 overflow-hidden"
          style={{ background: '#050b1f' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 70%)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                color: '#00e5ff',
                border: '1px solid rgba(0,229,255,0.4)',
                background: 'rgba(0,229,255,0.06)',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.15em',
              }}
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold mb-6"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(40px, 6vw, 76px)',
                color: '#ffffff',
                lineHeight: 1.05,
              }}
            >
              We Build Software That{' '}
              <span
                style={{
                  color: '#00e5ff',
                  textShadow: '0 0 40px rgba(0,229,255,0.35)',
                }}
              >
                Thinks
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{
                color: '#c8d8f0',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Neurozy is an AI-driven software development company on a mission to build a
              billion-dollar ecosystem of intelligent, scalable digital products.
            </motion.p>
          </div>
        </section>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(0,229,255,0.15)' }} />

        {/* Mission & Vision */}
        <section className="py-24" style={{ background: '#0a0e2e' }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                label: 'Our Mission',
                text:
                  'To democratize access to intelligent software — empowering businesses of every size with AI-powered tools that were once reserved for tech giants.',
              },
              {
                label: 'Our Vision',
                text:
                  'A world where every business runs on intelligent software. We are building the infrastructure, products, and partnerships to make that future a reality.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const }}
                className="rounded-2xl p-8"
                style={{
                  background: '#0d1b4b',
                  border: '1px solid rgba(0,229,255,0.2)',
                  borderLeft: '4px solid #00e5ff',
                }}
              >
                <span
                  className="text-xs font-semibold tracking-widest uppercase block mb-4"
                  style={{
                    color: '#00e5ff',
                    fontFamily: 'DM Sans, sans-serif',
                    letterSpacing: '0.15em',
                  }}
                >
                  {item.label}
                </span>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: '#c8d8f0',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '17px',
                  }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24" style={{ background: '#050b1f' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <h2
                className="font-semibold mb-4"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: '#ffffff',
                }}
              >
                What We{' '}
                <span
                  style={{
                    color: '#00e5ff',
                    textShadow: '0 0 30px rgba(0,229,255,0.3)',
                  }}
                >
                  Stand For
                </span>
              </h2>
              <p
                className="text-base max-w-xl"
                style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
              >
                Six principles that guide every decision, every product, and every line of code we
                write.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const }}
                    className="rounded-xl p-7 flex flex-col gap-4 transition-all duration-300 cursor-default"
                    style={{
                      background: '#0d1b4b',
                      border: '1px solid rgba(0,229,255,0.15)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        'rgba(0,229,255,0.4)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        '0 0 24px rgba(0,229,255,0.07)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        'rgba(0,229,255,0.15)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(0,229,255,0.1)',
                        border: '1px solid rgba(0,229,255,0.25)',
                      }}
                    >
                      <Icon size={20} style={{ color: '#00e5ff' }} />
                    </div>
                    <h3
                      className="font-semibold text-lg"
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        color: '#ffffff',
                      }}
                    >
                      {val.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: '#c8d8f0',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      {val.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24" style={{ background: '#0a0e2e' }}>
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-semibold mb-14"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: '#ffffff',
              }}
            >
              Our{' '}
              <span
                style={{
                  color: '#00e5ff',
                  textShadow: '0 0 30px rgba(0,229,255,0.3)',
                }}
              >
                Journey
              </span>
            </motion.h2>

            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div
                className="absolute left-[88px] top-0 bottom-0 w-px hidden sm:block"
                style={{ background: 'rgba(0,229,255,0.2)' }}
              />

              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
                  className="flex flex-col sm:flex-row items-start gap-6 pb-10 last:pb-0"
                >
                  {/* Year */}
                  <div
                    className="shrink-0 w-20 text-right hidden sm:block"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#00e5ff',
                      paddingTop: '2px',
                    }}
                  >
                    {m.year}
                  </div>

                  {/* Dot */}
                  <div className="relative shrink-0 hidden sm:flex items-center justify-center">
                    <div
                      className="w-3 h-3 rounded-full mt-1"
                      style={{
                        background: '#00e5ff',
                        boxShadow: '0 0 10px rgba(0,229,255,0.6)',
                      }}
                    />
                  </div>

                  {/* Event */}
                  <div
                    className="rounded-xl px-6 py-4 flex-1"
                    style={{
                      background: '#0d1b4b',
                      border: '1px solid rgba(0,229,255,0.15)',
                    }}
                  >
                    <span
                      className="text-xs font-bold block mb-1 sm:hidden"
                      style={{ color: '#00e5ff', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {m.year}
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-24" style={{ background: '#050b1f' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-semibold mb-12"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: '#ffffff',
              }}
            >
              The{' '}
              <span
                style={{
                  color: '#00e5ff',
                  textShadow: '0 0 30px rgba(0,229,255,0.3)',
                }}
              >
                Mind Behind It
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 rounded-2xl p-8 md:p-10"
              style={{
                background: '#0d1b4b',
                border: '1px solid rgba(0,229,255,0.25)',
                borderLeft: '4px solid #00e5ff',
              }}
            >
              <div className="shrink-0">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    width: '140px',
                    height: '140px',
                    border: '2px solid rgba(0,229,255,0.5)',
                    boxShadow: '0 0 30px rgba(0,229,255,0.2)',
                  }}
                >
                  <img
                    src="/assets/images/founder.png"
                    alt="Raj Kumar - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 text-center md:text-left">
                <h3
                  className="font-bold text-2xl"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}
                >
                  Raj Kumar
                </h3>
                <span
                  className="text-sm font-semibold tracking-widest uppercase"
                  style={{
                    color: '#00e5ff',
                    fontFamily: 'DM Sans, sans-serif',
                    letterSpacing: '0.15em',
                  }}
                >
                  Founder &amp; CEO
                </span>
                <p
                  className="text-base leading-relaxed max-w-xl"
                  style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif', fontSize: '16px' }}
                >
                  A visionary technologist building scalable AI systems and long-term digital
                  products. Raj founded Neurozy with the belief that intelligent software should be
                  accessible to every business — not just the Fortune 500.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 text-center relative overflow-hidden"
          style={{ background: '#0a0e2e' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)',
            }}
          />
          <div className="relative max-w-2xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-bold mb-4"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(26px, 3vw, 40px)',
                color: '#ffffff',
              }}
            >
              Ready to Build Something{' '}
              <span style={{ color: '#00e5ff' }}>Intelligent?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 text-base"
              style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
            >
              Let's talk about how Neurozy can power your next product.
            </motion.p>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-block px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{
                background: '#00e5ff',
                color: '#050b1f',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  '0 0 28px rgba(0,229,255,0.45)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
              }}
            >
              Contact Us
            </motion.a>
          </div>
        </section>
      </main>
    </>
  );
}

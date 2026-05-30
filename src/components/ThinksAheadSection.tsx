import { motion } from 'motion/react';

const stats = [
  { number: '0', label: 'Projects Delivered' },
  { number: '0%', label: 'Client Satisfaction' },
  { number: '1+', label: 'Years Experience' },
];

export default function ThinksAheadSection() {
  return (
    <section className="py-24" style={{ background: '#0a0e2e' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="flex flex-col gap-6"
          >
            <h2
              className="font-semibold leading-tight"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: '#ffffff' }}>Software that </span>
              <span
                style={{
                  color: '#00e5ff',
                  textShadow: '0 0 30px rgba(0,229,255,0.3)',
                }}
              >
                Thinks Ahead
              </span>
            </h2>
            <p
              className="text-base leading-relaxed max-w-lg"
              style={{
                color: '#c8d8f0',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '17px',
              }}
            >
              Neurozy builds intelligent, scalable applications with a service-first approach and a
              long-term product vision.
            </p>
          </motion.div>

          {/* Right: Intro image with corner accents */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}
            className="relative"
          >
            {/* Corner accents */}
            <div
              className="absolute top-0 left-0 w-6 h-6 pointer-events-none"
              style={{
                borderTop: '2px solid #00e5ff',
                borderLeft: '2px solid #00e5ff',
              }}
            />
            <div
              className="absolute top-0 right-0 w-6 h-6 pointer-events-none"
              style={{
                borderTop: '2px solid #00e5ff',
                borderRight: '2px solid #00e5ff',
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-6 h-6 pointer-events-none"
              style={{
                borderBottom: '2px solid #00e5ff',
                borderLeft: '2px solid #00e5ff',
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none"
              style={{
                borderBottom: '2px solid #00e5ff',
                borderRight: '2px solid #00e5ff',
              }}
            />
            <img
              src="/assets/images/intro.jpg"
              alt="AI-powered tech workspace"
              className="w-full rounded-lg"
              style={{
                border: '1px solid rgba(0,229,255,0.2)',
                background: '#0d1b4b',
              }}
            />
          </motion.div>
        </div>

        {/* Bento stat grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const, delay: i * 0.1 }}
              className="rounded-xl p-8 flex flex-col gap-2 cursor-default transition-all duration-300"
              style={{
                background: '#0d1b4b',
                border: '1px solid rgba(0,229,255,0.2)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  'inset 0 0 40px rgba(0,229,255,0.06), 0 0 20px rgba(0,229,255,0.08)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,229,255,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,229,255,0.2)';
              }}
            >
              <span
                className="font-bold leading-none"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '64px',
                  color: '#00e5ff',
                  textShadow: '0 0 20px rgba(0,229,255,0.3)',
                }}
              >
                {stat.number}
              </span>
              <span
                className="text-sm font-medium tracking-wide uppercase"
                style={{
                  color: '#c8d8f0',
                  fontFamily: 'DM Sans, sans-serif',
                  letterSpacing: '0.1em',
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

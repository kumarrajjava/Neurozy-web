import { motion } from 'motion/react';

export default function FounderSection() {
  return (
    <section className="py-24" style={{ background: '#050b1f' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="font-semibold mb-12"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            color: '#ffffff',
          }}
        >
          Meet the{' '}
          <span
            style={{
              color: '#00e5ff',
              textShadow: '0 0 30px rgba(0,229,255,0.3)',
            }}
          >
            Founder
          </span>
        </motion.h2>

        {/* Founder card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 rounded-2xl p-8 md:p-10"
          style={{
            background: '#0d1b4b',
            border: '1px solid rgba(0,229,255,0.25)',
            borderLeft: '4px solid #00e5ff',
          }}
        >
          {/* Photo */}
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

          {/* Bio */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h3
              className="font-bold text-2xl"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#ffffff',
              }}
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
              style={{
                color: '#c8d8f0',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
              }}
            >
              A visionary technologist building scalable AI systems and long-term digital products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

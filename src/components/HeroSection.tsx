import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050b1f' }}
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
          className="flex flex-col gap-6"
        >
          {/* Eyebrow tag */}
          <span
            className="inline-flex self-start items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              color: '#00e5ff',
              border: '1px solid rgba(0,229,255,0.4)',
              background: 'rgba(0,229,255,0.06)',
              fontFamily: 'DM Sans, sans-serif',
              letterSpacing: '0.15em',
            }}
          >
            Next-Gen App Development
          </span>

          {/* H1 */}
          <div>
            <h1
              className="font-bold leading-none"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(52px, 8vw, 96px)',
                color: '#ffffff',
                lineHeight: 1.05,
              }}
            >
              Welcome to
            </h1>
            <h1
              className="font-bold leading-none"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(52px, 8vw, 96px)',
                color: '#00e5ff',
                lineHeight: 1.05,
                textShadow: '0 0 40px rgba(0,229,255,0.4), 0 0 80px rgba(0,229,255,0.15)',
              }}
            >
              Neurozy
            </h1>
          </div>

          {/* Subheading */}
          <p
            className="text-lg leading-relaxed max-w-lg"
            style={{
              color: '#c8d8f0',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '18px',
            }}
          >
            Building a billion-dollar software ecosystem with intelligent, scalable AI-driven
            applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/about"
              className="px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{
                background: '#00e5ff',
                color: '#050b1f',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#33ecff';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(0,229,255,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#00e5ff';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Started
            </Link>
            <Link
              to="/products"
              className="px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{
                color: '#ffffff',
                border: '1px solid rgba(0,229,255,0.6)',
                background: 'transparent',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,229,255,0.08)';
                e.currentTarget.style.borderColor = '#00e5ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)';
              }}
            >
              View Products
            </Link>
          </div>
        </motion.div>

        {/* Right: Brain Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const }}
            className="relative"
          >
            {/* Glow behind brain */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(0,229,255,0.25) 0%, transparent 70%)',
                transform: 'scale(1.3)',
              }}
            />
            <img
              src="/assets/images/brain.png"
              alt="AI Neural Brain"
              className="relative z-10"
              style={{
                width: 'clamp(280px, 40vw, 420px)',
                height: 'auto',
                filter: 'drop-shadow(0 0 40px rgba(0,229,255,0.35))',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'rgba(0,229,255,0.2)' }}
      />
    </section>
  );
}

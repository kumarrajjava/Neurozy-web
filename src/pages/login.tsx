import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Cpu, Shield, Zap } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const features = [
  { icon: Cpu, text: 'AI-powered product suite' },
  { icon: Shield, text: 'Enterprise-grade security' },
  { icon: Zap, text: 'Real-time analytics & insights' },
];

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    const ok = login(email, password);
    setLoading(false);
    if (ok) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  }

  function getInputStyle(field: string): React.CSSProperties {
    const focused = focusedField === field;
    return {
      background: 'rgba(5,11,31,0.8)',
      border: `1px solid ${focused ? '#00e5ff' : 'rgba(0,229,255,0.18)'}`,
      color: '#ffffff',
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '14px',
      borderRadius: '12px',
      padding: '13px 14px 13px 44px',
      width: '100%',
      outline: 'none',
      transition: 'all 0.2s',
      boxShadow: focused ? '0 0 0 3px rgba(0,229,255,0.1)' : 'none',
    };
  }

  return (
    <>
      <Helmet>
        <title>Sign In — Neurozy</title>
        <meta name="description" content="Sign in to your Neurozy AI dashboard." />
      </Helmet>

      <div
        className="min-h-screen flex relative overflow-hidden"
        style={{ background: '#050b1f', fontFamily: 'DM Sans, sans-serif' }}
      >
        {/* ── Left panel (branding) ── */}
        <div
          className="hidden lg:flex flex-col justify-between w-[46%] shrink-0 relative p-12 xl:p-16"
          style={{
            background: 'linear-gradient(135deg, #030810 0%, #0a1a3a 100%)',
            borderRight: '1px solid rgba(0,229,255,0.12)',
          }}
        >
          {/* Glow orb */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)',
              top: '10%',
              left: '-20%',
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(77,159,255,0.1) 0%, transparent 70%)',
              bottom: '15%',
              right: '-10%',
            }}
          />

          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/assets/images/neurozy-logo.png"
              alt="Neurozy"
              className="h-9 w-auto object-contain"
            />
          </motion.a>

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            {/* Brain image */}
            <div className="relative w-48 h-48">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)',
                  animation: 'pulse 3s ease-in-out infinite',
                }}
              />
              <img
                src="/assets/images/brain.png"
                alt="AI Brain"
                className="relative w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 0 24px rgba(0,229,255,0.4))' }}
              />
            </div>

            <div className="flex flex-col gap-3">
              <h2
                className="font-bold leading-tight"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(28px, 3vw, 38px)',
                  color: '#ffffff',
                }}
              >
                Software that{' '}
                <span
                  style={{
                    color: '#00e5ff',
                    textShadow: '0 0 20px rgba(0,229,255,0.4)',
                  }}
                >
                  Thinks Ahead
                </span>
              </h2>
              <p style={{ color: '#c8d8f0', fontSize: '15px', lineHeight: 1.7, maxWidth: 360 }}>
                Access your full Neurozy AI platform — manage products, monitor performance, and
                scale your intelligence.
              </p>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-3">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.text}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(0,229,255,0.1)',
                        border: '1px solid rgba(0,229,255,0.25)',
                      }}
                    >
                      <Icon size={15} style={{ color: '#00e5ff' }} />
                    </div>
                    <span style={{ color: '#c8d8f0', fontSize: '14px' }}>{f.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom */}
          <p style={{ color: '#2a3f5f', fontSize: '12px' }}>© 2025 Neurozy. All rights reserved.</p>
        </div>

        {/* ── Right panel (form) ── */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 relative">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          {/* Top glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: 400,
              height: 300,
              background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' as const }}
            className="relative w-full max-w-[420px]"
          >
            {/* Mobile logo */}
            <div className="flex lg:hidden justify-center mb-8">
              <a href="/">
                <img
                  src="/assets/images/neurozy-logo.png"
                  alt="Neurozy"
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-2 mb-8">
              <h1
                className="font-bold"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '28px',
                  color: '#ffffff',
                  lineHeight: 1.2,
                }}
              >
                Sign in to{' '}
                <span style={{ color: '#00e5ff' }}>Neurozy</span>
              </h1>
              <p style={{ color: '#4d6a8a', fontSize: '14px' }}>
                Enter your credentials to access the dashboard
              </p>
            </div>

            {/* Demo credentials pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 rounded-xl px-4 py-3 mb-6 cursor-pointer select-none"
              style={{
                background: 'rgba(0,229,255,0.05)',
                border: '1px solid rgba(0,229,255,0.18)',
              }}
              onClick={() => {
                setEmail('raj@neurozy.ai');
                setPassword('neurozy2026');
              }}
              title="Click to auto-fill demo credentials"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(0,229,255,0.12)', border: '1px solid rgba(0,229,255,0.3)' }}
              >
                <Zap size={13} style={{ color: '#00e5ff' }} />
              </div>
              <div className="flex flex-col">
                <span style={{ color: '#00e5ff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em' }}>
                  DEMO — CLICK TO AUTO-FILL
                </span>
                <span style={{ color: '#c8d8f0', fontSize: '12px' }}>
                  raj@neurozy.ai &nbsp;·&nbsp; neurozy2026
                </span>
              </div>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" style={{ color: '#c8d8f0', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: focusedField === 'email' ? '#00e5ff' : '#4d6a8a', transition: 'color 0.2s' }}
                  />
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="raj@neurozy.ai"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    style={getInputStyle('email')}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" style={{ color: '#c8d8f0', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
                    PASSWORD
                  </label>
                  <button
                    type="button"
                    style={{ color: '#00e5ff', fontSize: '12px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: focusedField === 'password' ? '#00e5ff' : '#4d6a8a', transition: 'color 0.2s' }}
                  />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="current-password"
                    placeholder="••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...getInputStyle('password'), paddingRight: '46px' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200"
                    style={{ color: '#4d6a8a', background: 'none', border: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = '#00e5ff')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = '#4d6a8a')}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label className="flex items-center gap-2.5 cursor-pointer select-none" style={{ marginTop: '-4px' }}>
                <div
                  onClick={() => setRememberMe((v) => !v)}
                  className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-200"
                  style={{
                    background: rememberMe ? '#00e5ff' : 'transparent',
                    border: `2px solid ${rememberMe ? '#00e5ff' : 'rgba(0,229,255,0.3)'}`,
                  }}
                >
                  {rememberMe && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="#050b1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span style={{ color: '#c8d8f0', fontSize: '13px' }}>Remember me for 30 days</span>
              </label>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 rounded-xl px-4 py-3"
                  style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.3)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#f87171' }} />
                  <span style={{ color: '#f87171', fontSize: '13px' }}>{error}</span>
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 mt-1 relative overflow-hidden"
                style={{
                  background: loading ? 'rgba(0,229,255,0.6)' : '#00e5ff',
                  color: '#050b1f',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '15px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 32px rgba(0,229,255,0.5)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Authenticating…
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="text-center mt-6" style={{ color: '#4d6a8a', fontSize: '13px' }}>
              Don't have an account?{' '}
              <a
                href="/contact"
                style={{ color: '#00e5ff', fontWeight: 600 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none')}
              >
                Request access
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

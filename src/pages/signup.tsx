import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Cpu, Shield, Zap, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Header from '@/layouts/parts/Header';

const features = [
  { icon: Cpu, text: 'AI-powered product suite' },
  { icon: Shield, text: 'Enterprise-grade security' },
  { icon: Zap, text: 'Real-time analytics & insights' },
];

export default function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    // Validation
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (!agreedToTerms) {
      setError('Please agree to the terms and conditions.');
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    
    // Create new account
    const ok = signup(fullName, email, password);
    setLoading(false);
    if (ok) {
      navigate('/dashboard');
    } else {
      setError('Email already registered. Please use a different email or sign in.');
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
        <title>Sign Up — Neurozy</title>
        <meta name="description" content="Create your Neurozy AI account and join our platform." />
      </Helmet>

      <Header />

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
                Start your{' '}
                <span
                  style={{
                    color: '#00e5ff',
                    textShadow: '0 0 20px rgba(0,229,255,0.4)',
                  }}
                >
                  AI Journey
                </span>
              </h2>
              <p style={{ color: '#c8d8f0', fontSize: '15px', lineHeight: 1.7, maxWidth: 360 }}>
                Get access to Neurozy's full AI platform — manage products, monitor performance, and scale your intelligence.
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
        </div>

        {/* ── Right panel (form) ── */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 relative overflow-y-auto">
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
              <Link to="/">
                <img
                  src="/assets/images/neurozy-logo.png"
                  alt="Neurozy"
                  className="h-8 w-auto object-contain"
                />
              </Link>
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
                Create your{' '}
                <span style={{ color: '#00e5ff' }}>Neurozy</span> account
              </h1>
              <p style={{ color: '#4d6a8a', fontSize: '14px' }}>
                Join our AI platform and start building
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" style={{ color: '#c8d8f0', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
                  FULL NAME
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: focusedField === 'fullName' ? '#00e5ff' : '#4d6a8a', transition: 'color 0.2s' }}
                  />
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    style={getInputStyle('fullName')}
                  />
                </div>
              </div>

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
                    placeholder="your@email.com"
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
                <label htmlFor="password" style={{ color: '#c8d8f0', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
                  PASSWORD
                </label>
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
                    autoComplete="new-password"
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

              {/* Confirm Password */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="confirmPassword" style={{ color: '#c8d8f0', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
                  CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: focusedField === 'confirmPassword' ? '#00e5ff' : '#4d6a8a', transition: 'color 0.2s' }}
                  />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    placeholder="••••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onFocus={() => setFocusedField('confirmPassword')}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...getInputStyle('confirmPassword'), paddingRight: '46px' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200"
                    style={{ color: '#4d6a8a', background: 'none', border: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = '#00e5ff')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = '#4d6a8a')}
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-center gap-2.5 cursor-pointer select-none" style={{ marginTop: '4px' }}>
                <div
                  onClick={() => setAgreedToTerms((v) => !v)}
                  className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-200"
                  style={{
                    background: agreedToTerms ? '#00e5ff' : 'transparent',
                    border: `2px solid ${agreedToTerms ? '#00e5ff' : 'rgba(0,229,255,0.3)'}`,
                  }}
                >
                  {agreedToTerms && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="#050b1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span style={{ color: '#c8d8f0', fontSize: '13px' }}>
                  I agree to the{' '}
                  <a href="#" style={{ color: '#00e5ff', textDecoration: 'none' }}>
                    Terms of Service
                  </a>
                  {' '}and{' '}
                  <a href="#" style={{ color: '#00e5ff', textDecoration: 'none' }}>
                    Privacy Policy
                  </a>
                </span>
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
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 mt-3 relative overflow-hidden"
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
                    Creating account…
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="text-center mt-6" style={{ color: '#4d6a8a', fontSize: '13px' }}>
              Already have an account?{' '}
              <Link
                to="/login"
                style={{ color: '#00e5ff', fontWeight: 600, textDecoration: 'none' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none')}
              >
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

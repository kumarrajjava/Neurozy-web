import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

const reasons = [
  'Custom software development',
  'AI integration for my business',
  'Partnership opportunity',
  'Product demo request',
  'General enquiry',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    background: '#050b1f',
    border: '1px solid rgba(0,229,255,0.2)',
    color: '#ffffff',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '14px',
    borderRadius: '10px',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '13px',
    fontWeight: 500,
    color: '#c8d8f0',
    marginBottom: '6px',
    display: 'block',
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — Neurozy</title>
        <meta
          name="description"
          content="Get in touch with the Neurozy team. Whether you're looking for custom AI software, a partnership, or just want to learn more — we'd love to hear from you."
        />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="relative py-28 overflow-hidden" style={{ background: '#050b1f' }}>
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
              Get In Touch
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
              Let's Build Something{' '}
              <span
                style={{
                  color: '#00e5ff',
                  textShadow: '0 0 40px rgba(0,229,255,0.35)',
                }}
              >
                Together
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg max-w-xl mx-auto leading-relaxed"
              style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
            >
              Have a project in mind, a question, or just want to explore what's possible? We're
              ready to listen.
            </motion.p>
          </div>
        </section>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(0,229,255,0.15)' }} />

        {/* Main content */}
        <section className="py-24" style={{ background: '#0a0e2e' }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left: Info cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <h2
                className="font-semibold mb-2"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(22px, 2.5vw, 30px)',
                  color: '#ffffff',
                }}
              >
                We'd love to{' '}
                <span style={{ color: '#00e5ff' }}>hear from you</span>
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
              >
                Whether you're a startup looking to build your first AI product or an enterprise
                exploring intelligent automation — our team is here to help you move fast and build
                right.
              </p>

              {/* Contact cards */}
              {[
                {
                  icon: Mail,
                  label: 'Email Us',
                  value: 'hello@neurozy.ai',
                  sub: 'We reply within 24 hours',
                },
                {
                  icon: MessageSquare,
                  label: 'Start a Conversation',
                  value: 'Use the form',
                  sub: 'Tell us about your project',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl p-5"
                    style={{
                      background: '#0d1b4b',
                      border: '1px solid rgba(0,229,255,0.15)',
                      borderLeft: '3px solid #00e5ff',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: 'rgba(0,229,255,0.1)',
                        border: '1px solid rgba(0,229,255,0.25)',
                      }}
                    >
                      <Icon size={18} style={{ color: '#00e5ff' }} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{
                          color: '#00e5ff',
                          fontFamily: 'DM Sans, sans-serif',
                          letterSpacing: '0.12em',
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: '#ffffff', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.value}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: '#4d6a8a', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.sub}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* What to expect */}
              <div
                className="rounded-xl p-6 flex flex-col gap-3"
                style={{
                  background: '#0d1b4b',
                  border: '1px solid rgba(0,229,255,0.12)',
                }}
              >
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{
                    color: '#00e5ff',
                    fontFamily: 'DM Sans, sans-serif',
                    letterSpacing: '0.12em',
                  }}
                >
                  What to Expect
                </span>
                {[
                  'A response within 1 business day',
                  'A no-pressure discovery call',
                  'Honest advice — even if we\'re not the right fit',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <CheckCircle size={14} style={{ color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <span
                      className="text-sm"
                      style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background: '#0d1b4b',
                  border: '1px solid rgba(0,229,255,0.2)',
                }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(0,229,255,0.1)',
                        border: '2px solid rgba(0,229,255,0.4)',
                        boxShadow: '0 0 30px rgba(0,229,255,0.2)',
                      }}
                    >
                      <CheckCircle size={30} style={{ color: '#00e5ff' }} />
                    </div>
                    <h3
                      className="font-bold text-2xl"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}
                    >
                      Message Sent!
                    </h3>
                    <p
                      className="text-sm max-w-sm"
                      style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Thanks for reaching out. We'll get back to you within one business day.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', reason: '', message: '' });
                      }}
                      className="mt-2 text-sm font-medium transition-colors duration-200"
                      style={{ color: '#00e5ff', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <h3
                      className="font-semibold text-xl mb-1"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}
                    >
                      Send us a message
                    </h3>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" style={labelStyle}>
                          Full Name <span style={{ color: '#00e5ff' }}>*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Raj Kumar"
                          value={form.name}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)')
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>
                          Email Address <span style={{ color: '#00e5ff' }}>*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)')
                          }
                        />
                      </div>
                    </div>

                    {/* Reason */}
                    <div>
                      <label htmlFor="reason" style={labelStyle}>
                        What can we help with?
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        style={{ ...inputStyle, appearance: 'none' as const }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)')
                        }
                      >
                        <option value="" style={{ background: '#0d1b4b' }}>
                          Select a reason…
                        </option>
                        {reasons.map((r) => (
                          <option key={r} value={r} style={{ background: '#0d1b4b' }}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" style={labelStyle}>
                        Message <span style={{ color: '#00e5ff' }}>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project, idea, or question…"
                        value={form.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)')
                        }
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 mt-1"
                      style={{
                        background: '#00e5ff',
                        color: '#050b1f',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                          '0 0 28px rgba(0,229,255,0.45)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                      }}
                    >
                      <Send size={15} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

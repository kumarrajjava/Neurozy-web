import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Brain, Layers, Zap, Shield, BarChart3, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: Brain,
    tag: 'AI Platform',
    name: 'NeuroCore',
    tagline: 'The Intelligence Engine',
    description:
      'A powerful AI orchestration platform that lets businesses embed machine learning models, automate decisions, and build intelligent workflows — without a data science team.',
    features: ['Custom ML model deployment', 'Real-time inference API', 'No-code pipeline builder', 'Multi-model orchestration'],
    status: 'In Development',
    statusColor: '#00e5ff',
    gradient: 'rgba(0,229,255,0.08)',
  },
  {
    icon: MessageSquare,
    tag: 'Conversational AI',
    name: 'NeuroChat',
    tagline: 'AI That Understands Context',
    description:
      'An enterprise-grade conversational AI platform. Deploy intelligent chatbots and virtual assistants trained on your own data, integrated into any product in minutes.',
    features: ['Custom knowledge base training', 'Multi-channel deployment', 'Conversation analytics', 'Human handoff support'],
    status: 'Coming Soon',
    statusColor: '#4d9fff',
    gradient: 'rgba(77,159,255,0.08)',
  },
  {
    icon: BarChart3,
    tag: 'Analytics',
    name: 'NeuroInsight',
    tagline: 'Data That Drives Decisions',
    description:
      'Turn raw business data into actionable intelligence. NeuroInsight surfaces patterns, predicts trends, and delivers dashboards that actually tell you what to do next.',
    features: ['Predictive analytics engine', 'Auto-generated reports', 'Anomaly detection', 'Custom KPI dashboards'],
    status: 'Coming Soon',
    statusColor: '#4d9fff',
    gradient: 'rgba(77,159,255,0.08)',
  },
  {
    icon: Shield,
    tag: 'Security',
    name: 'NeuroGuard',
    tagline: 'AI-Powered Threat Intelligence',
    description:
      'Protect your digital infrastructure with real-time AI threat detection. NeuroGuard monitors, identifies, and neutralizes security risks before they become incidents.',
    features: ['Real-time threat monitoring', 'Behavioral anomaly detection', 'Automated incident response', 'Compliance reporting'],
    status: 'Planned',
    statusColor: '#a78bfa',
    gradient: 'rgba(167,139,250,0.08)',
  },
  {
    icon: Layers,
    tag: 'Infrastructure',
    name: 'NeuroStack',
    tagline: 'Full-Stack AI Infrastructure',
    description:
      'A complete backend-as-a-service platform built for AI-native applications. Databases, auth, storage, and serverless compute — all optimized for intelligent workloads.',
    features: ['AI-optimized databases', 'Serverless compute', 'Built-in vector search', 'Auto-scaling infrastructure'],
    status: 'Planned',
    statusColor: '#a78bfa',
    gradient: 'rgba(167,139,250,0.08)',
  },
  {
    icon: Zap,
    tag: 'Automation',
    name: 'NeuroFlow',
    tagline: 'Intelligent Process Automation',
    description:
      'Automate complex business processes with AI-driven workflows. NeuroFlow connects your tools, learns from your operations, and continuously optimizes for efficiency.',
    features: ['Visual workflow builder', 'AI-powered triggers', '500+ integrations', 'Self-optimizing pipelines'],
    status: 'Planned',
    statusColor: '#a78bfa',
    gradient: 'rgba(167,139,250,0.08)',
  },
];

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Products — Neurozy</title>
        <meta
          name="description"
          content="Explore Neurozy's suite of AI-powered software products — from intelligent automation to enterprise analytics and conversational AI platforms."
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
              Product Suite
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
              Built for the{' '}
              <span
                style={{
                  color: '#00e5ff',
                  textShadow: '0 0 40px rgba(0,229,255,0.35)',
                }}
              >
                AI Era
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
              A growing ecosystem of intelligent software products — each one designed to make your
              business faster, smarter, and more scalable.
            </motion.p>
          </div>
        </section>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(0,229,255,0.15)' }} />

        {/* AI-Powered Tech Workspace Section */}
        <section className="py-24" style={{ background: '#0a0e2e' }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(0,229,255,0.25)',
                boxShadow: '0 0 40px rgba(0,229,255,0.1)',
              }}
            >
              <img
                src="/assets/images/intro.png"
                alt="AI-powered tech workspace"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase block mb-3"
                  style={{
                    color: '#00e5ff',
                    fontFamily: 'DM Sans, sans-serif',
                    letterSpacing: '0.15em',
                  }}
                >
                  Experience the Future
                </span>
                <h2
                  className="font-bold mb-4"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 'clamp(28px, 3.5vw, 44px)',
                    color: '#ffffff',
                  }}
                >
                  AI-Powered Tech{' '}
                  <span
                    style={{
                      color: '#00e5ff',
                      textShadow: '0 0 30px rgba(0,229,255,0.3)',
                    }}
                  >
                    Workspace
                  </span>
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: '#c8d8f0',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  Our products integrate seamlessly into your workflow, enhancing productivity and
                  unlocking new possibilities. Built with cutting-edge AI technology and designed for
                  teams that think ahead.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {[
                  'Intelligent automation at your fingertips',
                  'Real-time collaboration and insights',
                  'Scalable infrastructure for growth',
                  'Enterprise-grade security',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: 'rgba(0,229,255,0.1)',
                        border: '1px solid rgba(0,229,255,0.4)',
                      }}
                    >
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        style={{ color: '#00e5ff' }}
                      >
                        <path
                          d="M1 5L4 8L11 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      className="text-sm"
                      style={{
                        color: '#c8d8f0',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 w-fit"
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
                Explore Now
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <section className="py-10" style={{ background: '#0a0e2e' }}>
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6">
            {[
              { label: 'In Development', color: '#00e5ff' },
              { label: 'Coming Soon', color: '#4d9fff' },
              { label: 'Planned', color: '#a78bfa' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
                />
                <span
                  className="text-sm"
                  style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20" style={{ background: '#050b1f' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, i) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const }}
                    className="rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 cursor-default group"
                    style={{
                      background: '#0d1b4b',
                      border: '1px solid rgba(0,229,255,0.15)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,229,255,0.35)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 32px ${product.gradient.replace('0.08', '0.12')}`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,229,255,0.15)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                    }}
                  >
                    {/* Top row: icon + status */}
                    <div className="flex items-start justify-between">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: product.gradient,
                          border: `1px solid ${product.statusColor}33`,
                        }}
                      >
                        <Icon size={22} style={{ color: product.statusColor }} />
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          color: product.statusColor,
                          background: `${product.statusColor}18`,
                          border: `1px solid ${product.statusColor}40`,
                          fontFamily: 'DM Sans, sans-serif',
                        }}
                      >
                        {product.status}
                      </span>
                    </div>

                    {/* Tag */}
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{
                        color: product.statusColor,
                        fontFamily: 'DM Sans, sans-serif',
                        letterSpacing: '0.12em',
                      }}
                    >
                      {product.tag}
                    </span>

                    {/* Name + tagline */}
                    <div className="flex flex-col gap-1">
                      <h2
                        className="font-bold text-2xl"
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          color: '#ffffff',
                        }}
                      >
                        {product.name}
                      </h2>
                      <p
                        className="text-sm font-medium"
                        style={{ color: product.statusColor, fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {product.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="flex flex-col gap-2 mt-auto">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle size={14} style={{ color: product.statusColor, flexShrink: 0 }} />
                          <span
                            className="text-xs"
                            style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Roadmap banner */}
        <section className="py-16" style={{ background: '#0a0e2e' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
              style={{
                background: '#0d1b4b',
                border: '1px solid rgba(0,229,255,0.25)',
              }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)',
                }}
              />
              <div className="relative flex flex-col gap-3 text-center md:text-left">
                <h3
                  className="font-bold"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    color: '#ffffff',
                  }}
                >
                  Have a product idea in mind?
                </h3>
                <p
                  className="text-base max-w-lg"
                  style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
                >
                  We partner with businesses to design and build custom AI-powered software from the
                  ground up. Let's shape your vision together.
                </p>
              </div>
              <Link
                to="/contact"
                className="relative shrink-0 inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                style={{
                  background: '#00e5ff',
                  color: '#050b1f',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 28px rgba(0,229,255,0.45)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                }}
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

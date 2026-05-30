import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    slug: 'future-of-ai-software-development',
    tag: 'AI & Development',
    title: 'The Future of AI-Native Software Development',
    excerpt:
      'Traditional software is reactive — it does what you tell it. AI-native software is proactive. Here\'s how the shift is reshaping the entire development lifecycle.',
    date: 'May 20, 2026',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'building-scalable-ml-pipelines',
    tag: 'Engineering',
    title: 'Building Scalable ML Pipelines Without a Data Science Team',
    excerpt:
      'You don\'t need a 10-person data science team to ship machine learning in production. Here\'s the lean architecture we use at Neurozy to move fast without breaking things.',
    date: 'May 12, 2026',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'why-most-ai-products-fail',
    tag: 'Product',
    title: 'Why Most AI Products Fail (And How to Build One That Doesn\'t)',
    excerpt:
      'The graveyard of failed AI products is enormous. The common thread isn\'t bad technology — it\'s misaligned product thinking. Here\'s what separates the survivors.',
    date: 'May 5, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'conversational-ai-enterprise',
    tag: 'Conversational AI',
    title: 'Deploying Conversational AI in Enterprise Environments',
    excerpt:
      'Enterprise AI deployments fail for predictable reasons: poor data hygiene, no fallback strategy, and zero human oversight. Here\'s the playbook we\'ve developed.',
    date: 'April 28, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'vector-databases-explained',
    tag: 'Engineering',
    title: 'Vector Databases Explained: The Backbone of Modern AI Apps',
    excerpt:
      'If you\'re building anything with LLMs or semantic search, you need to understand vector databases. Here\'s a practical breakdown — no PhD required.',
    date: 'April 18, 2026',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'founder-story-building-neurozy',
    tag: 'Company',
    title: 'Why I Started Neurozy: A Founder\'s Perspective',
    excerpt:
      'Building a software company in 2025 means competing with giants. Here\'s why I believe the opportunity for AI-native startups has never been bigger — and what drove me to start Neurozy.',
    date: 'April 8, 2026',
    readTime: '4 min read',
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  'AI & Development': '#00e5ff',
  'Engineering': '#4d9fff',
  'Product': '#a78bfa',
  'Conversational AI': '#34d399',
  'Company': '#f59e0b',
};

export default function BlogsPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <Helmet>
        <title>Blog — Neurozy</title>
        <meta
          name="description"
          content="Insights on AI, software engineering, and product development from the Neurozy team."
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
              Neurozy Blog
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
              Ideas Worth{' '}
              <span
                style={{
                  color: '#00e5ff',
                  textShadow: '0 0 40px rgba(0,229,255,0.35)',
                }}
              >
                Building On
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg max-w-xl mx-auto leading-relaxed"
              style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
            >
              Perspectives on AI, engineering, and building software products that actually matter.
            </motion.p>
          </div>
        </section>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(0,229,255,0.15)' }} />

        {/* Featured post */}
        <section className="py-20" style={{ background: '#0a0e2e' }}>
          <div className="max-w-7xl mx-auto px-6">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                color: '#00e5ff',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.15em',
              }}
            >
              Featured Post
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-300 cursor-pointer group"
              style={{
                background: '#0d1b4b',
                border: '1px solid rgba(0,229,255,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,229,255,0.55)';
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 0 40px rgba(0,229,255,0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,229,255,0.3)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 50% 80% at 90% 50%, rgba(0,229,255,0.05) 0%, transparent 70%)',
                }}
              />
              <div className="relative flex flex-col gap-5 max-w-3xl">
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      color: tagColors[featured.tag] ?? '#00e5ff',
                      background: `${tagColors[featured.tag] ?? '#00e5ff'}18`,
                      border: `1px solid ${tagColors[featured.tag] ?? '#00e5ff'}40`,
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    <Tag size={11} />
                    {featured.tag}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      color: '#050b1f',
                      background: '#00e5ff',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    Featured
                  </span>
                </div>
                <h2
                  className="font-bold leading-tight"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 'clamp(24px, 3vw, 38px)',
                    color: '#ffffff',
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-5 flex-wrap">
                  <span
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: '#4d6a8a', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    <Calendar size={12} />
                    {featured.date}
                  </span>
                  <span
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: '#4d6a8a', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                </div>
                <div className="mt-2">
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                    style={{ color: '#00e5ff', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Read Article
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All posts grid */}
        <section className="py-20" style={{ background: '#050b1f' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold tracking-widest uppercase mb-10"
              style={{
                color: '#00e5ff',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.15em',
              }}
            >
              All Posts
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const }}
                  className="rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 cursor-pointer group"
                  style={{
                    background: '#0d1b4b',
                    border: '1px solid rgba(0,229,255,0.12)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,229,255,0.35)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      '0 0 24px rgba(0,229,255,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      'rgba(0,229,255,0.12)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Tag */}
                  <span
                    className="inline-flex items-center gap-1.5 self-start text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      color: tagColors[post.tag] ?? '#00e5ff',
                      background: `${tagColors[post.tag] ?? '#00e5ff'}18`,
                      border: `1px solid ${tagColors[post.tag] ?? '#00e5ff'}40`,
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    <Tag size={11} />
                    {post.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-semibold leading-snug"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '18px',
                      color: '#ffffff',
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between flex-wrap gap-3 mt-auto pt-2"
                    style={{ borderTop: '1px solid rgba(0,229,255,0.08)' }}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: '#4d6a8a', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        <Calendar size={11} />
                        {post.date}
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: '#4d6a8a', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: '#00e5ff' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20" style={{ background: '#0a0e2e' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
              style={{
                background: '#0d1b4b',
                border: '1px solid rgba(0,229,255,0.2)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)',
                }}
              />
              <div className="relative max-w-xl mx-auto flex flex-col gap-5 items-center">
                <h2
                  className="font-bold"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    color: '#ffffff',
                  }}
                >
                  Stay Ahead of the{' '}
                  <span style={{ color: '#00e5ff' }}>Curve</span>
                </h2>
                <p
                  className="text-base"
                  style={{ color: '#c8d8f0', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Get the latest insights on AI and software development delivered straight to your
                  inbox. No spam — just signal.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                    style={{
                      background: '#050b1f',
                      border: '1px solid rgba(0,229,255,0.25)',
                      color: '#ffffff',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.25)')}
                  />
                  <button
                    className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shrink-0"
                    style={{
                      background: '#00e5ff',
                      color: '#050b1f',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        '0 0 24px rgba(0,229,255,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

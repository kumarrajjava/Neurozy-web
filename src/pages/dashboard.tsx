import { Helmet } from '@dr.pogodin/react-helmet';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  Cpu,
  MessageSquare,
  BarChart3,
  Shield,
  Zap,
  Layers,
  TrendingUp,
  Activity,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Settings,
  ChevronRight,
  Circle,
  UserCircle,
  Camera,
  Save,
  LogOut,
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview' },
  { icon: Cpu, label: 'NeuroCore' },
  { icon: MessageSquare, label: 'NeuroChat' },
  { icon: BarChart3, label: 'NeuroInsight' },
  { icon: Shield, label: 'NeuroGuard' },
  { icon: Layers, label: 'NeuroStack' },
  { icon: Zap, label: 'NeuroFlow' },
  { icon: UserCircle, label: 'Profile' },
];

const stats = [
  { label: 'API Requests Today', value: '0', change: '+0%', up: true, icon: Activity, color: '#00e5ff' },
  { label: 'Active Users', value: '0', change: '+0%', up: true, icon: Users, color: '#4d9fff' },
  { label: 'Models Running', value: '0', change: '0', up: true, icon: Cpu, color: '#a78bfa' },
  { label: 'Uptime', value: '—', change: 'No data yet', up: true, icon: TrendingUp, color: '#34d399' },
];

const products = [
  { name: 'NeuroCore', status: 'In Development', color: '#00e5ff', icon: Cpu },
  { name: 'NeuroChat', status: 'Coming Soon', color: '#4d9fff', icon: MessageSquare },
  { name: 'NeuroInsight', status: 'Coming Soon', color: '#4d9fff', icon: BarChart3 },
  { name: 'NeuroGuard', status: 'Planned', color: '#a78bfa', icon: Shield },
  { name: 'NeuroStack', status: 'Planned', color: '#a78bfa', icon: Layers },
  { name: 'NeuroFlow', status: 'Planned', color: '#a78bfa', icon: Zap },
];

const activity = [
  { text: 'NeuroCore development milestone reached', time: 'Just now', color: '#00e5ff' },
  { text: 'New product roadmap published', time: '2h ago', color: '#4d9fff' },
  { text: 'Dashboard initialized', time: 'Today', color: '#34d399' },
  { text: 'Neurozy platform launched', time: 'May 2026', color: '#a78bfa' },
];

const inputStyle: React.CSSProperties = {
  background: '#050b1f',
  border: '1px solid rgba(0,229,255,0.2)',
  color: '#ffffff',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '14px',
  borderRadius: '10px',
  padding: '10px 14px',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '12px',
  fontWeight: 500,
  color: '#c8d8f0',
  marginBottom: '5px',
  display: 'block',
};

export default function DashboardPage() {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Overview');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileSaved, setProfileSaved] = useState(false);
  const [editProfile, setEditProfile] = useState({
    name: user?.name ?? '',
    role: user?.role ?? '',
    email: user?.email ?? '',
    phone: user?.phone ?? '',
    location: user?.location ?? '',
    bio: user?.bio ?? '',
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) navigate('/login', { replace: true });
  }, [user, navigate]);

  // Sync editProfile when user changes
  useEffect(() => {
    if (user) {
      setEditProfile({
        name: user.name,
        role: user.role,
        email: user.email,
        phone: user.phone,
        location: user.location,
        bio: user.bio,
      });
    }
  }, [user]);

  if (!user) return null;

  const profilePhoto = user.photo;

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => updateUser({ photo: ev.target?.result as string });
    reader.readAsDataURL(file);
  }

  function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    updateUser({ ...editProfile });
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2500);
  }

  // Live preview uses editProfile so the card updates as you type
  const displayName = editProfile.name || user.name;
  const displayRole = editProfile.role || user.role;
  const displayEmail = editProfile.email || user.email;
  const displayLocation = editProfile.location || user.location;
  const displayBio = editProfile.bio || user.bio;

  const displayInitials = displayName
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  function handleLogout() {
    logout();
    navigate('/login');
  }

  const initials = displayInitials;

  return (
    <>
      <Helmet>
        <title>Dashboard — Neurozy</title>
        <meta name="description" content="Neurozy product dashboard — monitor your AI products and platform activity." />
      </Helmet>

      <div className="flex min-h-screen" style={{ background: '#050b1f', fontFamily: 'DM Sans, sans-serif' }}>
        {/* Sidebar */}
        <aside
          className="hidden md:flex flex-col w-60 shrink-0 sticky top-0 h-screen"
          style={{ background: '#030810', borderRight: '1px solid rgba(0,229,255,0.12)' }}
        >
          {/* Logo */}
          <div className="flex items-center px-5 h-16 shrink-0" style={{ borderBottom: '1px solid rgba(0,229,255,0.1)' }}>
            <img src="/assets/images/neurozy-logo.png" alt="Neurozy" className="h-7 w-auto object-contain" />
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-1 p-3 flex-1 overflow-y-auto">
            <p className="text-xs font-semibold tracking-widest uppercase px-3 py-2 mt-2" style={{ color: '#4d6a8a', letterSpacing: '0.12em' }}>
              Platform
            </p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveNav(item.label)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200 w-full"
                  style={{
                    color: isActive ? '#00e5ff' : '#c8d8f0',
                    background: isActive ? 'rgba(0,229,255,0.08)' : 'transparent',
                    border: isActive ? '1px solid rgba(0,229,255,0.2)' : '1px solid transparent',
                  }}
                  onMouseEnter={(e) => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,229,255,0.04)'; (e.currentTarget as HTMLButtonElement).style.color = '#ffffff'; } }}
                  onMouseLeave={(e) => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#c8d8f0'; } }}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Bottom */}
          <div className="p-3 flex flex-col gap-1" style={{ borderTop: '1px solid rgba(0,229,255,0.1)' }}>
            {[{ icon: Bell, label: 'Notifications' }, { icon: Settings, label: 'Settings' }].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200 w-full"
                style={{ color: '#c8d8f0' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,229,255,0.04)'; (e.currentTarget as HTMLButtonElement).style.color = '#ffffff'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#c8d8f0'; }}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <header
            className="flex items-center justify-between px-6 h-16 shrink-0 sticky top-0 z-10"
            style={{ background: 'rgba(5,11,31,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,229,255,0.1)' }}
          >
            <div className="flex items-center gap-2">
              <span style={{ color: '#4d6a8a', fontSize: '13px' }}>Platform</span>
              <ChevronRight size={14} style={{ color: '#4d6a8a' }} />
              <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 600 }}>{activeNav}</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)', color: '#00e5ff' }}
              >
                <Circle size={7} fill="#00e5ff" />
                All Systems Operational
              </div>
              {/* Profile avatar button */}
              <button
                onClick={() => setActiveNav('Profile')}
                className="relative w-9 h-9 rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 shrink-0"
                style={{ border: '2px solid rgba(0,229,255,0.4)', background: profilePhoto ? 'transparent' : 'rgba(0,229,255,0.15)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#00e5ff'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 12px rgba(0,229,255,0.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,229,255,0.4)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
                title="View Profile"
              >
                {profilePhoto ? (
                  <img src={profilePhoto} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <span style={{ color: '#00e5ff', fontSize: '12px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>{initials}</span>
                )}
              </button>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeNav === 'Profile' ? (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' as const }}
                  className="flex flex-col gap-8 max-w-3xl"
                >
                  {/* Profile header */}
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(22px, 2.5vw, 28px)', color: '#ffffff' }}>
                      My <span style={{ color: '#00e5ff' }}>Profile</span>
                    </h1>
                    <p style={{ color: '#4d6a8a', fontSize: '13px' }}>Manage your personal information and account details</p>
                  </div>

                  {/* Profile card */}
                  <div className="rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-7" style={{ background: '#0d1b4b', border: '1px solid rgba(0,229,255,0.2)' }}>
                    {/* Photo */}
                    <div className="relative shrink-0">
                      <div
                        className="w-24 h-24 rounded-2xl overflow-hidden flex items-center justify-center"
                        style={{ border: '2px solid rgba(0,229,255,0.5)', boxShadow: '0 0 30px rgba(0,229,255,0.15)', background: 'rgba(0,229,255,0.08)' }}
                      >
                        {profilePhoto ? (
                          <img src={profilePhoto} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                          <span style={{ color: '#00e5ff', fontSize: '28px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>{initials}</span>
                        )}
                      </div>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                        style={{ background: '#00e5ff', border: '2px solid #050b1f' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 12px rgba(0,229,255,0.5)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
                        title="Upload photo"
                      >
                        <Camera size={14} style={{ color: '#050b1f' }} />
                      </button>
                      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-1 text-center sm:text-left">
                      <h2 className="font-bold text-2xl" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}>{displayName}</h2>
                      <span className="text-sm font-semibold" style={{ color: '#00e5ff', fontFamily: 'DM Sans, sans-serif' }}>{displayRole}</span>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2">
                        {displayEmail && (
                          <span className="flex items-center gap-1.5 text-xs" style={{ color: '#c8d8f0' }}>
                            <Mail size={12} style={{ color: '#4d6a8a' }} />{displayEmail}
                          </span>
                        )}
                        {displayLocation && (
                          <span className="flex items-center gap-1.5 text-xs" style={{ color: '#c8d8f0' }}>
                            <MapPin size={12} style={{ color: '#4d6a8a' }} />{displayLocation}
                          </span>
                        )}
                      </div>
                      {displayBio && (
                        <p className="text-sm mt-2 max-w-md" style={{ color: '#c8d8f0', lineHeight: 1.6 }}>{displayBio}</p>
                      )}
                    </div>
                  </div>

                  {/* Edit form */}
                  <div className="rounded-2xl p-8" style={{ background: '#0d1b4b', border: '1px solid rgba(0,229,255,0.15)' }}>
                    <h3 className="font-semibold text-base mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}>
                      Edit Information
                    </h3>
                    <form onSubmit={handleSaveProfile} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Full Name</label>
                          <input
                            type="text"
                            value={editProfile.name}
                            onChange={(e) => setEditProfile((p) => ({ ...p, name: e.target.value }))}
                            style={inputStyle}
                            placeholder="Your full name"
                            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')}
                            onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)')}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Role / Title</label>
                          <div className="relative">
                            <Briefcase size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#4d6a8a' }} />
                            <input
                              type="text"
                              value={editProfile.role}
                              onChange={(e) => setEditProfile((p) => ({ ...p, role: e.target.value }))}
                              style={{ ...inputStyle, paddingLeft: '34px' }}
                              placeholder="e.g. Founder & CEO"
                              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)')}
                            />
                          </div>
                        </div>
                        <div>
                          <label style={labelStyle}>Email Address</label>
                          <div className="relative">
                            <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#4d6a8a' }} />
                            <input
                              type="email"
                              value={editProfile.email}
                              onChange={(e) => setEditProfile((p) => ({ ...p, email: e.target.value }))}
                              style={{ ...inputStyle, paddingLeft: '34px' }}
                              placeholder="you@neurozy.ai"
                              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)')}
                            />
                          </div>
                        </div>
                        <div>
                          <label style={labelStyle}>Phone Number</label>
                          <div className="relative">
                            <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#4d6a8a' }} />
                            <input
                              type="tel"
                              value={editProfile.phone}
                              onChange={(e) => setEditProfile((p) => ({ ...p, phone: e.target.value }))}
                              style={{ ...inputStyle, paddingLeft: '34px' }}
                              placeholder="+91 00000 00000"
                              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)')}
                            />
                          </div>
                        </div>
                        <div>
                          <label style={labelStyle}>Location</label>
                          <div className="relative">
                            <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#4d6a8a' }} />
                            <input
                              type="text"
                              value={editProfile.location}
                              onChange={(e) => setEditProfile((p) => ({ ...p, location: e.target.value }))}
                              style={{ ...inputStyle, paddingLeft: '34px' }}
                              placeholder="City, Country"
                              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)')}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label style={labelStyle}>Bio</label>
                        <textarea
                          rows={3}
                          value={editProfile.bio}
                          onChange={(e) => setEditProfile((p) => ({ ...p, bio: e.target.value }))}
                          style={{ ...inputStyle, resize: 'vertical' }}
                          placeholder="A short bio about yourself…"
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)')}
                        />
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                          style={{ background: '#00e5ff', color: '#050b1f', fontFamily: 'DM Sans, sans-serif' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(0,229,255,0.4)'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
                        >
                          <Save size={14} />
                          Save Changes
                        </button>
                        {profileSaved && (
                          <motion.span
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            style={{ color: '#34d399', fontSize: '13px', fontFamily: 'DM Sans, sans-serif' }}
                          >
                            ✓ Profile saved
                          </motion.span>
                        )}
                      </div>
                    </form>
                  </div>

                  {/* Danger zone */}
                  <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: '#0d1b4b', border: '1px solid rgba(248,113,113,0.2)' }}>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold" style={{ color: '#f87171', fontFamily: 'Space Grotesk, sans-serif' }}>Sign Out</span>
                      <span className="text-xs" style={{ color: '#4d6a8a' }}>You will be signed out and returned to login</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                      style={{ color: '#f87171', border: '1px solid rgba(248,113,113,0.3)', background: 'rgba(248,113,113,0.06)', fontFamily: 'DM Sans, sans-serif' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(248,113,113,0.12)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(248,113,113,0.06)'; }}
                    >
                      <LogOut size={14} />
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const }}
                  className="flex flex-col gap-8 max-w-6xl"
                >
                  {/* Welcome */}
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(22px, 2.5vw, 28px)', color: '#ffffff' }}>
                      Welcome back, <span style={{ color: '#00e5ff' }}>{displayName.split(' ')[0]}</span>
                    </h1>
                    <p style={{ color: '#4d6a8a', fontSize: '13px' }}>Friday, 29 May 2025 · Neurozy Platform Overview</p>
                  </div>

                  {/* Stat cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {stats.map((stat, i) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const }}
                          className="rounded-xl p-5 flex flex-col gap-3"
                          style={{ background: '#0d1b4b', border: '1px solid rgba(0,229,255,0.12)' }}
                        >
                          <div className="flex items-center justify-between">
                            <span style={{ color: '#4d6a8a', fontSize: '12px', fontWeight: 500 }}>{stat.label}</span>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}30` }}>
                              <Icon size={15} style={{ color: stat.color }} />
                            </div>
                          </div>
                          <span className="font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '28px', color: '#ffffff', lineHeight: 1 }}>{stat.value}</span>
                          <div className="flex items-center gap-1">
                            {stat.up ? <ArrowUpRight size={13} style={{ color: '#34d399' }} /> : <ArrowDownRight size={13} style={{ color: '#f87171' }} />}
                            <span style={{ color: '#4d6a8a', fontSize: '12px' }}>{stat.change}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Products + Activity */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Products status */}
                    <div className="lg:col-span-2 rounded-xl p-6 flex flex-col gap-5" style={{ background: '#0d1b4b', border: '1px solid rgba(0,229,255,0.12)' }}>
                      <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-base" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}>Product Suite</h2>
                        <span style={{ color: '#4d6a8a', fontSize: '12px' }}>{products.length} products</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {products.map((p, i) => {
                          const Icon = p.icon;
                          return (
                            <motion.div
                              key={p.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                              className="flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 cursor-default"
                              style={{ background: 'rgba(5,11,31,0.5)', border: '1px solid rgba(0,229,255,0.07)' }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,229,255,0.2)'; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,229,255,0.07)'; }}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                                  <Icon size={14} style={{ color: p.color }} />
                                </div>
                                <span className="text-sm font-medium" style={{ color: '#ffffff' }}>{p.name}</span>
                              </div>
                              <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                                {p.status}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Activity feed */}
                    <div className="rounded-xl p-6 flex flex-col gap-5" style={{ background: '#0d1b4b', border: '1px solid rgba(0,229,255,0.12)' }}>
                      <h2 className="font-semibold text-base" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}>Recent Activity</h2>
                      <div className="flex flex-col gap-4">
                        {activity.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                            className="flex gap-3"
                          >
                            <div className="flex flex-col items-center gap-1 shrink-0 pt-1">
                              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                              {i < activity.length - 1 && <div className="w-px flex-1 min-h-4" style={{ background: 'rgba(0,229,255,0.1)' }} />}
                            </div>
                            <div className="flex flex-col gap-0.5 pb-2">
                              <span style={{ color: '#c8d8f0', fontSize: '13px', lineHeight: 1.4 }}>{item.text}</span>
                              <span style={{ color: '#4d6a8a', fontSize: '11px' }}>{item.time}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty state banner */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
                    style={{ background: '#0d1b4b', border: '1px solid rgba(0,229,255,0.2)' }}
                  >
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 100% at 90% 50%, rgba(0,229,255,0.05) 0%, transparent 70%)' }} />
                    <div className="relative w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.3)' }}>
                      <Cpu size={26} style={{ color: '#00e5ff' }} />
                    </div>
                    <div className="relative flex flex-col gap-1 text-center md:text-left">
                      <h3 className="font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}>Your products are on the way</h3>
                      <p style={{ color: '#c8d8f0', fontSize: '14px' }}>NeuroCore is currently in development. Once live, your usage metrics, API activity, and model performance will appear here.</p>
                    </div>
                    <a
                      href="/products"
                      className="relative shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                      style={{ background: '#00e5ff', color: '#050b1f', fontFamily: 'DM Sans, sans-serif' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(0,229,255,0.4)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}
                    >
                      View Products
                      <ArrowUpRight size={14} />
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}

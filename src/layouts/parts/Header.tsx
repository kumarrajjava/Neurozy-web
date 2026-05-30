import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: '#050b1f',
        borderBottom: '1px solid rgba(0,229,255,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/assets/images/neurozy-logo.png"
            alt="Neurozy"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: location.pathname === link.href ? '#00e5ff' : '#c8d8f0',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00e5ff')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  location.pathname === link.href ? '#00e5ff' : '#c8d8f0')
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/dashboard"
            className="text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200"
            style={{
              color: '#00e5ff',
              border: '1px solid #00e5ff',
              fontFamily: 'DM Sans, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0,229,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Dashboard
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          style={{ color: '#c8d8f0' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: '#050b1f' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium py-2 border-b transition-colors duration-200"
              style={{
                color: location.pathname === link.href ? '#00e5ff' : '#c8d8f0',
                borderColor: 'rgba(0,229,255,0.1)',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/dashboard"
            className="text-sm font-medium px-4 py-2 rounded-full text-center mt-2"
            style={{
              color: '#00e5ff',
              border: '1px solid #00e5ff',
              fontFamily: 'DM Sans, sans-serif',
            }}
            onClick={() => setMobileOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </header>
  );
}

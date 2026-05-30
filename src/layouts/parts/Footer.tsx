import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: '#030810',
        borderTop: '2px solid rgba(0,229,255,0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-center mb-8">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src="/assets/images/neurozy-logo.png"
              alt="Neurozy"
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 text-center text-xs"
          style={{
            borderTop: '1px solid rgba(0,229,255,0.1)',
            color: '#4d6a8a',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          © 2025 Neurozy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

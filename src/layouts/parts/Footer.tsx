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

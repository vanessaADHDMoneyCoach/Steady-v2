import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1e293b', lineHeight: '1.5' }}>
      {/* Navigation */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9' }}>
        <span style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-1px', color: '#0f172a' }}>STEADY</span>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="/dashboard" style={{ textDecoration: 'none', color: '#10b981', fontWeight: 'bold' }}>Launch App</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '56px', fontWeight: '900', letterSpacing: '-2px', marginBottom: '20px', color: '#0f172a', lineHeight: '1.1' }}>
          The Clarity of Monarch.<br />
          The Discipline of YNAB.<br />
          <span style={{ color: '#10b981' }}>Built for the ADHD Brain.</span>
        </h1>
        <p style={{ fontSize: '22px', color: '#64748b', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
          Stop fighting your dopamine. Steady combines zero-based budgeting with a real-time "Impulse Interrupter" to help you keep what you earn.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a href="/dashboard" style={{ padding: '18px 36px', backgroundColor: '#0f172a', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
            Start Budgeting
          </a>
        </div>
      </header>

      {/* Feature Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Zero-Based Logic</h3>
            <p style={{ color: '#64748b' }}>Every dollar gets a job. No more "where did my money go?" mystery at the end of the month.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Visual Wealth Map</h3>
            <p style={{ color: '#64748b' }}>See your net worth and cash flow in a clean, Monarch-inspired interface that doesn't overwhelm.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#10b981', color: 'white', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>The Impulse Interrupter</h3>
            <p style={{ color: '#ecfdf5' }}>The specialized tool to catch impulse spend triggers before they hit your bank account.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

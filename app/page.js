import React from 'react';

export default function Home() {
  // REPLACE THIS LINK with your actual Google Form URL
  const googleFormUrl = "https://docs.google.com/forms/d/YOUR_FORM_ID_HERE/viewform";

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1e293b', lineHeight: '1.6', backgroundColor: '#ffffff' }}>
      {/* Simple Header */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <span style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-1.5px', color: '#0f172a' }}>STEADY</span>
        <a href={googleFormUrl} target="_blank" style={{ textDecoration: 'none', color: '#10b981', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase' }}>Early Access</a>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '100px 20px 60px', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: '#f1f5f9', borderRadius: '20px', color: '#475569', fontSize: '13px', fontWeight: '700', marginBottom: '24px' }}>
          COMING SOON: THE ADHD MONEY ARCHITECT
        </div>
        <h1 style={{ fontSize: '62px', fontWeight: '900', letterSpacing: '-2.5px', marginBottom: '24px', color: '#0f172a', lineHeight: '1.05' }}>
          Stop Managing Money.<br />
          Start <span style={{ color: '#10b981' }}>Setting Rules.</span>
        </h1>
        <p style={{ fontSize: '21px', color: '#64748b', marginBottom: '40px', maxWidth: '650px', margin: '0 auto 40px' }}>
          A cross between YNAB and Monarch, built specifically for the ADHD brain. 
          Automate your "Containers," interrupt impulse spend, and never wonder what you can afford again.
        </p>
        
        <a href={googleFormUrl} target="_blank" style={{ 
          display: 'inline-block',
          padding: '20px 45px', 
          backgroundColor: '#0f172a', 
          color: 'white', 
          borderRadius: '14px', 
          textDecoration: 'none', 
          fontWeight: '800', 
          fontSize: '20px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
          Join the Waitlist
        </a>
      </header>

      {/* The Core Methodology */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          <div style={{ padding: '40px', backgroundColor: 'white', borderRadius: '28px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px', color: '#0f172a' }}>Money Containers</h3>
            <p style={{ color: '#64748b', fontSize: '17px' }}>We don't do "abstract" budgets. We use containers. You only assign the cash you actually have right now. When a container is full, you're done.</p>
          </div>

          <div style={{ padding: '40px', backgroundColor: 'white', borderRadius: '28px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px', color: '#0f172a' }}>Automated Rules</h3>
            <p style={{ color: '#64748b', fontSize: '17px' }}>Monarch-style intelligence that builds recurring calendars. Set your rules once, and let the app handle the recurring chaos of ADHD life.</p>
          </div>

          <div style={{ padding: '40px', backgroundColor: '#10b981', color: 'white', borderRadius: '28px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>Impulse Interrupter</h3>
            <p style={{ color: '#ecfdf5', fontSize: '17px' }}>The circuit-breaker for your brain. Log the urge, pause the spend, and watch your "Stash" grow instead of your buyer's remorse.</p>
          </div>

        </div>
      </section>

      <footer style={{ padding: '60px 20px', textAlign: 'center', color: '#94a3b8', fontSize: '14px' }}>
        © 2026 Steady ADHD. Built for the distracted, the impulsive, and the ambitious.
      </footer>
    </div>
  );
}

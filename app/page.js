import React from 'react';

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#0f172a', // Dark, focused background
      color: '#f8fafc',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '64px', 
          fontWeight: '900', 
          letterSpacing: '-2px',
          margin: '0',
          color: '#10b981' // Steady Green
        }}>
          STEADY
        </h1>
        <p style={{ fontSize: '20px', color: '#94a3b8', marginTop: '10px' }}>
          The dopamine-friendly way to manage money.
        </p>
      </header>

      <main style={{ maxWidth: '600px' }}>
        <div style={{ 
          backgroundColor: '#1e293b', 
          padding: '30px', 
          borderRadius: '24px', 
          border: '1px solid #334155',
          marginBottom: '40px'
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Stop the Impulse.</h2>
          <p style={{ lineHeight: '1.6', color: '#cbd5e1', fontSize: '18px' }}>
            Built for ADHDers, by an ADHDer. Steady helps you pause, 
            stash the cash you almost spent, and watch your "win" grow in real-time.
          </p>
        </div>

        <a href="/dashboard" style={{ 
          display: 'inline-block',
          padding: '20px 40px', 
          backgroundColor: '#10b981', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '50px',
          fontSize: '22px',
          fontWeight: 'bold',
          boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.4)',
          transition: 'transform 0.2s'
        }}>
          Enter Dashboard →
        </a>
      </main>

      <footer style={{ marginTop: '60px', color: '#475569', fontSize: '14px' }}>
        © 2024 Steady ADHD. Stay Focused.
      </footer>
    </div>
  );
}

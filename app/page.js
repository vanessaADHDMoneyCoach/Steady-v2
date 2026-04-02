import React from 'react';

export default function Home() {
  // 🔗 PASTE YOUR GOOGLE FORM LINK BETWEEN THE QUOTES BELOW
  const googleFormUrl = "https://forms.gle/rMgB2sJkJLguM68Y9";

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1e293b', lineHeight: '1.6', backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <span style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-1.5px', color: '#0f172a' }}>STEADY</span>
        <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#10b981', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase' }}>Join the Waitlist</a>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '100px 20px 80px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: '#f1f5f9', borderRadius: '30px', color: '#475569', fontSize: '14px', fontWeight: '700', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
          ✨ BUILT FOR THE NEURODIVERGENT COMMUNITY
        </div>
        
        <h1 style={{ fontSize: '68px', fontWeight: '900', letterSpacing: '-3px', marginBottom: '24px', color: '#0f172a', lineHeight: '1.0' }}>
          Rules, Not Resolutions.<br />
          <span style={{ color: '#10b981' }}>Money Managed.</span>
        </h1>
        
        <p style={{ fontSize: '22px', color: '#64748b', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px', fontWeight: '400' }}>
          Stop fighting "Executive Function" fatigue. Steady uses **Money Containers** and **Automated Rules** to create a financial system that works <i>with</i> your brain, not against it.
        </p>
        
        <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" style={{ 
          display: 'inline-block',
          padding: '22px 50px', 
          backgroundColor: '#0f172a', 
          color: 'white', 
          borderRadius: '16px', 
          textDecoration: 'none', 
          fontWeight: '800', 
          fontSize: '22px',
          boxShadow: '0 25px 30px -10px rgba(0, 0, 0, 0.2)'
        }}>
          Get Early Access
        </a>
      </header>

      {/* The Methodology Section */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          <div style={{ padding: '45px', backgroundColor: 'white', borderRadius: '32px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>📦</div>
            <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '16px', color: '#0f172a' }}>Money Containers</h3>
            <p style={{ color: '#64748b', fontSize: '18px' }}>Assign only the cash you have. Visual boundaries ensure you never overspend on impulse again. If the container is full, your brain can rest.</p>
          </div>

          <div style={{ padding: '45px', backgroundColor: 'white', borderRadius: '32px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>⚙️</div>
            <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '16px', color: '#0f172a' }}>Automated Rules</h3>
            <p style={{ color: '#64748b', fontSize: '18px' }}>Recurring calendars meet Monarch-style intelligence. We build the rules once so you don't have to manage the chaos every day.</p>
          </div>

          <div style={{ padding: '45px', backgroundColor: '#10b981', color: 'white', borderRadius: '32px', boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.3)' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>🛑</div>
            <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '16px' }}>Impulse Interrupter</h3>
            <p style={{ color: '#ecfdf5', fontSize: '18px' }}>The "Circuit Breaker" for dopamine-driven spending. Catch the trigger, log the stash, and protect your long-term wealth.</p>
          </div>

        </div>
      </section>

      <footer style={{ padding: '80px 20px', textAlign: 'center', color: '#94a3b8', fontSize: '15px' }}>
        Designed with care for the Neurodivergent Community. <br />
        © 2026 Steady ADHD.
      </footer>
    </div>
  );
}

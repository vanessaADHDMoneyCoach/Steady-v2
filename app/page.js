import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1e293b', lineHeight: '1.5' }}>
      {/* Navigation */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9' }}>
        <span style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-1px', color: '#0f172a' }}>STEADY</span>
        <a href="/dashboard" style={{ textDecoration: 'none', color: '#10b981', fontWeight: 'bold' }}>Launch App</a>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '56px', fontWeight: '900', letterSpacing: '-2px', marginBottom: '20px', color: '#0f172a' }}>
          Total Control for the <span style={{ color: '#10b981' }}>Impulsive Brain.</span>
        </h1>
        <p style={{ fontSize: '22px', color: '#64748b', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
          The envelope method of YNAB meets the intelligence of Monarch. 
          Built with a built-in "Circuit Breaker" for impulse spending.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a href="/dashboard" style={{ padding: '18px 36px', backgroundColor: '#0f172a', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
            Start Your Budget
          </a>
          <button style={{ padding: '18px 36px', backgroundColor: 'white', border: '2px solid #e2e8f0', borderRadius: '12px', fontWeight: 'bold', fontSize: '18px' }}>
            See How it Works
          </button>
        </div>
      </header>

      {/* Feature Grid */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          
          <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Proactive Budgeting</h3>
            <p style={{ color: '#64748b' }}>Give every dollar a job before you spend it. Zero-based budgeting that actually sticks.</p>
          </div>

          <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Wealth Overview</h3>
            <p style={{ color: '#64748b' }}>Beautiful visualization of your net worth, recurring bills, and cash flow in one place.</p>
          </div>

          <div style={{ padding: '30px', backgroundColor: '#10b981', color: 'white', borderRadius: '20px', boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.3)' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Impulse Interrupter</h3>
            <p style={{ color: '#ecfdf5' }}>The "Wait" button for your wallet. Log the urge, save the money, and break the cycle.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
    </div>
  );
}

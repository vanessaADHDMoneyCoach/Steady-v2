export default function Home() {
  return (
    <div style={{ padding: '100px', textAlign: 'center', fontFamily: 'sans-serif', color: '#334155' }}>
      <h1 style={{ fontSize: '48px', fontWeight: '900' }}>STEADY</h1>
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>Stop impulse spending. Start stashing.</p>
      <a href="/dashboard" style={{ 
        padding: '15px 30px', 
        backgroundColor: '#10b981', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '8px',
        fontWeight: 'bold' 
      }}>
        Open My Dashboard
      </a>
    </div>
  );
}

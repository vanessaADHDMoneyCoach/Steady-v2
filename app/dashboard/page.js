"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function ImpulseInterruptor() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [location, setLocation] = useState("");
  const [goal, setGoal] = useState(100); // Default goal
  const [totalSaved, setTotalSaved] = useState(0);

  // Load savings from Supabase on start
  useEffect(() => {
    fetchTotal();
  }, []);

  const fetchTotal = async () => {
    const { data } = await supabase.from('stashes').select('amount');
    if (data) {
      const sum = data.reduce((acc, curr) => acc + curr.amount, 0);
      setTotalSaved(sum);
    }
  };

  const handleNotBuy = async () => {
    const numericAmount = parseFloat(amount);
    
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert("Please enter a valid price first!");
      return;
    }

    setLoading(true);

    try {
      // This line is the "Handshake" with your database
      const { data, error } = await supabase
        .from('stashes') // <--- TRIPLE CHECK: Is your table named exactly 'stashes'?
        .insert([{ amount: numericAmount }])
        .select();

      if (error) {
        // If Supabase rejects it, this will tell us why (e.g., "Table not found" or "RLS error")
        console.error("Supabase Error Details:", error);
        alert(`❌ DATABASE ERROR: ${error.message}\n\nHint: ${error.hint || 'Check your Table Name or RLS Policies.'}`);
      } else {
        // If it works, move to the Jar!
        console.log("Success! Data saved:", data);
        setTotalSaved(prev => prev + numericAmount);
        setStep(8); 
      }
    } catch (err) {
      alert("System Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetJar = async () => {
    if (confirm("Are you sure you want to empty your progress?")) {
      await supabase.from('stashes').delete().neq('amount', -1);
      setTotalSaved(0);
      setStep(1);
    }
  };

  return (
    <div style={{ maxWidth: '450px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      
      {/* Progress Toward Goal */}
      <div style={{ marginBottom: '20px', backgroundColor: '#f1f5f9', padding: '15px', borderRadius: '15px' }}>
        <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', color: '#64748b' }}>SAVINGS GOAL: ${goal}</p>
        <div style={{ width: '100%', height: '10px', backgroundColor: '#e2e8f0', borderRadius: '5px', marginTop: '10px' }}>
          <div style={{ width: `${Math.min((totalSaved / goal) * 100, 100)}%`, height: '100%', backgroundColor: '#10b981', borderRadius: '5px', transition: 'width 0.5s' }} />
        </div>
        <input 
          type="number" 
          placeholder="Set Goal $" 
          onChange={(e) => setGoal(e.target.value)}
          style={{ marginTop: '10px', fontSize: '11px', border: 'none', background: 'transparent', textAlign: 'center', width: '80px' }}
        />
      </div>

      {/* STEP 1: THE BIG RED BUTTON */}
      {step === 1 && (
        <button 
          onClick={() => setStep(2)}
          style={{ width: '250px', height: '250px', borderRadius: '50%', backgroundColor: '#ef4444', color: 'white', fontSize: '24px', fontWeight: '900', border: '10px solid #dc2626', cursor: 'pointer', boxShadow: '0 10px 0 #b91c1c' }}
        >
          DO I REALLY<br/>WANT THIS?
        </button>
      )}

      {/* STEP 2: AMOUNT */}
      {step === 2 && (
        <div className="card">
          <h2>How much is it?</h2>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            style={{ padding: '15px', fontSize: '24px', borderRadius: '10px', width: '80%', border: '2px solid #e2e8f0' }}
          />
          <button onClick={() => setStep(3)} style={btnStyle}>Next</button>
        </div>
      )}

      {/* STEP 3: WHY */}
      {step === 3 && (
        <div>
          <h2>Why do I want this?</h2>
          {['Bored', 'Stressed', 'Good Deal', 'Been Wanting it', 'Other'].map(opt => (
            <button key={opt} onClick={() => {setReason(opt); setStep(4);}} style={optionBtn}>{opt}</button>
          ))}
        </div>
      )}

      {/* STEP 4: WHERE */}
      {step === 4 && (
        <div>
          <h2>Where will I use this?</h2>
          {['Home', 'Work', 'School', 'Special Occasion'].map(opt => (
            <button key={opt} onClick={() => {setLocation(opt); setStep(6);}} style={optionBtn}>{opt}</button>
          ))}
          <button onClick={() => setStep(5)} style={optionBtn}>Not Sure</button>
        </div>
      )}

      {/* STEP 5: NOT SURE WARNING */}
      {step === 5 && (
        <div style={{ backgroundColor: '#fff1f2', padding: '20px', borderRadius: '20px', border: '2px solid #fda4af' }}>
          <h2 style={{ color: '#be123c' }}>Pause.</h2>
          <p>If you aren't sure where you'll use it, now is <b>not</b> the time to buy.</p>
          <button onClick={() => setStep(6)} style={btnStyle}>Next</button>
        </div>
      )}

   {/* STEP 6: BUY OR NOT BUY */}
{step === 6 && (
  <div>
    <h2 style={{ marginBottom: '30px', color: '#0f172a' }}>The Moment of Truth</h2>
    
    {/* Buy Button - Minimalist */}
    <button 
      onClick={() => setStep(7)} 
      style={{ ...optionBtn, backgroundColor: '#f1f5f9', color: '#64748b', border: 'none' }}
    >
      BUY IT
    </button>
    
    {/* Not Buy Button - High Energy */}
    <button 
      onClick={handleNotBuy} 
      style={{ 
        ...optionBtn, 
        backgroundColor: '#10b981', 
        color: 'white', 
        fontSize: '24px', 
        boxShadow: '0 10px 0 #059669', // Gives it a 3D "Pressable" look
        border: 'none',
        marginTop: '20px'
      }}
    >
      NOT BUY
    </button>
  </div>
)}

      {/* STEP 7: INTENTIONALITY (BUY PATH) */}
      {step === 7 && (
        <div>
          <h2 style={{ color: '#0f172a' }}>Be Intentional.</h2>
          <p>If you buy this, make sure it serves your life. If not, you can always come back and hit the red button again.</p>
          <button onClick={() => setStep(1)} style={btnStyle}>Reset</button>
        </div>
      )}

      {/* STEP 8: SUCCESS JAR */}
      {step === 8 && (
        <div style={{ animation: 'bounce 0.5s infinite alternate' }}>
          <div style={{ fontSize: '100px' }}>🫙</div>
          <h2 style={{ color: '#10b981' }}>CLINK!</h2>
          <p>You stashed ${amount} into your jar.</p>
          <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Total Saved: ${totalSaved.toFixed(2)}</p>
          <button onClick={() => setStep(1)} style={btnStyle}>Interrupt Another</button>
          <button onClick={resetJar} style={{ marginTop: '20px', background: 'none', border: 'none', color: '#94a3b8', fontSize: '10px', cursor: 'pointer' }}>Empty Jar</button>
        </div>
      )}

    </div>
  );
}

// Styling Objects
const btnStyle = { marginTop: '20px', padding: '15px 30px', backgroundColor: '#0f172a', color: 'white', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer', width: '100%' };
const optionBtn = { display: 'block', width: '100%', padding: '15px', marginBottom: '10px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: 'white', fontWeight: 'bold', cursor: 'pointer' };

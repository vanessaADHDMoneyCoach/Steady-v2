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
  const [totalSaved, setTotalSaved] = useState(0);

  // 1. Load the total on start
  useEffect(() => {
    const fetchTotal = async () => {
      const { data } = await supabase.from('stashes').select('amount');
      if (data) {
        setTotalSaved(data.reduce((acc, curr) => acc + curr.amount, 0));
      }
    };
    fetchTotal();
  }, []);

  // 2. THE BUTTON FUNCTION
  const handleNotBuyClick = async () => {
    console.log("Button pressed!");
    alert("Button Clicked! Checking Database..."); // This PROVES the button works

    const numericAmount = parseFloat(amount) || 0;

    const { error } = await supabase
      .from('stashes')
      .insert([{ amount: numericAmount }]);

    if (error) {
      alert("Database Error: " + error.message);
    } else {
      setTotalSaved(prev => prev + numericAmount);
      setStep(8); // Go to Jar
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      
      <h1 style={{ color: '#0f172a' }}>Total Saved: ${totalSaved.toFixed(2)}</h1>

      {step === 1 && (
        <button onClick={() => setStep(2)} style={{ padding: '50px', borderRadius: '50%', backgroundColor: 'red', color: 'white', fontSize: '20px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
          DO I REALLY WANT THIS?
        </button>
      )}

      {step === 2 && (
        <div>
          <h2>How much?</h2>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            style={{ padding: '15px', fontSize: '20px', width: '100%', boxSizing: 'border-box' }}
          />
          <button onClick={() => setStep(3)} style={{ marginTop: '10px', padding: '15px', width: '100%' }}>Next</button>
        </div>
      )}

      {/* Skipping questions for the test - Straight to the buttons */}
      {step === 3 && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => setStep(1)} style={{ padding: '15px', width: '100%', marginBottom: '10px' }}>BUY IT</button>
          
          <button 
            onClick={handleNotBuyClick} 
            style={{ 
              padding: '30px', 
              width: '100%', 
              backgroundColor: '#10b981', 
              color: 'white', 
              fontSize: '24px', 
              fontWeight: 'bold', 
              borderRadius: '15px', 
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 5px 0 #059669'
            }}
          >
            NOT BUY
          </button>
        </div>
      )}

      {step === 8 && (
        <div>
          <h1 style={{ fontSize: '100px' }}>🫙</h1>
          <h2>CLINK!</h2>
          <button onClick={() => setStep(1)}>Reset</button>
        </div>
      )}

    </div>
  );
}

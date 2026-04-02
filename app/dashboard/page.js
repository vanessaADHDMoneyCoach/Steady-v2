"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// This connects to the keys you saved in Vercel Settings
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function Dashboard() {
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // This function sends the data to your Supabase "stashes" table
  const handleStash = async (e) => {
    e.preventDefault();
    const amount = parseFloat(price);

    if (!amount || amount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    setLoading(true);
    
    const { error } = await supabase
      .from('stashes')
      .insert([{ amount: amount }]);

    if (error) {
      console.error("Error stashing:", error);
      alert("Oops! Check your Supabase table name.");
    } else {
      setTotal(prev => prev + amount);
      setPrice("");
      alert(`Successfully stashed $${amount}!`);
    }
    setLoading(false);
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '100px auto', 
      padding: '30px', 
      borderRadius: '20px', 
      backgroundColor: '#f8fafc',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#1e293b', marginBottom: '10px', fontWeight: '900' }}>DASHBOARD</h1>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>Enter the price of the item you didn't buy.</p>

      <form onSubmit={handleStash}>
        <div style={{ marginBottom: '20px' }}>
          <span style={{ fontSize: '24px', marginRight: '10px', color: '#94a3b8' }}>$</span>
          <input 
            type="number" 
            step="0.01"
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            placeholder="0.00"
            style={{ 
              padding: '15px', 
              fontSize: '24px', 
              width: '150px',
              borderRadius: '12px', 
              border: '2px solid #e2e8f0',
              outline: 'none',
              textAlign: 'center'
            }}
          />
        </div>

        <button 
          type="submit"
          disabled={loading}
          style={{ 
            width: '100%',
            padding: '15px', 
            backgroundColor: loading ? '#94a3b8' : '#10b981', 
            color: 'white', 
            border: 'none', 
            borderRadius: '12px', 
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'transform 0.1s'
          }}
        >
          {loading ? "SAVING..." : "STASH IT"}
        </button>
      </form>

      <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '5px' }}>TOTAL SAVED</p>
        <h2 style={{ fontSize: '36px', margin: '0', color: '#0f172a' }}>${total.toFixed(2)}</h2>
      </div>

      <a href="/" style={{ display: 'block', marginTop: '20px', color: '#94a3b8', fontSize: '12px', textDecoration: 'none' }}>
        ← Back to Home
      </a>
    </div>
  );
}

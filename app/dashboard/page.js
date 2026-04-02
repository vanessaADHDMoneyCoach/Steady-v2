"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function ImpulseInterruptor() {
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [hasMovedMoney, setHasMovedMoney] = useState(false);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { fetchInterruptions(); }, []);

  const fetchInterruptions = async () => {
    const { data } = await supabase
      .from('stashes')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setHistory(data);
  };

  const handleInterrupt = async (e) => {
    e.preventDefault();
    if (!hasMovedMoney) return alert("Please move the money in your bank app first to 'Verify' the interruption!");

    setLoading(true);
    const { error } = await supabase
      .from('stashes')
      .insert([{ 
        item_name: itemName, 
        amount: parseFloat(amount), 
        verified: true 
      }]);

    if (!error) {
      setItemName(""); 
      setAmount(""); 
      setHasMovedMoney(false);
      fetchInterruptions();
    } else {
      alert("Error: Make sure your Supabase table has 'item_name' and 'amount' columns!");
    }
    setLoading(false);
  };

  const totalSaved = history.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* Visual Win Header */}
      <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '30px', borderRadius: '28px', textAlign: 'center', marginBottom: '30px' }}>
        <p style={{ margin: 0, opacity: 0.6, fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Total Interrupted
        </p>
        <h2 style={{ fontSize: '42px', margin: '10px 0', color: '#10b981' }}>${totalSaved.toFixed(2)}</h2>
      </div>

      {/* The Interruptor Form */}
      <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '28px', border: '2px solid #e2e8f0' }}>
        <h3 style={{ marginTop: 0, fontSize: '20px', color: '#1e293b' }}>New Interruption</h3>
        
        <form onSubmit={handleInterrupt} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input 
            placeholder="What item are we interrupting?" 
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            style={{ padding: '16px', borderRadius: '14px', border: '1px solid #cbd5e1', fontSize: '16px' }}
          />
          <input 
            type="number" 
            placeholder="Amount ($)" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ padding: '16px', borderRadius: '14px', border: '1px solid #cbd5e1', fontSize: '16px' }}
          />

          {/* The Manual Action Lock */}
          <div 
            onClick={() => setHasMovedMoney(!hasMovedMoney)}
            style={{ 
              padding: '20px', 
              borderRadius: '14px', 
              backgroundColor: hasMovedMoney ? '#ecfdf5' : '#fff1f2',
              border: '2px dashed',
              borderColor: hasMovedMoney ? '#10b981' : '#f43f5e',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: '0.2s'
            }}
          >
            <input type="checkbox" checked={hasMovedMoney} readOnly style={{ transform: 'scale(1.5)' }} />
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', lineHeight: '1.2' }}>
              I have manually moved this money into my "Container" in my bank app.
            </span>
          </div>

          <button 
            type="submit" 
            disabled={!hasMovedMoney || loading}
            style={{ 
              padding: '20px', 
              backgroundColor: hasMovedMoney ? '#10b981' : '#94a3b8', 
              color: 'white', 
              borderRadius: '14px', 
              fontWeight: '900', 
              fontSize: '18px',
              border: 'none',
              cursor: hasMovedMoney ? 'pointer' : 'not-allowed',
              marginTop: '10px'
            }}
          >
            {loading ? "VERIFYING..." : "CONFIRM INTERRUPTION"}
          </button>
        </form>
      </div>

      {/* History */}
      <div style={{ marginTop: '40px' }}>
        <h4 style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Successful Interruptions</h4>
        {history.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #f1f5f9' }}>
            <span style={{ color: '#1e293b' }}>{item.item_name}</span>
            <span style={{ color: '#10b981', fontWeight: 'bold' }}>+${item.amount.toFixed(2)} ✅</span>
          </div>
        ))}
      </div>
    </div>
  );
}

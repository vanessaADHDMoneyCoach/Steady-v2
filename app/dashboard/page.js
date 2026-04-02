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
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. Fetch existing stashes on load
  useEffect(() => {
    fetchStashes();
  }, []);

  const fetchStashes = async () => {
    const { data, error } = await supabase
      .from('stashes')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setHistory(data);
  };

  // 2. The "Interrupt" Function
  const handleInterrupt = async (e) => {
    e.preventDefault();
    if (!amount || !itemName) return alert("Fill in both fields to interrupt the impulse!");

    setLoading(true);
    const { error } = await supabase
      .from('stashes')
      .insert([{ item_name: itemName, amount: parseFloat(amount) }]);

    if (!error) {
      setItemName("");
      setAmount("");
      fetchStashes(); // Refresh the list
    } else {
      console.error(error);
      alert("Error saving. Check your Supabase table columns!");
    }
    setLoading(false);
  };

  const totalSaved = history.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* Top Stat Card */}
      <div style={{ backgroundColor: '#10b981', color: 'white', padding: '40px', borderRadius: '24px', textAlign: 'center', marginBottom: '30px' }}>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>Total Impulse Savings</p>
        <h2 style={{ fontSize: '48px', margin: '10px 0' }}>${totalSaved.toFixed(2)}</h2>
      </div>

      {/* The Input Form */}
      <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ marginTop: 0, color: '#1e293b' }}>Interrupt an Impulse</h3>
        <form onSubmit={handleInterrupt}>
          <input 
            placeholder="What was the item?" 
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            style={{ width: '100%', padding: '15px', marginBottom: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          />
          <input 
            type="number" 
            placeholder="How much was it? ($)" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '12px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
          />
          <button 
            type="submit" 
            disabled={loading}
            style={{ width: '100%', padding: '18px', backgroundColor: '#0f172a', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {loading ? "SAVING..." : "INTERRUPT & STASH"}
          </button>
        </form>
      </div>

      {/* Recent History List */}
      <div style={{ marginTop: '40px' }}>
        <h4 style={{ color: '#64748b', textTransform: 'uppercase', fontSize: '12px' }}>Recent Wins</h4>
        {history.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #f1f5f9' }}>
            <span style={{ color: '#1e293b', fontWeight: '500' }}>{item.item_name}</span>
            <span style={{ color: '#10b981', fontWeight: 'bold' }}>+${item.amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
    </div>
  );
}

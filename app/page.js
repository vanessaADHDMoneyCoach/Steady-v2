"use client";
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function Home() {
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);

  const handleStash = async () => {
    const amt = parseFloat(price) || 0;
    await supabase.from('stashes').insert([{ amount: amt }]);
    setTotal(prev => prev + amt);
    setPrice("");
    alert("Saved to Database!");
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#cbd5e1' }}>STEADY</h1>
      <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        placeholder="How much?"
        style={{ padding: '15px', fontSize: '20px', borderRadius: '10px', border: '1px solid #ddd' }}
      />
      <button onClick={handleStash} style={{ padding: '15px 30px', marginLeft: '10px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>STASH IT</button>
      <h2 style={{ marginTop: '40px' }}>Total Stashed: ${total.toFixed(2)}</h2>
    </div>
  );
}

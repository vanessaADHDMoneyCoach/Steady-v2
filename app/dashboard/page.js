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
      <p style={{ color: '#64748b', marginBottom: '30px' }}>Enter the price

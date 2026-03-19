import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ marginBottom: '2rem', color: '#006633' }}>Wimbledon Design System Components</h1>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Available Pages</h2>
        
        <Link href="/form" style={{ 
          padding: '1rem',
          backgroundColor: '#e4e9f1',
          color: '#121619',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 500,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Form Components</span>
          <span>→</span>
        </Link>
        
        <Link href="/order-of-play" style={{ 
          padding: '1rem',
          backgroundColor: '#006633',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 500,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <span>Order of Play Screen</span>
          <span>→</span>
        </Link>
        
        <Link href="/wimbledon-live" style={{ 
          padding: '1rem',
          backgroundColor: '#023D38',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 500,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Wimbledon Live Screen</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

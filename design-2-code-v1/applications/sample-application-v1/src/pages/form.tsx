import React from 'react';
import Link from 'next/link';

const FormPage: React.FC = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '2rem', 
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ color: '#006633' }}>Form Examples Page</h1>
      <p>The form components are currently disabled as we're focusing on the Order of Play screen.</p>
      
      <div style={{
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <h2>Navigation</h2>
        <Link href="/" style={{ 
          display: 'block',
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#006633',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          textDecoration: 'none',
          textAlign: 'center'
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default FormPage;
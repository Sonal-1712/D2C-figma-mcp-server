// WimbledonLiveScreen.tsx
import React from 'react';
// Removed problematic import
import Link from 'next/link';

/**
 * WimbledonLiveScreen component for the Next.js app
 */
const WimbledonLiveScreen: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Navigation Header */}
      <header style={{ 
        backgroundColor: 'white',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '2rem' }}>
            <span style={{ fontSize: '1.5rem' }}>☰</span>
          </button>
          
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Tickets</a>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Museum and Tour</a>
            <a href="#" style={{ 
              textDecoration: 'none', 
              color: 'black', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem' 
            }}>
              Shop <span>→</span>
            </a>
          </nav>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <img 
            src="https://www.wimbledon.com/assets/logos/header-logo.svg" 
            alt="Wimbledon Logo" 
            style={{ height: '3rem' }}
          />
          <div style={{ fontSize: '0.75rem', color: '#333' }}>
            30 June - 13 July 2025
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <span style={{ fontSize: '1.2rem' }}>🔍</span>
          </button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <span style={{ fontSize: '1.2rem' }}>👤</span>
          </button>
        </div>
      </header>
      
      {/* Back Button */}
      <div style={{ padding: '1rem 2rem' }}>
        <Link href="/" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          color: '#006633', 
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: 500
        }}>
          <span>←</span> Back
        </Link>
      </div>
      
      {/* Main Content */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        backgroundColor: '#f5f5f5',
        color: 'black',
        fontFamily: 'Arial, sans-serif',
      }}>
        {/* Title Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '1rem 0 2rem',
        }}>
          <div style={{
            fontSize: '16px',
            marginBottom: '8px',
            fontWeight: 500,
            color: '#6B6B6B',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>THE CHAMPIONSHIPS 2026</div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 700,
            letterSpacing: '0.02em',
            margin: 0,
            color: '#000000',
          }}>WIMBLEDON LIVE</h1>
        </div>
        
        {/* Video and Media List Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '24px',
          marginBottom: '3rem',
        }}>
          {/* Main Video */}
          <div>
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%', /* 16:9 aspect ratio */
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#000',
              marginBottom: '16px',
            }}>
              {/* Tennis court image placeholder */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("https://www.wimbledon.com/images/pics/large/w_31j_01_5048.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
                {/* Score Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}>
                    <span style={{ fontWeight: 'bold' }}>BERRETTINI</span>
                    <span>6 4 3</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}>
                    <span style={{ fontWeight: 'bold' }}>HURKACZ</span>
                    <span>3 6 0</span>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: '16px',
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}>
                    <p style={{ fontSize: '12px', color: 'white', margin: 0 }}>0:10 / 0:41</p>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <div style={{ cursor: 'pointer', color: 'white' }}>🔊</div>
                      <div style={{ cursor: 'pointer', color: 'white' }}>🔈</div>
                      <div style={{ cursor: 'pointer', color: 'white' }}>⤢</div>
                    </div>
                  </div>
                  
                  <div style={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '4px',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute',
                      width: '25%',
                      height: '4px',
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      left: 0,
                      top: 0,
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '4px' }}>
                The Wimbledon Channel
              </h2>
              <p style={{ fontSize: '14px', color: '#6B6B6B', margin: 0 }}>
                9am - Close of play
              </p>
            </div>
          </div>
          
          {/* Media List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Channel 1 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: '#ebf5e9',
              border: '1px solid #bcdeb8',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    gap: '4px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backgroundColor: '#D72A2A',
                    color: 'white',
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                    }}></span>
                    <span>ON AIR</span>
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>
                    The Wimbledon Channel
                  </h3>
                  <p style={{ fontSize: '12px', color: '#6B6B6B', margin: 0 }}>
                    9am - Close of play
                  </p>
                </div>
              </div>
              <div style={{ cursor: 'pointer', fontSize: '1.2rem' }}>•</div>
            </div>
            
            {/* Channel 2 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'white',
              border: '1px solid #e5e5e5',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    gap: '4px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backgroundColor: '#D72A2A',
                    color: 'white',
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                    }}></span>
                    <span>ON AIR</span>
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>
                    Centre Court Channel
                  </h3>
                  <p style={{ fontSize: '12px', color: '#6B6B6B', margin: 0 }}>
                    9am - Close of play
                  </p>
                </div>
              </div>
            </div>
            
            {/* Channel 3 - Radio */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'white',
              border: '1px solid #e5e5e5',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    gap: '4px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backgroundColor: '#D72A2A',
                    color: 'white',
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                    }}></span>
                    <span>ON AIR</span>
                  </span>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    backgroundColor: '#e5e5e5',
                    color: '#333',
                  }}>RADIO</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>
                    The Wimbledon Radio
                  </h3>
                  <p style={{ fontSize: '12px', color: '#6B6B6B', margin: 0 }}>
                    9am - Close of play
                  </p>
                </div>
              </div>
            </div>
            
            {/* ESPN */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'white',
              border: '1px solid #e5e5e5',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>
                  <span style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#D00',
                    fontFamily: 'Impact, Arial, sans-serif',
                  }}>ESPN</span>
                </div>
                <p style={{ fontSize: '12px', color: '#6B6B6B', margin: 0 }}>
                  Official broadcaster
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Banner Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '3rem',
          textAlign: 'center',
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#6B6B6B',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>EXPLORE MORE</h3>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              margin: '0 0 1rem',
            }}>TV COVERAGE AND SCHEDULES</h2>
            <p style={{
              fontSize: '16px',
              color: '#333',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              Find out exactly where to tune in. Discover the official TV broadcasters in your country to follow every
              match, every day. Get all the details about TV rights holders and streaming partners.
            </p>
          </div>
          <button style={{
            backgroundColor: '#006633',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}>Find Broadcasters</button>
        </div>
      </div>
    </div>
  );
};

export default WimbledonLiveScreen;

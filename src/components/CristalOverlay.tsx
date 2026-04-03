import React from 'react'

interface CristalOverlayProps {
  children: React.ReactNode
}

/**
 * Overlay con efecto cristal (glassmorphism) para menús y paneles.
 * Manteniendo la estética premium de ErBolamm.
 */
export const CristalOverlay: React.FC<CristalOverlayProps> = ({ children }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: '500px',
      backgroundColor: 'rgba(20, 20, 30, 0.75)',
      backdropFilter: 'blur(15px) saturate(180%)',
      WebkitBackdropFilter: 'blur(15px) saturate(180%)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
      padding: '24px',
      zIndex: 1000,
      color: 'white',
      fontFamily: "'Outfit', sans-serif",
      animation: 'cristal-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both'
    }}>
      <style>{`
        @keyframes cristal-fade-in {
          from { opacity: 0; transform: translate(-50%, -45%) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
      {children}
    </div>
  )
}

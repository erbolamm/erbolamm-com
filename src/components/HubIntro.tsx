import React from 'react';

export const HubIntro: React.FC<{ onEnter: () => void }> = ({ onEnter }) => {
  return (
    <div className="hub-intro-overlay">
      <div className="hub-intro-content">
        <h1 className="hub-title-glitch">ERBOLAMM MULTIVERSE</h1>
        <p className="hub-tagline">Un ecosistema digital vivo, interconectado y personal.</p>
        
        <div className="hub-features">
          <div className="hub-feature-item">
            <span className="hub-feature-icon">🌌</span>
            <h3>Exploración Libre</h3>
            <p>Navegá por los proyectos como planetas en un sistema dinámico.</p>
          </div>
          <div className="hub-feature-item">
            <span className="hub-feature-icon">🧠</span>
            <h3>Memoria Persistente</h3>
            <p>Logueate para personalizar el universo y guardar tus propios planetas.</p>
          </div>
          <div className="hub-feature-item">
            <span className="hub-feature-icon">🟢</span>
            <h3>Co-Presencia</h3>
            <p>Mira a otros exploradores recorriendo el universo en tiempo real.</p>
          </div>
        </div>

        <button className="hub-enter-btn" onClick={onEnter}>
          INGRESAR AL HUB →
        </button>
      </div>
    </div>
  );
};

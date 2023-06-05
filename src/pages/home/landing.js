import React from "react";
import { Link } from "react-router-dom";
import './landing.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero">
        <img src="./img/planeta.gif " alt="Globo Girando" className="globo-girando" />
        <h1 className="welcome-message">Bem-vindo ao Clinic Finder</h1>
        <p className="landing-text">Encontre clínicas de qualidade e agende consultas de forma rápida e fácil.</p>
        <Link to="/login" className="login-link">Acesse</Link>
      </div>
    </div>
  );
}

export default LandingPage;


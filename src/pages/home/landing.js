import React from "react";
import { Link } from "react-router-dom";
import './landing.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero">
        <img src="./img/planeta.gif" alt="Globo Girando" className="globo-girando" />
        <h1 className="welcome-message">Seja bem-vindo(a) ao Clinic Finder.</h1>
        <h2 className="welcome-message">Conectando pacientes e clínicas de forma rápida, prática e segura.</h2>
        <p className="landing-text">Aqui você poderá consultar quais clínicas estão localizadas na sua cidade e saber mais informações sobre elas.</p>
        <Link to="/login" className="login-link">Acesse</Link>

        <div className="social-icons">
          <p>    </p>
          <h3 className="title">Nossas Redes Socias </h3>
          <a href="https://www.instagram.com/clinicfinder" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/clinicfinder" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com/clinicfinder" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>

        <p className="contact-info">Telefone: (81) 3252-5569</p>
      </div>
    </div>
  );
}

export default LandingPage;

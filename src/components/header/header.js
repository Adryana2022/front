import React from 'react';
import './headerr.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white" data-bs-theme="light">
        <div className="container-fluid container">
          <a className="navbar-brand a1" href="/">
            <img src="https://i.imgur.com/8Sl94Mh.png" width="95%" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cadastro">Cadastro</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cadastroClin">Cadastro Clinicas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sobre">Sobre nós</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Busca">Busca Estabelecimentos</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

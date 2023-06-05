import React from 'react'
import './headerr.css'
import { Link, useLocation } from 'react-router-dom';

function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-white" data-bs-theme="light">
                <div className="container-fluid container">
                    <a className="navbar-brand a1" href="/"><img src='https://i.imgur.com/8Sl94Mh.png' width="95%" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/cadastro">Cadastro</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/sobre">Sobre nós</a>
                        </li>
                       
                        <li className="nav-item">
                        <a className="nav-link" href="/Busca">Busca Estabelecimentos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/MapComponet">maps</a>
                        </li>
                      
                      
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Header

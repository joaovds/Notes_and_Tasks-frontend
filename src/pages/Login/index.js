import React from 'react';
import { Link } from 'react-router-dom';
// import { FaGithub, FaEnvelope } from 'react-icons/fa';

import './style.css';

import logoImg from '../../assets/logo.png';

export default function login() {
    return (
        <div className="login-container">
            <header>
                <div className="logo">
                    <img src={ logoImg } alt="Logo" className="logo-header" />
                </div>
                
                <div className="buttons">
                    <Link className="button login" to="/login">
                        Log in
                    </Link>
                    <Link className="button register" to="/register">
                        Register
                    </Link>
                </div>
                
            </header>
        </div>
    );
}
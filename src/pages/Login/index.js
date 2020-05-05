import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserPlus, FaSignInAlt, FaUser, FaArrowLeft } from 'react-icons/fa';

import './style.css';

import logoImg from '../../assets/logo.png';

export default function Login() {
    return (
        <div className="login-container">
            <header>
                <div className="logo">
                    <img src={ logoImg } alt="Logo" className="logo" />
                </div>

                <div className="title">
                    <h1>Login</h1>
                </div>
                
                <div className="buttons">
                    <Link className="button create-user" to="">
                        Criar Conta
                        <FaUserPlus size="28" color="white" className="icone" />
                    </Link>
                    <Link className="button login" to="/login">
                        login
                        <FaSignInAlt size="22" color="white" className="icone" />
                    </Link>
                </div>
            </header>

            <section>
                <div className="icone">
                    <FaUser size="130" color="black" />
                </div>
                <form>
                    <input
                        placeholder="E-mail"
                        type="email"
                    />
                    <input
                        placeholder="Senha"
                        type="password"
                    />
                    <button type="submit">Login</button>

                    <Link className="back" to="/">
                        <FaArrowLeft size="25" color="black" />
                        Voltar ao início
                    </Link>
                </form>
            </section>

            <footer>
            </footer>
        </div>
    );
}

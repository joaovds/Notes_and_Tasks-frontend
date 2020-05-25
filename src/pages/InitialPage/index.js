import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/FooterPages';
import './style.css';

import logoImg from '../../assets/logo.png';

export default function Initial() {
    return (
        <div className="initial-container">
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

            <section>
                <div className="text">
                    <p className="firstText">
                        Agora ficou fácil a organização das tarefas do dia-a-dia!
                    </p>
                    <p className="lastText">
                    Crie uma agora mesmo, e se você já é inscrito, compartilhe a
                    experiência com seus amigos e familiares.
                    </p>

                    <Link className="button saberMais" to="/">
                        Saber mais
                    </Link>
                </div>

                <img src={ logoImg } alt="Logo" className="logo-section" />
            </section>

            <Footer />
        </div>
    );
}
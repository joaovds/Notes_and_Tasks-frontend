import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserPlus, FaSignInAlt } from 'react-icons/fa';

import './style.css';

import logoImg from '../../assets/logo.png';

export default function Initial() {
    return (
        <div className="initial-container">
            <header>
                <div className="logo">
                    <img src={ logoImg } alt="Logo" className="logo" />
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
                <div className="title">
                    <h1>
                        Notes
                    </h1>
                    <h2>and</h2>
                    <h1>
                        Tasks
                    </h1>
                </div>
                <div className="text">
                    <p>
                        Agora ficou fácil a organização das tarefas do dia-a-dia!
                        Com <b><i>Notes and Tasks</i></b> Suas anotações e tarefas estão organizadas
                        e seguras.
                    </p>
                    <p>
                        Se ainda não tem uma conta, crie uma agora mesmo...basta clicar no botão
                        "Criar Conta" na parte superior da página, e se você já é inscrito, compartilhe a experiência
                        com seus amigos e familiares.
                    </p>
                </div>
            </section>

            <footer>
            </footer>
        </div>
    );
}

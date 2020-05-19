import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../FooterPages';
import './style.css';

import logoImg from '../../assets/logo.png';
import tasksBan2 from '../../assets/undraw_tasks2.png';

export default function Register() {
    return (
        <div className="register-container">
            <header>
                <div className="logo">
                    <img src={ logoImg } alt="Logo" className="logo-header" />
                </div>
                
                <div className="buttons">
                    <Link className="button homePage" to="/">
                        Home Page
                    </Link>
                    <Link className="button login" to="/login">
                        Log in
                    </Link>
                </div>
            </header>

            <section>
                <img src={ tasksBan2 } alt="tasks" className="tasksBan2" />
                <form>
                    <div className="title">
                        <h1>Register</h1>
                    </div>

                    <div className="inputs">
                        <label for="name">
                            Nome
                        </label>
                        <input
                            name="nome"
                            type="text"
                        />
                        <label for="email">
                            E-mail
                        </label>
                        <input
                            name="email"
                            type="email"
                        />
                        <label for="password">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                        />

                        <button className="button" type="submit">Criar</button>
                        <Link className="button createacont" to="/">
                            Voltar
                        </Link>
                    </div>
                </form>
            </section>

            <Footer />
        </div>
    );
}
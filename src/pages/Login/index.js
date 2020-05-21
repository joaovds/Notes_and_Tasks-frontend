import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Footer from '../FooterPages';
import './style.css';

import logoImg from '../../assets/logo.png';
import tasksBan from '../../assets/undraw_tasks.png';

export default function login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const resposta = await api.post('authenticate', { email, password });

            localStorage.setItem('cd_user', resposta.data.user.cd_user);

            history.push('/myNotes');
        } catch (error) {
            alert('Falha no Login! Confira se você digitou corretamente.');
        }
    }

    return (
        <div className="login-container">
            <header>
                <div className="logo">
                    <img src={ logoImg } alt="Logo" className="logo-header" />
                </div>
                
                <div className="buttons">
                    <Link className="button homePage" to="/">
                        Home Page
                    </Link>
                    <Link className="button register" to="/register">
                        Register
                    </Link>
                </div>
                
            </header>

            <section className="form-login">
                <img src={ tasksBan } alt="tasks" className="tasksBan" />

                <form onSubmit={handleLogin}>
                    <div className="title">
                        <h1>Log In</h1>
                        <h2>Faça login e organize seu dia!</h2>
                    </div>

                    <div className="inputs">
                        <label for="email">
                            E-mail
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label for="password">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button className="button" type="submit">Entrar</button>
                        <Link className="button createacont" to="/register">
                            Ainda não tenho uma conta. Criar uma...
                        </Link>
                    </div>
                </form>
            </section>

            <Footer />
        </div>
    );
}
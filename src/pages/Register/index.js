import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Footer from '../../components/FooterPages';
import './style.css';

import logoImg from '../../assets/logo.png';
import tasksBan2 from '../../assets/undraw_tasks2.png';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, email, password
        }

        try {
            await api.post('user', data);

            alert("Registrado com sucesso!");

            history.push("/login");
        } catch (error) {
            alert("Erro ao cadastrar, tente novamente!");
        }
    }

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
                <form onSubmit={handleRegister}>
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
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
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
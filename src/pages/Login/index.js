import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

import './style.css';

import logoImg from '../../assets/logo.png';
import tasksBan from '../../assets/undraw_tasks.png';

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

            <section className="form-login">
                <img src={ tasksBan } alt="tasks" className="tasksBan" />

                <form>
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
                        />
                        <label for="password">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                        />

                        <button className="button" type="submit">Entrar</button>
                        <Link className="button createacont" to="/register">
                            Ainda não tenho uma conta. Criar uma...
                        </Link>
                    </div>
                </form>
            </section>

            <footer>
                <p>By: João Victor da Silva</p>

                <div className="links">
                    <a className="gitHubIcon" href="https://github.com/joaovds">
                        <FaGithub size="50" color="black" />
                    </a> 

                    <a className="emailIcon">
                        <FaEnvelope size="50" color="black" />
                        <p>jv782063@gmail.com</p>
                    </a>
                </div>
            </footer>
        </div>
    );
}
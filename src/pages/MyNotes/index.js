import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

import './style.css';
import logoImg from '../../assets/logo.png';
import Footer from '../FooterPages';

export default function MyNotes() {
    return (
        <div className="note-container">
            <header>
                <div className="logo">
                    <img src={ logoImg } alt="Logo" className="logo-header" />
                </div>
                
                <div className="buttons">
                    <div className="filter">
                        <label for="filter">Filtrar por:</label>
                        <select name="filter">
                            <option value="maisNovos">Mais novos</option>
                            <option value="maisAntigos">Mais antigos</option>
                            <option value="nome">Nome</option>
                        </select>
                    </div>

                    <button className="button logout">
                        Logout
                    </button>
                    <Link className="button config" to="">
                        <FaCog size="30" />
                    </Link>
                </div>
            </header>

            <Footer />
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaCog, FaEdit, FaTimes } from 'react-icons/fa';

import Modal from '../../components/ModalNewNote/index';

import api from '../../services/api';
import dateformat from 'dateformat';
import '../../config/FormatDate/format';

import './style.css';
import logoImg from '../../assets/logo.png';
import Footer from '../../components/FooterPages';

export default function MyNotes() {

    const [notes, setNotes] = useState([]);
    const [modal, setModal] = useState(false);

    const cd_user = localStorage.getItem('cd_user');
    const history = useHistory();

    useEffect(() => {
        api.get('userNotes', {
            headers: {
                Authorization: cd_user
            }
        }).then(res => {
            setNotes(res.data);
        })
    }, [cd_user]);

    async function handleLogout() {
        localStorage.clear();
        history.push('/');     
    }

    return (
        <div className="note-container">
            <Modal
                open={modal}
                setModal={setModal}
            />

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

                    <button
                        className="button newNote"
                        onClick={() => setModal(true)}
                    >
                        Criar nota
                    </button>
                    <button className="button logout" onClick={handleLogout}>
                        Logout
                    </button>
                    <Link className="button config" to="">
                        <FaCog size="30" />
                    </Link>
                </div>
            </header>

            <section>
                <ul>
                    {notes.map(note => (
                        <li key={note.cd_user}>
                            <button type="button" className="edit">
                                <FaEdit size="22" color="darkblue" />
                            </button>
                            <button type="button" className="delete">
                                <FaTimes size="22" color="rgb(218, 21, 70)" />
                            </button>

                            <strong>{note.title}</strong>
                            <p>{(note.note).substr(0, 75)+'...'}</p>
                            <small>{dateformat(note.updateDate, 'UTC:dddd, dd/mm/yyyy HH:MM:ss')}</small>
                        </li>
                    ))}
                </ul>
            </section>

            <Footer />
        </div>
    );
}
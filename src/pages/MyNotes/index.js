import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaEdit, FaTimes } from 'react-icons/fa';

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

            <ul>
                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Est nulla ipsum incididunt duis labore ad aliqua.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Amet occaecat ad duis nisi deserunt adipisicing quis.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Ea ut elit mollit dolor commodo deserunt laborum quis enim magna ad.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Cupidatat dolore aute ea sunt adipisicing labore ad aute.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Irure cillum eiusmod consequat cupidatat labore mollit consequat occaecat.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Aute aute ut aliquip elit duis.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Aute aute ut aliquip elit duis.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Aute aute ut aliquip elit duis.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Cupidatat dolore aute ea sunt adipisicing labore ad aute.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Irure cillum eiusmod consequat cupidatat labore mollit consequat occaecat.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Aute aute ut aliquip elit duis.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>

                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Aute aute ut aliquip elit duis.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>
                
                <li>
                    <button type="button" className="edit">
                        <FaEdit size="22" color="darkblue" />
                    </button>
                    <button type="button" className="delete">
                        <FaTimes size="22" color="rgb(218, 21, 70)" />
                    </button>

                    <strong>Title</strong>
                    <p>Aute aute ut aliquip elit duis.</p>
                    <small>19/05/2020 - 18:56:37</small>
                </li>
            </ul>

            <Footer />
        </div>
    );
}
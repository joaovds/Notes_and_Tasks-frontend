import React from 'react';

import { FaGithub, FaEnvelope } from 'react-icons/fa';
import './style.css';

export default function Footer() {
    return (
        
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
    );
}
import React from 'react';

import Modal from 'react-modal';

export default function modal(props) {

    const setModal = props.setModal;
    const open = props.open;

    return (
        <Modal isOpen={open} onRequestClose={() => setModal(false)} >
            <h1>teste</h1>
            <p>testando modal</p>
        </Modal>
    );
}
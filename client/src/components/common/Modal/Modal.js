import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.scss';

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }>
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}></footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onClick} />}
      <ModalOverlay {...props} />{' '}
    </Fragment>
  );
};

export default Modal;

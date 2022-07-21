import React from 'react';
import PropTypes from 'prop-types';

import { Container, Wrapper } from './styles';

function Modal({ title, children, showModal }) {
  return (
    <Wrapper>
      <Container>
        <header>
          <h5>{title}</h5>
          <button type="button" onClick={() => showModal(false)}>
            X
          </button>
        </header>
        <main>{children}</main>
      </Container>
    </Wrapper>
  );
}
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  showModal: PropTypes.func.isRequired,
};
export default Modal;

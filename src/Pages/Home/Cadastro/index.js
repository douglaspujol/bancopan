import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Container, Form } from './styles';
import Modal from '../../../Componetes/Modal';
import { addUser, updateUser } from '../../../Store/Users/userSlice';

function Cadastro({ showModal, dataDefault, titleButtonModal, titleModal }) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = React.useState(true);

  const [dataForm, setDataForm] = React.useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
  });
  function handleChange({ target }) {
    const { name, value } = target;
    setDataForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
    if (dataForm.name.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  React.useEffect(() => {
    if (dataDefault) {
      setDataForm(dataDefault);
      setDisabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (dataDefault) {
      dispatch(updateUser(dataForm));
    } else {
      dispatch(addUser(dataForm));
    }
    showModal(false);
  }
  return (
    <Modal title={titleModal} showModal={showModal}>
      <Container>
        <Form
          onChange={e => handleChange(e)}
          onSubmit={e => handleSubmit(e)}
          id="form"
        >
          <input
            type="text"
            placeholder="Nome completo"
            name="name"
            defaultValue={dataForm.name}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            defaultValue={dataForm.email}
          />
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            defaultValue={dataForm.cpf}
          />
          <input
            type="text"
            placeholder="Telefone"
            name="phone"
            defaultValue={dataForm.phone}
          />
        </Form>
        <button type="submit" disabled={disabled} form="form">
          {titleButtonModal}
        </button>
      </Container>
    </Modal>
  );
}
Cadastro.propTypes = {
  showModal: PropTypes.func.isRequired,
  titleModal: PropTypes.string.isRequired,
  titleButtonModal: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  dataDefault: PropTypes.object,
};

export default Cadastro;

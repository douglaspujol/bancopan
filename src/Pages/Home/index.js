import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cadastro from './Cadastro';
import { deleteUser, fetchDataInitial } from '../../Store/Users/userSlice';

import { Container, ListUsers } from './styles';
import api from '../../Services/api';

function Home() {
  const dispatch = useDispatch();
  const [modalCadastro, setModalCadastro] = React.useState(false);
  const users = useSelector(state => state.usersReducer.value);
  const fetchInitial = useSelector(state => state.usersReducer.fetchInicial);

  const [titleButtonModal, setTitleButtonModal] = React.useState(
    'Cadastrar usuário'
  );
  const [titleModal, setTitleModal] = React.useState('Cadastro de usuário');
  const [userEdit, setUserEdit] = React.useState();

  function handleDelete(ind) {
    dispatch(deleteUser(ind));
  }
  function handleEdit(el) {
    setUserEdit(el);
    setTitleButtonModal('Salvar edições');
    setTitleModal('Editar usuário');
    setModalCadastro(true);
  }
  function handleNewUser() {
    setUserEdit(null);
    setTitleButtonModal('Novo usuário');
    setTitleModal('Salvar usuário');
    setModalCadastro(true);
  }
  React.useEffect(() => {
    async function getDataInicial() {
      const { data } = await api.get('/users');
      dispatch(fetchDataInitial(data));
    }
    if (!fetchInitial) {
      getDataInicial();
    }
  }, []);
  return (
    <Container>
      <h1>Banco Pan</h1>
      <button type="button" onClick={() => handleNewUser()}>
        Adicionar usuário +
      </button>
      <ListUsers>
        {users.length > 0 ? (
          users.map((el, ind) => (
            <li key={el.id}>
              <div className="info-user">
                <h2>{el.name}</h2>
                <p>
                  <strong>CPF: </strong>
                  {el?.cpf ? el.cpf : `--`}
                </p>
                <p>
                  <strong>E-mail: </strong>
                  {el?.email ? el.email : `--`}
                </p>
                <p>
                  <strong>Telefone: </strong>
                  {el?.phone ? el.phone : `--`}
                </p>
              </div>
              <div className="actions-user">
                <button type="button" onClick={() => handleEdit(el, ind)}>
                  Editar
                </button>
                <button type="button" onClick={() => handleDelete(ind)}>
                  Excluir
                </button>
              </div>
            </li>
          ))
        ) : (
          <span>Lista vazia</span>
        )}
      </ListUsers>
      {modalCadastro && (
        <Cadastro
          showModal={setModalCadastro}
          dataDefault={userEdit}
          setUserEdit={setUserEdit}
          titleButtonModal={titleButtonModal}
          titleModal={titleModal}
        />
      )}
    </Container>
  );
}

export default Home;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../Store/Users/userSlice';
// import { Container } from './styles';
function Home() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersReducer.value);
  const [value, setValue] = React.useState('');
  function handleClick() {
    dispatch(addUser(value));
  }

  function onChange({ target }) {
    setValue(target.value);
  }
  return (
    <div>
      {users.map(el => (
        <h1 key={el}>{el}</h1>
      ))}
      <input type="text" onChange={onChange} value={value} />
      <button type="button" onClick={handleClick}>
        ADD USER
      </button>
    </div>
  );
}

export default Home;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    margin: 20px 0;
    background: #42c8ed;
    border: none;
    min-width: 230px;
    padding: 16px 30px;
    color: #fff;
    border-radius: 30px;
    font-weight: 700;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    &:disabled {
      cursor: no-drop;
      background: #f1f1ff;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 10px 15px;
    margin-bottom: 10px;
  }
`;

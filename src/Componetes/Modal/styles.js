import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #222;
    min-width: 400px;
    padding: 10px 20px;
    button {
      border: none;
      padding: 10px;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      background: #f25d50;
      color: #fff;
    }
  }
  main {
    padding: 20px;
  }
`;
export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 1;
  left: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

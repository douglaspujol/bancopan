import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 500;
  }
  > button {
    background: #42c8ed;
    border: none;
    min-width: 230px;
    padding: 16px 30px;
    color: #fff;
    border-radius: 30px;
    font-weight: 700;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
`;
export const ListUsers = styled.ul`
  margin-top: 40px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 400px;
    border-left: 6px solid #42c8ed;
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    padding: 15px;
    margin-bottom: 10px;
    div.info-user {
      h2 {
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
    div.actions-user {
      display: flex;
      align-items: center;
      flex-direction: column;
      button {
        border: none;
        padding: 10px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        background: #f25d50;
        color: #fff;

        &:first-child {
          margin-bottom: 10px;
          background: #42c8ed;
        }
      }
    }
  }
`;

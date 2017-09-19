import styled from 'styled-components';

export default styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;

  button {
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
`;

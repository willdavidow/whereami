import styled from 'styled-components';

export default styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: #EEEEEE;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);
  width: 220px;
  height: 150px;
  z-index: 2;

  .scoreboard__list {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .scoreboard__item {
    display: flex;
    flex: 1;
    flex-direction: row;
    &:before {
      content: attr(data-label);
      display: flex;
      width: 125px;
    }
  }
`;

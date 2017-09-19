// this file not being used... couldn't get styled components to inject into
// containerElement and mapElement properly... ToDo: Make this work because
// it's cleaner?

import styled from 'styled-components';

export const ContainerElement = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 300px;
  height: 250px;
  z-index: 2;
`;

export const MapElement = styled.div`
  width: 100%;
  height: 100%;
`;

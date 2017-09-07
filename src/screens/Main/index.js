import { injectGlobal } from 'styled-components';
import MainScreen from './MainScreen';
import MainScreenStyle from './MainScreen.style';

injectGlobal`
  ${MainScreenStyle}
`;

export default MainScreen;

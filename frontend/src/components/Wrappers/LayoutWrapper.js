import styled from 'styled-components';
import { theme } from 'themes';

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  .Main {
    flex: 1;
    display: flex;
    background-image: ${({ black }) =>
      black ? theme.black.bgContent : theme.light.bgContent};
  }
`;

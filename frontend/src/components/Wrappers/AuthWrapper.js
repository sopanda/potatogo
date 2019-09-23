import styled from 'styled-components';
import { theme } from 'themes';

export const AuthWrapper = styled.div`
  max-width: 447px;
  margin: auto;
  width: 90%;
  padding: 68px 0;
  background-color: ${({ black }) => (black ? theme.black.bg : theme.light.bg)};
  -moz-box-shadow: 10px 10px 14px 1px rgba(00, 00, 00, 0.2);
  -webkit-box-shadow: 10px 10px 14px 1px rgba(00, 00, 00, 0.2);
  box-shadow: 10px 10px 14px 1px rgba(00, 00, 00, 0.2);

  & .AuthForm {
    max-width: 238px;
    margin: auto;
  }

  & .Switch {
    font-size: 12px;
    padding: 0 5px;
    color: ${() => theme.colors.white};
  }

  & .ButtonGroup {
    text-align: center;
  }
`;

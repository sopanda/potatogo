import styled from 'styled-components';
import { theme } from 'themes';

export const Button = styled.button`
  max-width: 113px;
  height: 100%;
  width: 100%;
  padding: 8px;
  font-size: 0.8em;
  letter-spacing: 0.094em;
  background: ${() => theme.common.button};
  border: none;
  color: ${() => theme.colors.white};
  border-radius: 12px;
  transition: 0.2s;

  &:hover,
  &:active {
    background: ${() => theme.common.buttonHover};
  }
`;

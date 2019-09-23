import styled from 'styled-components';
import { theme } from 'themes';

export const DestinationMenuWrapper = styled.div`
  max-width: 120px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: absolute;
  background: ${({ black }) => (black ? theme.black.bg : theme.light.bg)};
  z-index: 1000000;
  text-align: center;
  top: 0;

  & .menu-options {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & .menu-options .menu-option {
    font-weight: 500;
    font-size: 12px;
    padding: 8px;
    cursor: pointer;
    word-break: break-word;
  }

  & .menu-options .menu-option.active {
    color: ${theme.colors.green};
    background: rgba(0, 0, 0, 0.2);
  }

  & .menu-options .menu-option:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

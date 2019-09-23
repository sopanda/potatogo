import styled from 'styled-components';
import { theme } from 'themes';

export const NavigationWrapper = styled.div`
  & {
    background-color: ${({ black }) =>
      black ? theme.black.bg : theme.light.bg};
  }

  & a {
    color: ${theme.common.link};
    transition: ${theme.common.linkTransition};
  }

  & a:hover,
  a:focus {
    color: ${theme.common.linkHover};
  }

  & .navbar-toggler {
    border: none;
  }

  & .navbar-nav {
    flex-direction: row;
    justify-content: space-between;
  }

  & .navbar-brand {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 23px;
  }

  & .navbar-brand > span,
  & .active {
    color: ${theme.colors.green};
  }

  & .navbar-nav .dropdown-menu {
    position: absolute;
    left: 0;
  }
`;

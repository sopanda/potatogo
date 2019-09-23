import styled from 'styled-components';
import { theme } from 'themes';
import { MIN_WIDTH_768 } from 'constants/width';

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  width: 170px;
  overflow-x: hidden;
  padding: 1.5rem 1rem;
  display: none;
  text-align: center;

  & a {
    color: ${() => theme.common.link};
    transition: ${() => theme.common.linkTransition};
  }

  & a:hover {
    color: ${() => theme.common.linkHover};
  }

  & .active {
    color: ${theme.colors.green};
  }

  @media (${MIN_WIDTH_768}) {
    display: fixed;
  }
`;

import styled from 'styled-components';
import { MIN_WIDTH_768 } from 'constants/width';
import { theme } from 'themes';

export const SidebarNavigationWrapper = styled.div`
  & .nav {
    list-style: none;
    align-items: center;
  }

  & .active {
    color: ${theme.colors.green};
  }

  @media (${MIN_WIDTH_768}) {
    display: none;
  }
`;
